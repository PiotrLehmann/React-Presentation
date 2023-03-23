import "./App.css";
import { Parallax } from "react-parallax";
import Test from "./images/TestImage.png"
import Wave from "./images/wavesOpacity.svg";

function App() {
  return (
    <div className="App">
      <Parallax strength={600} bgImage={Test}>
        <div className="background">
          <div className="text-content"></div>
          <img className="wave" src={Wave} />
        </div>
      </Parallax>
      <Parallax strength={600}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
