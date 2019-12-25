import React from "react";

// components
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const About = ({ lang }) => {
  const { aboutme, experience, skills, projects } = lang;

  return (
    <div className="about">
      <AboutMe data={aboutme} />
      <Experience data={experience} />
      <Skills data={skills} />
      <Projects />
    </div>
  );
};

export default About;
