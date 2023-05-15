import Home from "./Components/Pages/Home";
import AboutUS from "./Components/Pages/AboutUs";
import DrawerAppBar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Navbar/Footer";


function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
