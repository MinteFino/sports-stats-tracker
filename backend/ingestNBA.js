/**
 * ingestNBA.js
 * Writes NBA teams, players, and recent games to the database.
 *It uses the public balldontlie API
 * and upserts them into the existing Team, Player, and Match tables.
 *
 * To use run this on a dev build: npm run ingest:nba
 * - Uses team names to map API teams to DB teams
 */

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

// Dynamic import for node-fetch to support ESM in CommonJS
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetchFn }) => fetchFn(...args));

const { sequelize, Team, Player, Match } = require("../src/models");
// the balldontlie API base URL and config from env
const API_BASE = "https://api.balldontlie.io/v1";
const API_KEY = process.env.BALLDONTLIE_API_KEY || process.env.BALLDONTLIE_TOKEN || "";
const API_HEADER = process.env.BALLDONTLIE_API_HEADER || "Authorization";
const API_PREFIX = process.env.BALLDONTLIE_API_PREFIX || "Bearer";
const TEAM_LIMIT = Number(process.env.BALLDONTLIE_TEAM_LIMIT || 30); // caps to 30 NBA franchises because balldontlie includes historical teams. 

// current NBA franchises - 3 letter abbreviations to filter API results
const CURRENT_NBA_ABBR = new Set([
  "ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
  "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
  "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS",
]);
const NBA_LEAGUE_ID = 1; // assumed league_id for NBA in our DB
const PER_PAGE = 100;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const formatDate = (date) => date.toISOString().slice(0, 10);
const formatTime = (date) => date.toISOString().slice(11, 16);

async function requestWithRetry(url, options = {}) {
  const maxRetries = 5;
  let attempt = 0;
  while (true) {
    const res = await fetch(url, options);
    // retry on rate limits or transient server errors need to retry on errors with 429 or 5xx status codes because it just means the server is overloaded or we hit a rate limit.
    // we have a basic api key support but no advanced rate limit handling.
    if (res.status === 429 || res.status >= 500) {
      if (attempt >= maxRetries) {
        const text = await res.text();
        throw new Error(`Fetch failed ${res.status} ${res.statusText}: ${text}`);
      }
      const retryAfter = res.headers.get("retry-after");
      const waitMs = retryAfter
        ? Number(retryAfter) * 1000
        : Math.min(16000, 1000 * Math.pow(2, attempt)); // creates an exponential backoff with a max of 16s so we only wait a reasonable time but still back off enough to avoid hammering the server.
      await sleep(waitMs);
      attempt += 1;
      continue;
    }
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Fetch failed ${res.status} ${res.statusText}: ${text}`); // non-retryable error
    }
    return res;
  }
}
// fetch all the page results from the given endpoint 
async function fetchAll(endpoint, params = {}) {
  let page = 1;
  const results = [];
  while (true) {
    const url = new URL(`${API_BASE}/${endpoint}`); // create URL object for easier query param manipulation
    const searchParams = new URLSearchParams({
      per_page: PER_PAGE,
      page: page.toString(),
    });
    Object.entries(params).forEach(([k, v]) => { // append additional params 
      if (Array.isArray(v)) { // if array append each value separately
        v.forEach((item) => searchParams.append(k, item));
      } else if (v !== undefined && v !== null) {
        searchParams.append(k, v);
      }
    });
    url.search = searchParams.toString();

    const res = await requestWithRetry(url.href, {
      headers: API_KEY
        ? {
            [API_HEADER]: API_PREFIX
              ? `${API_PREFIX} ${API_KEY}`
              : API_KEY,
          }
        : {},
    });
    const json = await res.json();
    results.push(...json.data);

    if (!json.meta || !json.meta.next_page) break;
    page = json.meta.next_page;
    await sleep(250); // simple rate-limit buffer
  }
  return results;
}

async function upsertTeams() { // returns mapping of api team id to db team id
  const teams = await fetchAll("teams"); // fetch all teams from the API
  const nbaTeams = teams.filter(
    (t) =>
      (t.nba_franchise === true || t.nba_franchise === 1) && 
      CURRENT_NBA_ABBR.has((t.abbreviation || "").toUpperCase()) // filter to current NBA franchises only because these API include historical teams
  );
  const limitedTeams = TEAM_LIMIT ? nbaTeams.slice(0, TEAM_LIMIT) : nbaTeams; // 
  const apiIdToDbId = {};
  const order = limitedTeams.map((t) => t.id);

  console.log(`Teams fetched: ${teams.length}, NBA franchises: ${nbaTeams.length}, processing: ${limitedTeams.length}`);

  for (const t of limitedTeams) { // upsert each team
    const [team] = await Team.findOrCreate({
      where: { name: t.full_name },
      defaults: { league_id: NBA_LEAGUE_ID },
    });
    // ensure league stays consistent if the row existed
    if (team.league_id !== NBA_LEAGUE_ID) {
      await team.update({ league_id: NBA_LEAGUE_ID });
    }
    apiIdToDbId[t.id] = team.team_id;
  }

  return { apiIdToDbId, order }; // return mapping and order of API team IDs
}

function mapPosition(pos) { // maps the API position to a simplified version (G, F, C, UNK)
  if (!pos) return "UNK";
  const p = pos.toUpperCase();
  if (p.includes("G")) return "G";
  if (p.includes("F")) return "F";
  if (p.includes("C")) return "C";
  return p;
}

async function upsertPlayers(apiTeamToDb, teamOrder) { // need to upsert players for each team
  const ordered = teamOrder && teamOrder.length ? teamOrder : Object.keys(apiTeamToDb); // order of team IDs to process
  const total = ordered.length;

  for (let idx = 0; idx < ordered.length; idx += 1) { // process each team in order
    const apiTeamId = ordered[idx];
    const dbTeamId = apiTeamToDb[apiTeamId];
    console.log(`Players: team ${idx + 1}/${total} (apiId=${apiTeamId})`); 

    const players = await fetchAll("players", { // fetch players for this team
      "team_ids[]": apiTeamId,
    });

    for (const p of players) {
      const first_name = p.first_name || "";
      const last_name = p.last_name || "";
      const position = mapPosition(p.position);

      const existing = await Player.findOne({
        where: { first_name, last_name, team_id: dbTeamId },
      });

      if (existing) {
        await existing.update({ position });
      } else {
        await Player.create({
          first_name,
          last_name,
          position,
          team_id: dbTeamId,
        });
      }
    }

    // small delay between team batches
    await sleep(200);
  }
}

function mapStatus(apiStatus) {
  const s = (apiStatus || "").toLowerCase();
  if (s.includes("final") || s === "final") return "finished";
  if (s.includes("in progress") || s.includes("live")) return "live";
  return "scheduled";
}
// upsert recent and upcoming games
async function upsertGames(apiTeamToDb) {
  const now = new Date();
  const start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // past 7 days
  const end = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // next 3 days

  const games = await fetchAll("games", {
    start_date: formatDate(start),
    end_date: formatDate(end),
  });

  for (const g of games) {
    const homeDbId = apiTeamToDb[g.home_team?.id];
    const awayDbId = apiTeamToDb[g.visitor_team?.id];
    if (!homeDbId || !awayDbId) continue; // skip unknown teams

    const gameDate = new Date(g.date);
    const match_date = formatDate(gameDate);
    const match_time = formatTime(gameDate);

    const payload = {
      team1_id: homeDbId,
      team2_id: awayDbId,
      score1: g.home_team_score || 0,
      score2: g.visitor_team_score || 0,
      status: mapStatus(g.status),
      match_date,
      match_time,
    };
// check if match already exists
    const existing = await Match.findOne({
      where: {
        team1_id: homeDbId,
        team2_id: awayDbId,
        match_date,
      },
    });

    if (existing) {
      await existing.update(payload);
    } else {
      await Match.create(payload);
    }
  }
}
// main function to run the ingestion; connects to DB, fetches and upserts teams, players, and games
async function main() {
  console.log("Connecting to DB...");
  await sequelize.authenticate();

  if (!API_KEY) {
    console.warn("No BALDONTLIE_API_KEY provided. Need to check if the API requires auth, if so set it in .env.");
  }

  console.log("Fetching/upserting NBA teams..");
  const { apiIdToDbId: apiTeamToDb, order } = await upsertTeams();

  console.log("Fetching/upserting NBA players..");
  await upsertPlayers(apiTeamToDb, order);

  console.log("Fetching/upserting recent and upcoming NBA games..");
  await upsertGames(apiTeamToDb);

  console.log("Done.");
}

if (require.main === module) {
  main()
    .then(() => {
      sequelize.close();
      process.exit(0);
    })
    .catch((err) => {
      console.error("Ingest failed:", err.message);
      sequelize.close();
      process.exit(1);
    });
}
