import drone from "./../Images/drone.png";
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

const Advantage3 = () => {
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
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>C</span>
                avitation Jets: Shielding Ships from Invasive Species
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
                The process of manually cleaning a ship's hull using brushes can
                have unintended consequences, such as scraping off the
                anti-fouling coating. This makes ships more vulnerable to
                invasive marine species attacks, which can have devastating
                effects on marine ecosystems and maritime commerce.
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
                Our solution
                uses <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                cavitation jet-based technology
                </span> to clean the hull without
                damaging the protective coating, thereby reducing the risk of
                invasive species colonization. By adopting this technology, we
                can help protect marine life and ensure the longevity of our
                clients' vessels.{" "}
                
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
          backgroundImage: "linear-gradient(to right, #D4A6B0, #4682B4)",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mb: 2,
          marginTop: "60px",
        }}
      >
        Eco-Friendly Cleaning with Responsible Waste Disposal
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
                Diver-based cleaning of ships' hulls is a common practice that
                poses a significant threat to the marine ecosystem.
                Unfortunately, it is often carried out without proper safety
                measures for marine life, resulting in the pollution of the
                ocean abbeys with the waste generated during the cleaning
                process. At our company, we understand the importance of
                preserving marine life and maintaining a healthy ocean
                environment. Therefore, we have adopted eco-friendly cleaning
                methods that prioritize the safety and wellbeing of marine
                species. Our cleaning process is designed to collect all the
                waste generated during the cleaning process and dispose of it
                responsibly, following international norms and regulations. By
                implementing responsible waste disposal practices, we ensure
                that the marine ecosystem is not harmed and that our cleaning
                operations have a minimal impact on the environment. With our
                commitment to eco-friendly cleaning and responsible waste
                disposal, we aim to provide our clients with a cleaning solution
                that is effective, efficient, and environmentally sustainable.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
    </>
  );
};

export default Advantage3;
