import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import hullcleaner from "../Images/hullcleaner.jpg";
import marine from "../Images/marine.jpg";
import robo from "../Images/robo.png";
import ship3 from "../Images/ship3.png";
import ship5 from "../Images/ship5.jpg";
import ship6 from "../Images/ship6.jpg";
import "./../CSS/InfoPanel.css";
import InfoPanelB from "./InfoPanel-b";
import "../CSS/Home.css";

const spanStyle = {
  padding: "50px",
  color: "#efefef",
  fontWeight: "500",
  fontSize: "35px",
  textAlign: "center",
  backdropFilter: "none",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  backdropFilter: "blur(8px)",
};

const slideImages = [
  {
    url: ship3,
    caption:
      "Revolutionize underwater maintenance with our innovative hull cleaning robots.",
  },
  {
    url: ship6,
    caption:
      "Boost your vessel's performance and save on fuel costs with our advanced hull cleaning robots.",
  },
  {
    url: ship5,
    caption:
      "Say goodbye to slow, hazardous and outdated hull cleaning methods, and hello to the future of underwater maintenance.",
  },
];

const InformationSection = ({ image, title, description, imageOnLeft }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        border: "2px solid #e0e0e0",
        boxShadow: "none",
        maxWidth: "90%",
        margin: "auto",
        marginTop: "45px",
        marginBottom: "45px",
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} order={imageOnLeft ? 1 : 2}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} md={6} order={imageOnLeft ? 2 : 1}>
            <Typography variant="h5" sx={{ textAlign: "center", my: 1 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
      }}
      className="main-content-home"
    >
      <Card
        style={{
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
          boxShadow: "none",
          maxWidth: "99.5%",
          margin: "auto",
        }}
      >
        <Fade>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <p style={spanStyle}>{slideImage.caption}</p>
              </div>
            </div>
          ))}
        </Fade>
      </Card>

      <InformationSection
        image={hullcleaner}
        title="Background"
        description="Marine vessels are constantly exposed to harsh environmental conditions, 
        such as saltwater, marine growth, and debris, which can accumulate on the hull and cause 
        increased drag, fuel consumption, and maintenance costs. Traditional hull cleaning methods, 
        such as diving or dry-docking, are time-consuming, costly, and can potentially harm the environment. 
        The Hull Cleaning Robot technology provides a safe, efficient, and eco-friendly solution to this 
        problem. By utilizing advanced algorithms and state-of-the-art cleaning equipment, 
        the robot can clean the hull of a vessel while it's still in the water, reducing downtime 
        and increasing efficiency. With the Hull Cleaning Robot, marine vessels can maintain optimal 
        performance and reduce their environmental impact, making it an essential technology for the marine industry."
        imageOnLeft={false}
      />

      <InformationSection
        image={robo}
        title="Economic Benefits"
        description="Using hull cleaning robots instead of conventional techniques offers several economic benefits. 
        Firstly, it reduces the downtime of the vessel, as the cleaning process is much faster and more efficient. 
        This means that the vessel can return to operations sooner, resulting in increased productivity and revenue. 
        Additionally, hull cleaning robots are more cost-effective in the long run as they reduce the need for drydocking, 
        which is an expensive and time-consuming process. By eliminating the need for drydocking, vessel owners can save a 
        significant amount of money on maintenance costs. Furthermore, using hull cleaning robots helps to improve fuel efficiency, 
        which can result in significant cost savings over time. Overall, investing in hull cleaning robots can result in significant 
        economic benefits for vessel owners and operators."
        imageOnLeft={true}
      />

      <InformationSection
        image={marine}
        title="Marine Biodiversity"
        description="Hull cleaning robots are a modern technology that offers economic and environmental benefits 
        over conventional hull cleaning techniques. They help preserve marine biodiversity by reducing the use of toxic 
        chemicals and preventing the spread of invasive species. By utilizing advanced cleaning techniques, these robots 
        also improve vessel performance and reduce fuel consumption, leading to significant cost savings for ship owners 
        and operators."
        imageOnLeft={false}
      />

      <div>
        <InfoPanelB />
      </div>
    </Box>
  );
};
export default Home;
