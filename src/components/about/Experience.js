import React from "react";

// images
import img from "../../sass/images/2.jpg";

//components
import Job from "../about/Job";

const Experience = () => {
  return (
    <div className="experience">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">ISKUSTVO</h1>
      </div>
      <div className="experience__content">
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </div>
  );
};

export default Experience;
