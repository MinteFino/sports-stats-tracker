import { useState } from "react";
import "./PlayerSearch.css";

export default function PlayerSearch() {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TEMPORARY FAKE DATA — I will replace with API later
    setTimeout(() => {
      setPlayers([
        { name: "Lionel Messi", team: "Inter Miami", position: "FW", age: 36 },
        { name: "Cristiano Ronaldo", team: "Al Nassr", position: "FW", age: 38 },
      ]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="player-page">
      <div className="player-header">
        <h1>Player Search</h1>
        <p>Search for players and view stats, performance, and more.</p>
      </div>

      <form onSubmit={handleSearch} className="player-search-bar">
        <input
          type="text"
          placeholder="Search for a player..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Searching...</p>}

      <div className="player-results">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <h3>{player.name}</h3>
            <p><strong>Team:</strong> {player.team}</p>
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>Age:</strong> {player.age}</p>
          </div>
        ))}
      </div>

      {!loading && players.length === 0 && (
        <p className="no-results">Search to find players.</p>
      )}
    </div>
  );
}
