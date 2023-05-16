import DrawerAppBar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Navbar/Footer";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
