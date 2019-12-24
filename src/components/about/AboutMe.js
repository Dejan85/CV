import React from "react";

// images
import img from "../../sass/images/1.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="about__heading">
        <img src={img} alt="slika" />
        <h1 className="about__h1">O MENI</h1>
      </div>
      <div className="aboutMe__content">
        <p className="aboutMe__p">
          Počeo sam da se bavim web programiranjem početkom 2017. godine. Inače
          se dugo bavim izradom statičnih web sajtova, ali ne profesionalno
        </p>
        <p className="aboutMe__p">
          U januaru 2018. godine, završio sam kurs "Krojačeva škola web
          programiranja", smer full stack javascript developer. Na kursu smo
          detaljno radili kompletan javascript (es5, es6), plus node js, mongo
          db, i nešto malo angular js-a.
        </p>
        <p className="aboutMe__p">
          Jako volim da programiram i imam jaku želju za novim saznanjima i
          veštinama. Skoro svaki dan programiram i nemam nameru da prestanem.
          Takođe nemam problem da učim nove tehnologije ako firma ili kompanija
          to zahtevaju od mene. Kroz studiranje sam prošao raze tehnologije
          različitog karaktera, tako da sam praktično naviknut na promene i vrlo
          brzo se prilagođavam.
        </p>
        <p className="aboutMe__p">
          Moj izbor od javascript frameworkova je React Js, i imam u planu da ga
          usavršim do maksimuma.
        </p>
        <p className="aboutMe__p">
          Moje ambicije su da u budućnosti jako dobro usavršim MERN stek
          tehnologije.
        </p>
        <p className="aboutMe__p">Ponosni otac male devojčice Sare.</p>
      </div>
    </div>
  );
};

export default AboutMe;
