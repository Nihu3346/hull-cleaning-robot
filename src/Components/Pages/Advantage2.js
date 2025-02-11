import drone from "./../Images/environment3.jpg";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../CSS/font-gillory.css"

const Advantage2 = () => {
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
    <Card
          ref={cardRef}
          style={{
            boxShadow: "none",
            maxWidth: "100%",
            margin: "auto",
            background: "black",
            opacity: isCardVisible ? 1 : 0,
            transform: isCardVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <CardContent>
            <Grid container spacing={2} sx={{ p: 4 }}>
              <Grid item xs={12} md={5} order={1}>
                <img
                  src={drone}
                  alt="Hull-Cleaner"
                  style={{ width: "100%", borderRadius: "50% 50% 50% 50%"}}
                />
              </Grid>
              <Grid item xs={12} md={7} order={2}>
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "left",
                    mb: 2,
                    color: "white",
                    fontWeight: "medium",
                    fontFamily: "Gilroy-Regular",
                  }}
                >
                  {/* <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    E
                  </span> */}
                  <span style={{ fontWeight: "bold", color: "#E6E6FA" }}>
                  Eco-Friendly Cleaning with Responsible Waste Disposal
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "Gilroy-Regular",
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  
                  We have adopted <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                  eco-friendly
                  </span>{" "} cleaning
                methods that prioritize the safety and wellbeing of marine
                species. Our cleaning process is designed to collect all the
                waste generated during the cleaning process and dispose of it
                responsibly, following international norms and regulations.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "Gilroy-Regular",
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  
                  By
                implementing responsible waste disposal practices, we ensure
                that the marine ecosystem is not harmed and that our cleaning
                operations have a <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                minimal impact
                  </span> on the environment.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "Gilroy-Regular",
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  With our
                commitment to eco-friendly cleaning and responsible waste
                disposal, we aim to provide our clients with a cleaning solution
                that is <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    {" "}
                    effective
                  </span>, 
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    {" "}
                    efficient
                  </span>, and
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    {" "}
                    environmentally sustainable
                  </span>
                  .
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </>
  );
};

export default Advantage2;
