import React from "react";

//components
import EducationPartial from "./EducationPartial";

const Education = () => {
  return (
    <div className="educations">
      <h2 className="personal__h2">OBRAZOVANJE</h2>
      <EducationPartial
        h3="Visoka škola elektrotehnike i računarstva strukovnih studija, Beograd"
        p="Nove Računarske Tehnologije"
        a="http://www.viser.edu.rs"
      />
      <EducationPartial
        h3="Krojačeva Škola Web Programiranja, Beograd"
        p="Full Stack Javascript Developer"
        a="https://www.krojacevaskola.com"
      />
    </div>
  );
};

export default Education;
