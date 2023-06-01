import drone from "./../Images/hull_1.png";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import roboBG from "../Images/time.jpg";

const Advantage1 = () => {
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
    <>
      {/* <Typography
        align="center"
        sx={{
          fontSize: 34,
          fontWeight: 600,
          backgroundImage: "linear-gradient(to right, #D4A6B0, #4682B4)",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mb: 2,
          marginTop: "10px",
        }}
      >
        How Our Robots Save You Time and Money Compared to Manual Diving Teams
      </Typography>
      <Card
        style={{
          borderRadius: "10px",
          border: "2px solid #e0e0e0",
          boxShadow: "none",
          maxWidth: "90%",
          margin: "auto",
          background: "linear-gradient(to right, #D4A6B0, #4682B4)",
          color: "#fff",
          fontFamily: "Roboto",
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} order={1}>
              <img
                src={drone}
                alt="Hull-Cleaner"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={2}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                In India, the process of cleaning hulls of ships is done
                manually which is a tedious and expensive process. It requires a
                team of 4 divers to work for 3 days to complete a task that can
                be easily accomplished by our hull cleaner robots within a day.
                The manual process has its limitations as divers can only work
                during daylight hours and need to frequently replenish their
                oxygen resources, while our robots can work 24x7 without any
                breaks. With our robots, the process of cleaning hulls will not
                only be efficient but also cost-effective, saving time and
                resources for the shipping industry.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
      <Card
        ref={card2Ref}
        style={{
          boxShadow: "none",
          maxWidth: "100%",
          margin: "auto",
          background: "white",
          borderRadius: 0,
          opacity: isCard2Visible ? 1 : 0,
          transform: isCard2Visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <CardContent>
          <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid item xs={12} md={5} order={2}>
              <div className="image-container">
                <img
                  src={roboBG}
                  alt={"Economic Benefits"}
                  style={{ width: "100%", borderRadius: "50% 50% 50% 50%" }}
                />
              </div>
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
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>S</span>
                ave You Time and Money
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
                  In India,
                </span>{" "}
                the process of cleaning hulls of ships is done manually which is
                a tedious and expensive process. It requires a team of 4 divers
                to work for 3 days to complete a task that can be easily
                accomplished by our hull cleaner robots{" "}
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  within a day.
                </span>
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
                The manual process has its limitations as divers can only work
                during daylight hours and need to frequently replenish their
                oxygen resources, while our robots can work
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  {" "}
                  24x7
                </span>{" "}
                without any breaks.
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
                With our robots, the process of cleaning hulls will not only be{" "}
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  efficient but also cost-effective, saving time and resources
                </span>{" "}
                for the shipping industrys.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Advantage1;
