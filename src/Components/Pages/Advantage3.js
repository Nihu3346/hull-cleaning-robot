import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import roboBG from "../Images/hull_1.png";

const Advantage3 = () => {
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const card2Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCard2Visible(true);
        } else {
          setIsCard2Visible(false);
        }
      });
    }, options);

    if (card2Ref.current) {
      observer2.observe(card2Ref.current);
    }

    return () => {
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
                avitation Jets
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
                Our solution uses{" "}
                <span style={{ fontWeight: "bold", color: "#d9c409" }}>
                  cavitation jet-based technology
                </span>{" "}
                to clean the hull without damaging the protective coating,
                thereby reducing the risk of invasive species colonization. By
                adopting this technology, we can help protect marine life and
                ensure the longevity of our clients' vessels.{" "}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Advantage3;
