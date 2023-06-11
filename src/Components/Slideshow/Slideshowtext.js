import { Card } from "@mui/material";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import "./Slideshowtext-bottom.css";
import { useEffect, useRef, useState } from "react";
import WavesBottom from "./WavesBottom";
import SlideShowImage from "./SlideshowImage";

const Slideshowtext = () => {
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
        <div className="inner-header flex">
          <SlideShowImage />
        </div>

        <Card
          ref={cardRef}
          style={{
            boxShadow: "none",
            maxWidth: "100%",
            height: "100%",
            margin: "auto",
            marginTop: "7px",
            marginBottom: "45px",
            backgroundColor: "transparent",
            borderRadius: 0,
            opacity: isCardVisible ? 1 : 0,
            transform: isCardVisible ? "translateY(0)" : "translateY(20px)",
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
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#00CED1" }}>
                    B
                  </span>
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

        <WavesBottom />
      </div>
    </>
  );
};

export default Slideshowtext;
