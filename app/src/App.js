import React from "react";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: ref, inView: sectionIsVisible } = useInView();

  return (
    <div className="app-container">
      <Navbar />
      <section ref={ref} className="content" id="react-js">
        <h1>React JS</h1>
        <p className="text" id="p1">
          React js is a JavaScript library for building User Interfaces. It was
          developed at Facebook, Meta in 2013 and we can safely say, it has been
          one of the most infuential UI library of recent decade. It is friendly
          for people, who already know basics of JS and it really offers many
          tools to create responsive websites... fast!
        </p>
      </section>
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
