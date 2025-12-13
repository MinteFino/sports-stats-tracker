import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import "./Home.css";

export default function Home() {
  const [snapshot, setSnapshot] = useState({
    liveGames: "--",
    leagues: "NBA, Soccer",
    players: "--",
  });

  useEffect(() => {
    api.get("/api/stats")
      .then((res) => {
        setSnapshot({
          liveGames: res.data.liveGames ?? "--",
          leagues: "NBA, Soccer",
          players: res.data.players ?? "--",
        });
      })
      .catch(() => {
        // keep fallback values if API is not ready
      });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-title">Sports Stats Tracker</h1>
          <p className="home-subtitle">
            Track players, teams, live matches, and injuries — all in one
            dashboard built for fans, coaches, and fantasy players.
            Currently supporting NBA and Soccer.
          </p>

          <div className="home-cta-buttons">
            <Link to="/players" className="primary-btn">
              Search Players
            </Link>
            <Link to="/live" className="secondary-btn">
              View Live Matches
            </Link>
          </div>

          <div className="home-meta">
            <span>NBA & Soccer coverage</span>
            <span>Live match tracking</span>
            <span>Team & player analytics</span>
          </div>
        </div>

        <div className="home-hero-card">
          <h3>Today&apos;s Snapshot</h3>
          <div className="home-card-grid">
            <div className="home-card">
              <p className="card-label">Live Games</p>
              <p className="card-value">{snapshot.liveGames}</p>
              <p className="card-footer">NBA & Soccer matches</p>
            </div>

            <div className="home-card">
              <p className="card-label">Leagues</p>
              <p className="card-value">{snapshot.leagues}</p>
              <p className="card-footer">Currently supported</p>
            </div>

            <div className="home-card">
              <p className="card-label">Players</p>
              <p className="card-value">{snapshot.players}</p>
              <p className="card-footer">Across all teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Feature Grid */}
      <section className="home-sections">
        <div className="home-section">
          <h2>Jump into the data</h2>
          <div className="home-links-grid">
            <Link to="/players" className="home-link-card">
              <h3>Player Search</h3>
              <p>
                Search NBA and Soccer players and view team, position,
                and availability information.
              </p>
            </Link>

            <Link to="/team" className="home-link-card">
              <h3>Team Performance</h3>
              <p>
                Analyze wins, losses, scoring trends, and season performance
                for NBA and Soccer teams.
              </p>
            </Link>

            <Link to="/live" className="home-link-card">
              <h3>Live Matches</h3>
              <p>
                Follow live NBA games and Soccer matches with updated
                scores and match status.
              </p>
            </Link>

            <Link to="/injuries" className="home-link-card">
              <h3>Injury Reports</h3>
              <p>
                View injury reports for NBA and Soccer players to
                support analysis and fantasy decisions.
              </p>
            </Link>
          </div>
        </div>

        <div className="home-section muted">
          <h2>How this platform helps</h2>
          <ul className="home-bullets">
            <li>NBA and Soccer data in one place.</li>
            <li>Quick access to live matches and injury updates.</li>
            <li>Simple interface for analysis and decision-making.</li>
          </ul>
          <p className="home-footnote">
            Live statistics update automatically as backend and sports
            API integrations are completed.
          </p>
        </div>
      </section>
    </div>
  );
}
