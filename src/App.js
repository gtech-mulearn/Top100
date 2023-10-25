import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/Leadboard/board";
import TopCoders from "./Pages/TopCoders";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopCoders />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
