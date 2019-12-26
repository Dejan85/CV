import React from "react";
import PropTypes from "prop-types";

const ContactPartial = ({ icon, adress, info }) => {
  return (
    <div className="personal__partial">
      <i className={`${icon} personal__icon`} />
      <a
        className="personal__link"
        href={adress}
        target="_blank"
        rel="noopener noreferrer"
      >
        {info}
      </a>
    </div>
  );
};

ContactPartial.propTypes = {
  icon: PropTypes.string,
  adress: PropTypes.string,
  info: PropTypes.string
};

export default ContactPartial;
