import drone from "./../Images/environment3.jpg";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import roboBG from "../Images/hull_1.png";

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
            marginTop: "45px",
            marginBottom: "45px",
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
                <img
                  src={drone}
                  alt="Hull-Cleaner"
                  style={{ width: "100%", borderRadius: "50% 50% 50% 50%", justifyContent: "center" }}
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
                    fontFamily: "PT Sans, sans-serif",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    E
                  </span>
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
                    fontFamily: "PT Sans, sans-serif",
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
                    fontFamily: "PT Sans, sans-serif",
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

      {/* <Typography
        align="center"
        sx={{
          fontSize: 34,
          fontWeight: 600,
          backgroundImage: "linear-gradient(to right, #4682B4, #5DC9C3)",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mb: 2,
          marginTop: "60px",
        }}
      >
        Protecting Ships from Invasive Marine Species with Cavitation Jet-Based
        Technology
      </Typography>
      <Card
        style={{
          borderRadius: "10px",
          border: "2px solid #e0e0e0",
          boxShadow: "none",
          maxWidth: "90%",
          margin: "auto",
          background: "linear-gradient(to right,#4682B4, #5DC9C3)",
          color: "#fff",
          fontFamily: "Roboto",
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} order={2}>
              <img
                src={drone}
                alt="Hull-Cleaner"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={1}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                The process of manually cleaning a ship's hull using brushes can
                have unintended consequences, such as scraping off the
                anti-fouling coating. This makes ships more vulnerable to
                invasive marine species attacks, which can have devastating
                effects on marine ecosystems and maritime commerce. Our solution
                uses cavitation jet-based technology to clean the hull without
                damaging the protective coating, thereby reducing the risk of
                invasive species colonization. By adopting this technology, we
                can help protect marine life and ensure the longevity of our
                clients' vessels.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
    </>
  );
};

export default Advantage2;
