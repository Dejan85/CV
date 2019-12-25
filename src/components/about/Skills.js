import React from "react";

//images
import img from "../../sass/images/3.jpg";

//component
import SkillBar from "./SkillBar";

const Skills = ({ data }) => {
  return (
    <div className="skills">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">{data[0].h1}</h1>
      </div>
      <div className="skills__content">
        {data &&
          data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <h3 className="skills__h3">{item[0] && item[0].h3}</h3>
                {item[0] &&
                  item[0].arr.map((item, index) => {
                    return <SkillBar key={index} item={item} />;
                  })}
              </React.Fragment>
            );
          })}
        {/* <h3 className="skills__h3">Dizajn i Struktura</h3>
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <h3 className="skills__h3">Javascript - Frontend</h3>
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <h3 className="skills__h3">Javascript - Backend</h3>
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <h3 className="skills__h3">Ostalo</h3>
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar />
        <SkillBar /> */}
      </div>
    </div>
  );
};

export default Skills;
