import "./LiveMatches.css";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api
      .get("/api/matches") 
      .then((res) => {
        setMatches(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch matches:", err);
      });
  }, []);

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
          <option>NBA</option>
          <option>Soccer</option>
        </select>
      </div>

      {/* Live Matches Grid */}
      <div className="live-matches-grid">
        {matches.map((match) => (
          <div
            key={match.match_id || match.id}
            className={`live-card ${
              match.status !== "live" ? "upcoming" : ""
            }`}
          >
            <div className="live-card-header">
              {match.status === "live" ? (
                <span className="live-tag">LIVE</span>
              ) : (
                <span className="upcoming-tag">UPCOMING</span>
              )}
              <span className="live-time">
                {match.status === "live"
                  ? "Live"
                  : `${match.match_date} ${match.match_time}`}
              </span>
            </div>

            <div className="teams">
              <div className="team">
                <p className="team-name">{match.team1_name}</p>
              </div>

              <p className="score">
                {match.status === "live" || match.status === "finished"
                  ? `${match.score1} - ${match.score2}`
                  : "vs"}
              </p>

              <div className="team">
                <p className="team-name">{match.team2_name}</p>
              </div>
            </div>

            <p className="live-details">
              {match.status === "live"
                ? "Match in progress"
                : "Match not started yet"}
            </p>
          </div>
        ))}

        {matches.length === 0 && (
          <p style={{ opacity: 0.7 }}>
            No live or upcoming matches available.
          </p>
        )}
      </div>
    </div>
  );
}
