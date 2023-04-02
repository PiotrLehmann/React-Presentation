import Slider from "./Silder";
import { useState } from "react";

const Components = () => {
  // for title
  const [titleValue, setTitleValue] = useState("");

  const handleTitleValueChange = (event) => {
    setTitleValue(event.target.value);
  };

  // for font size
  const [textValue, setTextValue] = useState(25);

  const handleTextValueChange = (event) => {
    setTextValue(event.target.value);
  };

  // for background color
  const [backgroundColorValue, setBackgroundColorValue] = useState(128);

  const handleBackgroundColorChange = (event) => {
    setBackgroundColorValue(event.target.value);
  };

  // for text color
  const [textColorValue, setTextColorValue] = useState(128);

  const handleTextColorChange = (event) => {
    setTextColorValue(event.target.value);
  };

  // calculating the rbg value
  const backgroundColor =
    "rgb(" +
    backgroundColorValue +
    "," +
    backgroundColorValue +
    "," +
    backgroundColorValue +
    ")";

  const textColor =
    "rgb(" + textColorValue + "," + textColorValue + "," + textColorValue + ")";

  // for cards
  const [cards, setCards] = useState(["Card1", "Card2", "Card3"]);

  return (
    <section className="content" id="components">
      <div className="panel-container">
        <div className="control-panel">
          <div className="title-wraper">
            <p className="title">Create Component</p>
            <button className="create-card-btn">+</button>
          </div>
          <div className="card-title-input">
            <p className="description">Title</p>
            <input type="text" />
          </div>
          <div className="card-text-size-input">
            <p className="description">Text size:</p>
            <div className="slider-wraper">
              <Slider
                value={textValue}
                handleChange={handleTextValueChange}
                min={0}
                max={50}
                step={1}
              />
              <div className="text-value">{textValue}px</div>
            </div>
          </div>
          <div className="card-background-color-input">
            <p className="description">Background color</p>
            <div className="slider-wraper">
              <Slider
                value={backgroundColorValue}
                handleChange={handleBackgroundColorChange}
                min={0}
                max={255}
                step={1}
              />
              <div
                className="color-mark1"
                style={{ backgroundColor: backgroundColor }}
              ></div>
            </div>
          </div>
          <div className="card-text-color-input">
            <p className="description">Text color:</p>
            <div className="slider-wraper">
              <Slider
                handleChange={handleTextColorChange}
                min={0}
                max={255}
                step={1}
              />
              <div
                className="color-mark2"
                style={{ backgroundColor: textColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <div>{}</div>
        ))}
      </div>
    </section>
  );
};

export default Components;
