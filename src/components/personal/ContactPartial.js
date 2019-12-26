import React from "react";
import PropTypes from "prop-types";

const ContactPartial = ({ icon, info, fontSize }) => {
  return (
    <div className="personal__partial">
      <i className={`${icon} personal__icon`} />
      <p
        className="personal__p"
        style={{ fontSize: `${fontSize}rem` ? fontSize : "1.4rem" }}
      >
        {info}
      </p>
    </div>
  );
};

ContactPartial.propTypes = {
  icon: PropTypes.string,
  info: PropTypes.string,
  fontSize: PropTypes.string
};

export default ContactPartial;
