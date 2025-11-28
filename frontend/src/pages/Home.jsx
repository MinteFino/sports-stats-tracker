import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-title">Sports Stats Tracker</h1>
          <p className="home-subtitle">
            Track players, teams, live matches, and injuries — all in one
            modern dashboard built for fans, coaches, and fantasy players.
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
            <span>Real-time stats*</span>
            <span>Multi-league support</span>
            <span>Visual performance trends</span>
          </div>
        </div>

        <div className="home-hero-card">
          <h3>Today&apos;s Snapshot</h3>
          <div className="home-card-grid">
            <div className="home-card">
              <p className="card-label">Live Games</p>
              <p className="card-value">--</p>
              <p className="card-footer">Updated when API is connected</p>
            </div>
            <div className="home-card">
              <p className="card-label">Tracked Leagues</p>
              <p className="card-value">4+</p>
              <p className="card-footer">Premier, La Liga, more…</p>
            </div>
            <div className="home-card">
              <p className="card-label">Players</p>
              <p className="card-value">1000+</p>
              <p className="card-footer">Filter by season & team</p>
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
                Look up individual players and view goals, assists, matches
                played, and injury status.
              </p>
            </Link>

            <Link to="/team" className="home-link-card">
              <h3>Team Performance</h3>
              <p>
                Analyze wins, losses, goal difference, and trends across
                seasons and leagues.
              </p>
            </Link>

            <Link to="/live" className="home-link-card">
              <h3>Live Matches</h3>
              <p>
                Follow live scores, match events, and box scores in near
                real-time.
              </p>
            </Link>

            <Link to="/injuries" className="home-link-card">
              <h3>Injury Reports</h3>
              <p>
                Check injuries by team or league to support coaching and
                fantasy decisions.
              </p>
            </Link>
          </div>
        </div>

        <div className="home-section muted">
          <h2>How Stat Gurus helps users</h2>
          <ul className="home-bullets">
            <li>Sports fans get one central hub instead of checking 3–4 sites.</li>
            <li>Fantasy players can quickly see injuries and recent form.</li>
            <li>
              Coaches and analysts can filter by league and season to spot
              trends.
            </li>
          </ul>
          <p className="home-footnote">
            *Live stats and counts will update automatically once the backend
            and sports API integration are completed.
          </p>
        </div>
      </section>
    </div>
  );
}
