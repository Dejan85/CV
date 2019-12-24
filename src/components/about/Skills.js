import React from "react";

//images
import img from "../../sass/images/3.jpg";

//component
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <div className="skills">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">VEŠTINE</h1>
      </div>
      <div className="skills__content">
        <h3 className="skills__h3">Dizajn i Struktura</h3>
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
        <SkillBar />
      </div>
    </div>
  );
};

export default Skills;
