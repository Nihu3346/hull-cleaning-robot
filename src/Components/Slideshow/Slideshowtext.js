import { Card } from "@mui/material";
import { Fade } from "react-slideshow-image";
import ship3 from "../Images/ship3.png";
import ship5 from "../Images/ship5.jpg";
import ship6 from "../Images/ship6.jpg";

const Slideshowtext = () => {
  const spanStyle = {
    padding: "50px",
    color: "#efefef",
    fontWeight: "500",
    fontSize: "35px",
    textAlign: "center",
    backdropFilter: "none",
    fontFamily: "PT Sans, sans-serif",
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

  return (
    <>
      <Card
        style={{
          boxShadow: "none",
          borderRadius: 0,
          maxWidth: "100%",
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
                <div>
                  <p style={spanStyle}>{slideImage.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </Card>
    </>
  );
};

export default Slideshowtext;
