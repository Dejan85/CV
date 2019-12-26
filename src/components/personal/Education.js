import React from "react";
import PropTypes from "prop-types";

//components
import EducationPartial from "./EducationPartial";

const Education = ({ data }) => {
  return (
    <div className="educations">
      <h2 className="personal__h2">{data && data[0].h2}</h2>;
      {data &&
        data.map((item, index) => {
          return (
            index !== 0 && (
              <EducationPartial
                key={index}
                h3={item[0].h3}
                p={item[1].p}
                a={item[2].a}
              />
            )
          );
        })}
    </div>
  );
};

Education.propTypes = {
  data: PropTypes.array
};

export default Education;
