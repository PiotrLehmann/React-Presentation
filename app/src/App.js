import React from "react";
import Navbar from "./Navbar";
import ReactJS from "./ReactJS";
import Intro from "./Intro";
import WhyReact from "./WhyReact.js"
import JSX from "./JSX.js"
import { useInView } from "react-intersection-observer";

function App() {
  // Hook which checks visibility of the section
  const { ref: ref, inView: sectionIsVisible } = useInView();

  return (
    <div className="app-container">
      <Navbar />
      <ReactJS />
      <Intro />
      <WhyReact />
      <JSX />
      <section className="content" id="components">
        Components
      </section>
      <section className="content" id="hooks">
        Hooks
      </section>
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
