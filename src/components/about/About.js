import React from "react";

// components
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const About = () => {
  return (
    <div className="about">
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default About;
