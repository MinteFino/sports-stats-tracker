import "./InjuryReports.css";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function InjuryReports() {
  const [injuries, setInjuries] = useState([]);

  useEffect(() => {
    api.get("/api/injuries")
      .then((res) => {
        setInjuries(res.data);
      })
      .catch(() => {
        // keep page stable if API fails
      });
  }, []);

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
          <option>NBA</option>
          <option>Soccer</option>
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

        {injuries.map((injury) => (
          <div className="injury-card" key={injury.id}>
            <div className="injury-player-info">
              <img
                src={injury.image || "https://placehold.co/70x70"}
                alt={injury.playerName}
                className="injury-player-img"
              />
              <div>
                <h3 className="injury-player-name">{injury.playerName}</h3>
                <p className="injury-team">{injury.team}</p>
              </div>
            </div>

            <div className="injury-details">
              <p><strong>Injury:</strong> {injury.injury}</p>
              <p><strong>Status:</strong> {injury.status}</p>
              <p>
                <strong>Expected Return:</strong>{" "}
                {injury.expectedReturn || "TBD"}
              </p>
            </div>
          </div>
        ))}

        {injuries.length === 0 && (
          <p style={{ opacity: 0.7 }}>No injury data available.</p>
        )}

      </div>
    </div>
  );
}
