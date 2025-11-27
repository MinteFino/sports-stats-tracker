import { Link } from "react-router-dom";
import "./Home.css"; 

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Sports Stats Tracker</h1>
      <p className="home-description">
        View player stats, team performance, live match updates, and injury reports — all in one place.
      </p>

      <div className="home-buttons">
        <Link to="/players" className="home-btn">Player Search</Link>
        <Link to="/team" className="home-btn">Team Performance</Link>
        <Link to="/live" className="home-btn">Live Matches</Link>
        <Link to="/injuries" className="home-btn">Injury Reports</Link>
      </div>
    </div>
  );
}
