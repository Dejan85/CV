import React from "react";

// images
import img from "../../sass/images/1.jpg";

const AboutMe = ({ data }) => {
  return (
    <div className="aboutMe">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">{data[0].h1}</h1>
      </div>
      <div className="aboutMe__content">
        {data &&
          data.map((item, key) => {
            return (
              <p className="aboutMe__p" key={key}>
                {item.p}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default AboutMe;
