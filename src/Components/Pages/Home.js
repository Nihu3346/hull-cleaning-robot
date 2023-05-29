import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import roboBG from "../Images/roboBG2.png";
import InfoPanelB from "./InfoPanel-b";
import "./../CSS/InfoPanel.css";
import "../CSS/Home.css";
import Slideshowtext from "../Slideshow/Slideshowtext";
import Advantage1 from "./Advantage1";
import Advantage2 from "./Advantage2";
import hulcl from "./../Images/shutterstock_175341791.jpg";

import Advantage3 from "./Advantage3";
import AdvantageMain from "./AdvantageMain";
import AboutUS from "./AboutUs";
const Home = () => {
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCard1Visible(true);
        } else {
          setIsCard1Visible(false);
        }
      });
    }, options);

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCard2Visible(true);
        } else {
          setIsCard2Visible(false);
        }
      });
    }, options);

    if (card1Ref.current) {
      observer1.observe(card1Ref.current);
    }
    if (card2Ref.current) {
      observer2.observe(card2Ref.current);
    }

    return () => {
      if (card1Ref.current) {
        observer1.unobserve(card1Ref.current);
      }
      if (card2Ref.current) {
        observer2.unobserve(card2Ref.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
      className="main-content-home"
    >
      <div className="black-background"></div>
      <Slideshowtext />
      <Card
        ref={card1Ref}
        style={{
          boxShadow: "none",
          maxWidth: "100%",
          height: "100%",
          margin: "auto",
          marginTop: "7px",
          marginBottom: "45px",
          backgroundColor: "#000",
          borderRadius: 0,
          opacity: isCard1Visible ? 1 : 0,
          transform: isCard1Visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <CardContent>
          <Grid container spacing={8} sx={{ p: 4 }}>
            <Grid item xs={12} order={1} sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  color: "#fff",
                  fontWeight: "medium",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>B</span>
                ackground
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "1.4rem",
                  mb: 1,
                }}
              >
                Hull cleaning involves removing{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Marine Growth
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Debris
                </span>{" "}
                from the underwater surface of a ship.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "1.4rem",
                  mb: 1,
                }}
              >
                Manual labor-intensive hull cleaning requires divers to
                physically scrape and clean the hull, which is{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Time-consuming
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Costly
                </span>
                .
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "1.4rem",
                  mb: 1,
                }}
              >
                Robotic hull cleaning offers an{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Efficient
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Cost-effective
                </span>{" "}
                alternative,{" "}
                <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                  Reducing
                </span>{" "}
                labor requirements and improving vessel performance.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        ref={card2Ref}
        style={{
          boxShadow: "none",
          maxWidth: "100%",
          margin: "auto",
          background: "white",
          borderRadius: 0,
          opacity: isCard2Visible ? 1 : 0,
          transform: isCard2Visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <CardContent>
          <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid item xs={12} md={5} order={2}>
              <img
                src={roboBG}
                alt={"Economic Benefits"}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={7} order={1}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "left",
                  mb: 2,
                  color: "black",
                  fontWeight: "medium",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>E</span>
                conomic Benefits
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  color: "black",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "1.4rem",
                  mb: 1,
                }}
              >
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  Reduces
                </span>{" "}
                vessel downtime, increases productivity, and generates higher
                revenue
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  color: "black",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "1.4rem",
                  mb: 1,
                }}
              >
                Offers long-term
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  {" "}
                  Cost Saving
                </span>{" "}
                by eliminating expensive drydocking and improving fuel
                efficiency
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  color: "black",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "1.4rem",
                  mb: 1,
                }}
              >
                Investing in hull cleaning robots is{" "}
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  Economically Beneficial
                </span>{" "}
                for vessel owners and operators.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <div>
        <InfoPanelB />
      </div>
      <div>
        <AdvantageMain />
      </div>
    </Box>
  );
};
export default Home;
