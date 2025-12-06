import "./InjuryReports.css";

export default function InjuryReports() {
  return (
    <div className="injury-container">

      {/* Header */}
      <div className="injury-header">
        <h1 className="injury-title">Injury Reports</h1>
        <p className="injury-subtitle">
          Check player injuries across leagues and teams — updated automatically when API is connected.
        </p>
      </div>

      {/* Filters */}
      <div className="injury-filters">
        <select className="injury-select">
          <option>Choose League</option>
          <option>Premier League</option>
          <option>La Liga</option>
          <option>Serie A</option>
          <option>MLS</option>
        </select>

        <select className="injury-select">
          <option>Choose Team</option>
          <option>Team A</option>
          <option>Team B</option>
          <option>Team C</option>
        </select>
      </div>

      {/* Injury List */}
      <div className="injury-list">
        
        {/* Card 1 */}
        <div className="injury-card">
          <div className="injury-player-info">
            <img
              src="https://placehold.co/70x70"
              alt="Player"
              className="injury-player-img"
            />
            <div>
              <h3 className="injury-player-name">Player Name</h3>
              <p className="injury-team">Team Name</p>
            </div>
          </div>

          <div className="injury-details">
            <p><strong>Injury:</strong> Hamstring</p>
            <p><strong>Status:</strong> Out</p>
            <p><strong>Expected Return:</strong> --/--/----</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="injury-card">
          <div className="injury-player-info">
            <img
              src="https://placehold.co/70x70"
              alt="Player"
              className="injury-player-img"
            />
            <div>
              <h3 className="injury-player-name">Another Player</h3>
              <p className="injury-team">Team Name</p>
            </div>
          </div>

          <div className="injury-details">
            <p><strong>Injury:</strong> Knee</p>
            <p><strong>Status:</strong> Day-to-Day</p>
            <p><strong>Expected Return:</strong> TBD</p>
          </div>
        </div>

      </div>
    </div>
  );
}
