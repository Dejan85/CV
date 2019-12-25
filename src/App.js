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

  const srLaguangeHandler = () => {
    setLang(srpski);
  };

  const engLaguangeHandler = () => {
    setLang(engleski);
  };

  return (
    <div className="App">
      <div className="App__laguange">
        <div className="App__sr" onClick={srLaguangeHandler}>
          <img src={rs}></img>
          <p>Sr</p>
        </div>
        <div className="App__eng" onClick={engLaguangeHandler}>
          <img src={eng}></img>
          <p>En</p>
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
