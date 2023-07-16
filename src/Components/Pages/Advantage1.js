import drone from "./../Images/hull_1.png";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import roboBG from "../Images/time.jpg";
import "../CSS/font-gillory.css"

const Advantage1 = () => {
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const card2Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const currentCard2Ref = card2Ref.current;

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCard2Visible(true);
        } else {
          setIsCard2Visible(false);
        }
      });
    }, options);

    if (currentCard2Ref) {
      observer2.observe(currentCard2Ref);
    }

    return () => {
      if (currentCard2Ref) {
        observer2.unobserve(currentCard2Ref);
      }
    };
  }, []);

  return (
    <>
      <Card
        ref={card2Ref}
        style={{
          boxShadow: "none",
          maxWidth: "100%",
          margin: "auto",
          background: "#fff",
          borderRadius: 0,
          color: "#fff",
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
                  fontFamily: "Gilroy-Regular",
                }}
              >
                {/* <span style={{ fontWeight: "bold", color: "#d9c409" }}>S</span> */}
                Save You Time and Money
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  color: "black",
                  fontFamily: "Gilroy-Regular",
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
                  fontFamily: "Gilroy-Regular",
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
                  fontFamily: "Gilroy-Regular",
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
