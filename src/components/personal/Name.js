import React from "react";

import img from "../../sass/images/avatar.jpg";

const Name = () => {
  return (
    <div className="personal__name">
      <div className="personal__content">
        <div
          className="personal__img"
          style={{ background: `url(${img})` }}
        ></div>
        <h1 className="personal__h1">Dejan Marković</h1>
        <span className="personal__name--span">Javascript Developer</span>
      </div>
    </div>
  );
};

export default Name;
