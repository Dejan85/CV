import React from "react";
import "./sass/App.scss";

// components
import About from "./components/about/About";
import Personal from "./components/personal/Personal";

function App() {
  return (
    <div className="App">
      <About />
      <Personal />
    </div>
  );
}

export default App;
