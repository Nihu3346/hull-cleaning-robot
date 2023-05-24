import { React } from "react";
import "./../CSS/About.css";
import TeamInfo from "./TeamInfo";
import OurValues from "./OurValues";
import InfoPanelA from "./InfoPanel-a";

const AboutUS = () => {
  return (
    <>
      <div>
        <TeamInfo />
      </div>
      <div>
        <InfoPanelA />
      </div>
      <div>
        <OurValues />
      </div>
    </>
  );
};

export default AboutUS;
