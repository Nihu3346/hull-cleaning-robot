import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ship3 from "../Images/ship3.png";
import ship5 from "../Images/ship5.jpg";
import ship6 from "../Images/ship6.jpg";
import InfoPanelA from "./InfoPanel-a";
import InfoPanelB from "./InfoPanel-b";
import "./../CSS/InfoPanel.css";
import AboutUS from "./AboutUs";
import InfoPanelD from "./InfoPage-d";

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

const Home = () => {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <p style={spanStyle}>{slideImage.caption}</p>
            </div>
          </div>
        ))}
      </Fade>
      <div className="panel-b">
          <InfoPanelB />
        </div>
        <div className="panel-d">
          <InfoPanelD />
        </div>
        <div className="panel-a">
          <InfoPanelA />
        </div>
        <div className="panel-c">
          <AboutUS />
        </div>
    </div>
  );
};
export default Home;
