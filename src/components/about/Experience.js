import React from "react";
import PropTypes from "prop-types";

// images
import img from "../../sass/images/2.jpg";

//components
import Job from "../about/Job";

const Experience = ({ data }) => {
  return (
    <div className="experience">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">{data[0].h1}</h1>
      </div>
      <div className="experience__content">
        {data &&
          data.map((item, index) => {
            return item.h2 && <Job key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

Experience.propTypes = {
  data: PropTypes.array,
};

export default Experience;
