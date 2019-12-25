import React from "react";

const EducationPartial = ({ h3, p, a }) => {
  return (
    <div className="educations__partial">
      <h3 className="educations__h3">{h3}</h3>
      <p className="educations__p">{p}</p>
      <a href={a} className="educations__link" target="_blank">
        {a}
      </a>
    </div>
  );
};

export default EducationPartial;
