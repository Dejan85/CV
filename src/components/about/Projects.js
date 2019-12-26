import React from "react";
import PropTypes from "prop-types";

// images
import img from "../../sass/images/2.jpg";

const Projects = ({ data }) => {
  return (
    <div className="projects">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">{data[0].h1}</h1>
      </div>
      <div className="projects__content">
        <p className="projects__p">{data[1].p}</p>
        <a
          href="https://dejan85.github.io/portfolio/"
          className="projects__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://dejan85.github.io/portfolio/
        </a>
      </div>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.array
};

export default Projects;
