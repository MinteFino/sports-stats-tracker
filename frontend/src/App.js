import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlayerSearch from "./pages/PlayerSearch";
import TeamPerformance from "./pages/TeamPerformance";
import LiveMatches from "./pages/LiveMatches";
import InjuryReports from "./pages/InjuryReports";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<PlayerSearch />} />
        <Route path="/team" element={<TeamPerformance />} />
        <Route path="/live" element={<LiveMatches />} />
        <Route path="/injuries" element={<InjuryReports />} />
      </Routes>
    </Router>
  );
}

export default App;