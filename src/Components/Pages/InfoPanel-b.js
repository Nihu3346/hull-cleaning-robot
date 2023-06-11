import drone from "./../Images/drone.png";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../Slideshow/Slideshowtext-bottom.css";
import WavesTop from "../Slideshow/WavesTop";
import WavesBottom from "../Slideshow/WavesBottom";

const InfoPanelB = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const currentCardRef = cardRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
        } else {
          setIsCardVisible(false);
        }
      });
    }, options);

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <WavesTop />
        <Card
          ref={cardRef}
          style={{
            boxShadow: "none",
            maxWidth: "100%",
            margin: "auto",
            marginTop: "45px",
            marginBottom: "45px",
            borderRadius: 0,
            background: "transparent",
            opacity: isCardVisible ? 1 : 0,
            transform: isCardVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <CardContent>
            <Grid container spacing={2} sx={{ p: 4 }}>
              <Grid item xs={12} md={5} order={1}>
                <div className="image-container">
                  <img
                    src={drone}
                    alt="Hull-Cleaner"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={7} order={2}>
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "left",
                    mb: 2,
                    color: "white",
                    fontWeight: "medium",
                    fontFamily: "PT Sans, sans-serif",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    W
                  </span>
                  hy choose robot?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    Replace
                  </span>{" "}
                  labor-intensive manual hull cleaning technique with automated
                  robotic systems.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    Efficiently
                  </span>{" "}
                  removes biofouling and debris from ship surfaces.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  Aiming to enhance
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    {" "}
                    Productivity
                  </span>
                  , reduce
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    {" "}
                    Cost
                  </span>
                  , and improve
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    {" "}
                    Safety
                  </span>
                  .
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <WavesBottom />
      </div>
    </>
  );
};

export default InfoPanelB;
