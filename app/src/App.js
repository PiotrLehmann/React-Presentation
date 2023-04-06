import Start from "./Start";
import React from "react";
import Navbar from "./Navbar";
import ReactJS from "./ReactJS";
import Intro from "./Intro";
import WhyReact from "./WhyReact.js"
import JSX from "./JSX.js"
import Hooks from "./Hooks";
import Components from "./Components";

function App() {

  return (
    <div className="app-container">
      <Start />
      <Navbar />
      <ReactJS />
      <Intro />
      <WhyReact />
      <JSX />
      <Components />
      <Hooks />
      <section className="content" id="environment">
        Environment
      </section>
      <section className="content" id="summary">
        Summary
      </section>
    </div>
  );
}

export default App;
