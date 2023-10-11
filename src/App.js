import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/Leadboard/board";
import TopCoders from "./Pages/TopCoders";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopCoders />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
