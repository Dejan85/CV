import React from "react";
import PropTypes from "prop-types";

const SkillBar = ({ item }) => {
  return (
    <div className="skills__skillBar">
      <h4 className="skills__h4">{item && item.h4}</h4>
      {item.percent && (
        <div className="skills__bar">
          <div
            className="skills__bar--child"
            style={{ width: item && item.percent }}
          />
        </div>
      )}
    </div>
  );
};

SkillBar.propType = {
  item: PropTypes.array,
};

export default SkillBar;
