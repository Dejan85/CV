import React from "react";

// components
import Name from "./Name";
import Contact from "./Contact";
import Education from "./Education";
import Laguange from "./Laguange";

const Personal = () => {
  return (
    <div className="personal">
      <Name />
      <Contact />
      <Education />
      <Laguange />
    </div>
  );
};

export default Personal;
