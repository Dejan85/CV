import React from "react";

const SkillBar = ({ item }) => {
  return (
    <div className="skills__skillBar">
      <h4 className="skills__h4">{item && item.h4}</h4>
      <div className="skills__bar">
        <div
          className="skills__bar--child"
          style={{ width: item && item.percent }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
