import Start from "./Start";
import React from "react";
import Navbar from "./Navbar";
import ReactJS from "./ReactJS";
import Intro from "./Intro";
import WhyReact from "./WhyReact.js"
import JSX from "./JSX.js"
import Hooks from "./Hooks";
import Components from "./Components";
import Environment from "./Environment";
import End from "./End";

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
      <Environment />
      <End />
    </div>
  );
}

export default App;
