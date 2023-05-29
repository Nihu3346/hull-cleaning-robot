import { Link } from "react-router-dom";
import robo from "./../Images/robo.jpg"
import environment from "./../Images/environment.jpg";
import robo2 from "./../Images/robo2.jpg"
const AdvantageMain = () => {
  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            fontFamily: "PT Sans, sans-serif",
            fontSize: "40px",
          }}
        >
          Commercial & Environmental Advantage
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className="card"
              style={{ width: "100%", height: "500px", position: "relative" }}
            >
              <img
                src={robo}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="card-body"
                style={{
                  position: "absolute",
                  bottom: "0",
                  textAlign: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h5 className="card-title" style={{ color: "white",fontWeight: "400",
                  fontFamily: "PT Sans, sans-serif" }}>
                  How Our Robots Save You Time and Money Compared to Manual
                  Diving Teams
                </h5>
                <Link
                  to="/hullcleaning"
                  style={{
                    color: "none",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    fontFamily: "PT Sans, sans-serif"
                  }}
                >
                  READ MORE&nbsp;&#9656;
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{ width: "100%", height: "500px", position: "relative" }}
            >
              <img
                src={environment}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="card-body"
                style={{
                  position: "absolute",
                  bottom: "0",
                  textAlign: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h5 className="card-title" style={{ color: "white",fontWeight: "400",
                  fontFamily: "PT Sans, sans-serif" }}>
                  Eco-Friendly Cleaning with Responsible Waste Disposal
                </h5>
                <Link
                  to="/hullcleaning"
                  style={{
                    color: "none",
                    textTransform: "capitalize",
                    textDecoration: "none",
                  fontFamily: "PT Sans, sans-serif"
                  }}
                >
                  READ MORE&nbsp;&#9656;
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{ width: "100%", height: "500px", position: "relative" }}
            >
              <img
                src={robo2}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="card-body"
                style={{
                  position: "absolute",
                  bottom: "0",
                  textAlign: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h5 className="card-title" style={{ color: "white",fontWeight: "400",
                  fontFamily: "PT Sans, sans-serif" }}>
                  Protecting Ships from Invasive Marine Species with Cavitation
                  Jet-Based Technology
                </h5>
                <Link
                  to="/hullcleaning"
                  style={{
                    color: "none",
                    textTransform: "capitalize",
                    textDecoration: "none",
                  fontFamily: "PT Sans, sans-serif"
                  }}
                >
                  READ MORE&nbsp;&#9656;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvantageMain;
