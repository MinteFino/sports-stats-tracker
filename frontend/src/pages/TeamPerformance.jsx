import "./TeamPerformance.css";

export default function TeamPerformance() {
  return (
    <div className="team-container">

      {/* Header */}
      <div className="team-header">
        <img
          src="https://placehold.co/80x80?text=Team"
          alt="Team Logo"
          className="team-logo"
        />

        <div>
          <h1 className="team-title">Team Performance</h1>
          <p className="team-subtitle">
            Analyze team stats, form, and trends across leagues and seasons.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="team-filters">
        <select className="filter-select">
          <option>Choose League</option>
          <option>Premier League</option>
          <option>La Liga</option>
          <option>Serie A</option>
          <option>Bundesliga</option>
          <option>Ligue 1</option>
        </select>

        <select className="filter-select">
          <option>Choose Season</option>
          <option>2023-2024</option>
          <option>2022-2023</option>
          <option>2021-2022</option>
          <option>2020-2021</option>
          <option>2019-2020</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="team-stats-grid">
        <div className="team-stat-card">
          <h3>Wins</h3>
          <p className="stat-value">--</p>
        </div>

        <div className="team-stat-card">
          <h3>Losses</h3>
          <p className="stat-value">--</p>
        </div>

        <div className="team-stat-card">
          <h3>Goals Scored</h3>
          <p className="stat-value">--</p>
        </div>

        <div className="team-stat-card">
          <h3>Goals Conceded</h3>
          <p className="stat-value">--</p>
        </div>
      </div>

      {/* Graph Placeholder */}
      <div className="team-chart">
        <h2>Performance Trend</h2>
        <div className="chart-placeholder">
          <p>Chart will appear here when backend API is connected</p>
        </div>
      </div>

      {/* Recent Matches */}
      <div className="team-matches">
        <h2>Recent Matches</h2>

        <div className="match-card">
          <p className="match-teams">Team A vs Team B</p>
          <p className="match-result">Score: -- : --</p>
          <p className="match-date">Date: --/--/----</p>
        </div>

        <div className="match-card">
          <p className="match-teams">Team C vs Team D</p>
          <p className="match-result">Score: -- : --</p>
          <p className="match-date">Date: --/--/----</p>
        </div>
      </div>

    </div>
  );
}
