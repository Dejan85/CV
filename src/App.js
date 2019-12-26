import React, { useState } from "react";
import "./sass/App.scss";

// components
import About from "./components/about/About";
import Personal from "./components/personal/Personal";

// image
import rs from "./sass/images/rs.png";
import eng from "./sass/images/eng.png";

// json
import srpski from "./json/srpski.json";
import engleski from "./json/engleski.json";

function App() {
  const [lang, setLang] = useState(engleski);
  const [active, setActive] = useState(false);

  const srLaguangeHandler = () => {
    setLang(srpski);
    !active && setActive(!active);
  };

  const engLaguangeHandler = () => {
    setLang(engleski);
    active && setActive(!active);
  };

  return (
    <div className="App">
      <div className="App__laguange">
        <div className="App__sr" onClick={srLaguangeHandler}>
          <img src={rs} alt="slika" />
          <p style={{ color: active ? "red" : "", userSelect: "none" }}>Sr</p>
        </div>
        <div className="App__eng" onClick={engLaguangeHandler}>
          <img src={eng} alt="slika" />
          <p style={{ color: active ? "" : "red", userSelect: "none" }}>En</p>
        </div>
        <div className="App__en"></div>
      </div>
      <div className="container">
        <About lang={lang} />
        <Personal lang={lang} />
      </div>
    </div>
  );
}

export default App;
