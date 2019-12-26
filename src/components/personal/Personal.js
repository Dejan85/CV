import React from "react";
import PropTypes from "prop-types";

// components
import Name from "./Name";
import Contact from "./Contact";
import Education from "./Education";
import Laguange from "./Laguange";

const Personal = ({ lang }) => {
  const { education, laguange } = lang;

  return (
    <div className="personal">
      <Name />
      <Contact />
      <Education data={education} />
      <Laguange data={laguange} />
    </div>
  );
};

Personal.propTypes = {
  education: PropTypes.object,
  laguange: PropTypes.object
};

export default Personal;
