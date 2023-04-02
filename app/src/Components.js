import Slider from "./Silder";
import Card from "./Card";
import { useState } from "react";

const Components = () => {
  // for title
  const [titleValue, setTitleValue] = useState("");

  const handleTitleValueChange = (event) => {
    setTitleValue(event.target.value);
    console.log(titleValue);
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
  const [cards, setCards] = useState([]);

  var key = 1;

  const handleAddCard = () => {
    const newTextValue = textValue;
    const newTitle = titleValue;
    const newBackgroundColor = backgroundColor;
    const newTexColor = textColor;
    setCards([
      ...cards,
      {
        key: key,
        fontSize: newTextValue,
        title: newTitle,
        background: newBackgroundColor,
        color: newTexColor,
      },
    ]);
    console.log(key);
    key = key + 1;
  };

  return (
    <section className="content" id="components">
      <div className="panel-container">
        <div className="control-panel">
          <div className="title-wraper">
            <p className="title">Create Component</p>
            <button className="create-card-btn" onClick={handleAddCard}>
              +
            </button>
          </div>
          <div className="card-title-input">
            <p className="description">Title</p>
            <input type="text" onChange={handleTitleValueChange} />
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
        {cards?.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            fontSize={card.fontSize}
            backgroundColor={card.background}
            textColor={card.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Components;
