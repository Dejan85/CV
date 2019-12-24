import React from "react";

// images
import img from "../../sass/images/2.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">PROJEKTI</h1>
      </div>
      <div className="projects__content">
        <p className="projects__p">
          Sve moje projekte možete videti preko moje web aplikacije:
        </p>
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

export default Projects;
