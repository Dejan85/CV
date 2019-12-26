import React from "react";
import PropTypes from "prop-types";

const Job = ({ item }) => {
  return (
    <div className="experience__job">
      <h2 className="experience__h2">{item.h2}</h2>
      <span className="experience__span">{item.date}</span>
      <p className="experience__p">{item.p}</p>
    </div>
  );
};

Job.propTypes = {
  item: PropTypes.object
};

export default Job;
