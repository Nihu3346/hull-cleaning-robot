import drone from "./../Images/environment3.jpg";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Advantage2 = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
        } else {
          setIsCardVisible(false);
        }
      });
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <Card
        ref={cardRef}
        style={{
          boxShadow: "none",
          maxWidth: "100%",
          margin: "auto",
          background: "black",
          borderRadius: 0,
          color: "#fff",
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
                  style={{
                    width: "100%",
                    borderRadius: "50% 50% 50% 50%",
                    justifyContent: "center",
                  }}
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
                <span style={{ fontWeight: "bold", color: "#3a92fc" }}>E</span>
                co-Friendly Cleaning with Responsible Waste Disposal
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
                We have adopted{" "}
                <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                  eco-friendly
                </span>{" "}
                cleaning methods that prioritize the safety and wellbeing of
                marine species. Our cleaning process is designed to collect all
                the waste generated during the cleaning process and dispose of
                it responsibly, following international norms and regulations.
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
                By implementing responsible waste disposal practices, we ensure
                that the marine ecosystem is not harmed and that our cleaning
                operations have a{" "}
                <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                  minimal impact
                </span>{" "}
                on the environment.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Advantage2;
