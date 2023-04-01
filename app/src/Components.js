import Slider from "./Silder";
import { useState } from "react";

const Components = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section className="content" id="components">
      <div className="panel-container">
        <div className="control-panel">
          <div className="card-title-input">
            <p>Title</p>
            <input type="text" />
          </div>
          <div className="card-background-color-input">
            <h2>{value}</h2>
            <Slider
              value={value}
              handleChange={handleChange}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div className="card-text-color-input">
            <h2>{value}</h2>
            <Slider
              value={value}
              handleChange={handleChange}
              min={0}
              max={100}
              step={1}
            />
          </div>
        </div>
      </div>
      <div className="cards-container">CARDS</div>
    </section>
  );
};

export default Components;
