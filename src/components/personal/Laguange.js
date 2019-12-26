import React from "react";
import PropTypes from "prop-types";

const Laguange = ({ data }) => {
  return (
    <div className="laguange">
      <h2 className="personal__h2">{data[0].h2}</h2>
      <p className="laguange__p">{data[1].p}</p>
      <p className="laguange__p">{data[2].p}</p>
    </div>
  );
};

Laguange.propTypes = {
  data: PropTypes.array
};

export default Laguange;
