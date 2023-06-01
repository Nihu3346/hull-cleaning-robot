import { React } from "react";
import hulcl from "./../Images/shutterstock_175341791.jpg";
import "./../CSS/HullClean.css";
import { Box } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import "./../CSS/InfoPanel.css";
import "../CSS/Home.css";
import Advantage1 from "./Advantage1";
import Advantage2 from "./Advantage2";
import Advantage3 from "./Advantage3";

const HullClean = () => {
  return (
    <>
      <div className="background-section">
        <div className="image-with-text-container">
          <img
            src={hulcl}
            alt="Hull Cleaner"
            style={{ width: "100%", height: "600px" }}
            fluid
            className="image"
          />
          <div className="text-container">
            <h1 className="heading">Commercial & Environmental Advantages</h1>
          </div>
        </div>
        <Box>
          <div>
            <Advantage1 />
          </div>
          <div>
            <Advantage2 />
          </div>
          <div>
            <Advantage3 />
          </div>
        </Box>
      </div>
    </>
  );
};

export default HullClean;
