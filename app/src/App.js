import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="content" id="react-js">
        React Js
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
