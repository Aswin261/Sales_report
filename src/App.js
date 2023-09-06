import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Chart from "./components/chart";
import Survey from "./tshirt/survey";
import { Bar } from "react-chartjs-2";
import BarChart from "./components/report/barc";
import { Barcharts } from "./tshirt/chart";

function App() {
  return (
    <div className="App">
      {/* <Survey />
      <Barcharts /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/com" element={<Chart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
