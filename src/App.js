import Home from "./Components/Pages/Home";
import AboutUS from "./Components/Pages/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Particle from "./Components/Particle/Particle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
      </Routes>
    </Router>
  );
}

export default App;
