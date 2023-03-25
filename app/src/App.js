import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import { useInView } from "react-intersection-observer";

function App() {
  // Hook which checks visibility of the section
  const { ref: ref, inView: sectionIsVisible } = useInView();

  return (
    <div className="app-container">
      <Navbar />
      <Section1 />
      <section className="content" id="intro">
        Intro
      </section>
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
