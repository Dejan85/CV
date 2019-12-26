import React from "react";
import PropTypes from "prop-types";

const EducationPartial = ({ h3, p, a }) => {
  return (
    <div className="educations__partial">
      <h3 className="educations__h3">{h3}</h3>
      <p className="educations__p">{p}</p>
      <a
        href={a}
        className="educations__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {a}
      </a>
    </div>
  );
};

EducationPartial.propTypes = {
  h3: PropTypes.string,
  p: PropTypes.string,
  a: PropTypes.string
};

export default EducationPartial;
