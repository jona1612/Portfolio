import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
          {/* <h5 style={{ color: theme.text }}>
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️

            I am fluent in classics like Html,Css,Bootstrap
            javascript,Reactjs
            Nodejs,mySql,Mongodb

            My field of Interest's are building new  Web Technologies and Products and also in areas related to Cloud Computing And Networking.

            Whenever possible, I also apply my passion for developing products with Frontend Frameworks and Modern Javascript Library and Frameworks  like React.js
          </h5> */}
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}