import ProgressBar from "./ProgressBar";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav-items">
          <li>
            <a href="#react-js">React Js</a>
          </li>
          <li>
          <a href="#intro">Intro</a>
          </li>
          <li>
          <a href="#components">Components</a>
          </li>
          <li>
          <a href="#hooks">Hooks</a>
          </li>
          <li>
            <a href="#environment">Environment</a>
          </li>
          <li>
            <a href="#summary">Summary</a>
          </li>
        </ul>
      </nav>
      <ProgressBar />
      </>
  );
};

export default Navbar;
