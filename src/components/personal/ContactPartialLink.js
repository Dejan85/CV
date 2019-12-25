import React from "react";

const ContactPartial = ({ icon, adress, info, fontSize }) => {
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

export default ContactPartial;
