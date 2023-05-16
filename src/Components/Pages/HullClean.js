import { React } from "react";
import hulcl from "./../Images/shutterstock_175341791.jpg";
import { Container, Image } from "react-bootstrap";
import "./../CSS/HullClean.css";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import hullcleaner from "../Images/hullcleaner.jpg";
import marine from "../Images/marine.jpg";
import robo from "../Images/robo.png";
import ship3 from "../Images/ship3.png";
import ship5 from "../Images/ship5.jpg";
import ship6 from "../Images/ship6.jpg";
import "./../CSS/InfoPanel.css";

import InfoPanelB from "./InfoPanel-b";
import "../CSS/Home.css";
import Advantage1 from "./Advantage1";
import Advantage2 from "./Advantage2";
import Advantage3 from "./Advantage3";

const spanStyle = {
  padding: "50px",
  color: "#efefef",
  fontWeight: "500",
  fontSize: "35px",
  textAlign: "center",
  backdropFilter: "none",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  backdropFilter: "blur(8px)",
};

const InformationSection = ({ image, title, description, imageOnLeft }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        border: "2px solid #e0e0e0",
        boxShadow: "none",
        maxWidth: "90%",
        margin: "auto",
        marginTop: "45px",
        marginBottom: "45px",
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} order={imageOnLeft ? 1 : 2}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} md={6} order={imageOnLeft ? 2 : 1}>
            <Typography variant="h5" sx={{ textAlign: "center", my: 1 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const HullClean = () => {
  return (
    <>
      <div className="background-section">
        <div className="image-with-text-container">
          <img
            src={hulcl}
            style={{ width: "100%", height: "600px" }}
            fluid
            className="image"
          />
          <div className="text-container">
            <h1 className="heading">Commercial & Environmental Advantages</h1>
          </div>
        </div>
        <Box
          sx={{
            backgroundColor: "#eee",
          }}
          className="main-content-home"
        >
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
