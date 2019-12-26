import React from "react";
import PropTypes from "prop-types";

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
      <Projects data={projects} />
    </div>
  );
};

About.propTypes = {
  aboutme: PropTypes.object,
  experience: PropTypes.object,
  skills: PropTypes.object,
  projects: PropTypes.object
};

export default About;
