import React from "react";

// components
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about">
      <AboutMe />
      <Experience />
      <Skills />
    </div>
  );
};

export default About;
