import React from "react";

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

export default ContactPartial;
