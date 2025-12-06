import "./LiveMatches.css";

export default function LiveMatches() {
  return (
    <div className="live-container">
      <h1 className="live-title">Live Matches</h1>
      <p className="live-subtitle">
        Follow real-time scores, events, and match updates across leagues.
      </p>

      {/* League Selector */}
      <div className="live-filters">
        <select className="filter-select">
          <option>Select League</option>
          <option>Premier League</option>
          <option>La Liga</option>
          <option>Bundesliga</option>
          <option>Serie A</option>
        </select>
      </div>

      {/* Live Matches Grid */}
      <div className="live-matches-grid">
        {/* Match Placeholder Card */}
        <div className="live-card">
          <div className="live-card-header">
            <span className="live-tag">LIVE</span>
            <span className="live-time">45'</span>
          </div>

          <div className="teams">
            <div className="team">
              <p className="team-name">Team A</p>
            </div>
            <p className="score">1 - 0</p>
            <div className="team">
              <p className="team-name">Team B</p>
            </div>
          </div>

          <p className="live-details">
            Goal by Player Name (23')
          </p>
        </div>

        {/* Upcoming Match */}
        <div className="live-card upcoming">
          <div className="live-card-header">
            <span className="upcoming-tag">UPCOMING</span>
            <span className="live-time">Starts 3:00 PM</span>
          </div>

          <div className="teams">
            <div className="team">
              <p className="team-name">Team C</p>
            </div>
            <p className="score upcoming-score">vs</p>
            <div className="team">
              <p className="team-name">Team D</p>
            </div>
          </div>

          <p className="live-details">
            Match preview available after API integration.
          </p>
        </div>

      </div>
    </div>
  );
}
