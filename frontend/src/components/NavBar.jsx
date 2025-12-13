import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2>Sports Stats Tracker</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/team">Teams</Link></li>
        <li><Link to="/live">Live Matches</Link></li>
        <li><Link to="/injuries">Injuries</Link></li>
      </ul>
    </nav>
  );
}