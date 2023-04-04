import Slider from "./Silder";
import Card from "./Card";
import { useState, useRef } from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Components = () => {
  // for title
  const [titleValue, setTitleValue] = useState("");

  const clearRef = useRef(null);

  const handleTitleValueChange = (event) => {
    setTitleValue(event.target.value);
    console.log(titleValue);
  };

  // for font size
  const [textValue, setTextValue] = useState(10);

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
  const [id, setID] = useState(1);

  const handleAddCard = () => {
    if (id > 3) {
      return;
    }
    const newTextValue = textValue;
    const newTitle = titleValue;
    const newBackgroundColor = backgroundColor;
    const newTexColor = textColor;
    setCards([
      ...cards,
      {
        key: id,
        fontSize: newTextValue,
        title: newTitle,
        background: newBackgroundColor,
        color: newTexColor,
      },
    ]);
    console.log(id);
    setID(id + 1);
    clearRef.current.value = "";
    setTitleValue("");
  };

  const [inView, setInView] = useState(false);

  const slideFromLeft = {
    opacity: [0, 1],
    x: inView ? [-800, 0] : null,
  };
  const slideFromRight = {
    opacity: [0, 1],
    x: inView ? [1000, 0] : null,
  };
  const pop = {
    opacity: [0, 1],
    scale: inView ? [0, 1] : null,
  };
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 10,
  };

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="components">
          <div className="panel-container">
            <motion.div
              animate={slideFromLeft}
              transition={spring}
              className="control-panel"
            >
              <div className="title-wraper">
                <p className="title">Create Component</p>
                <button className="create-card-btn" onClick={handleAddCard}>
                  +
                </button>
              </div>
              <div className="card-title-input">
                <p className="description">Title</p>
                <input
                  id="text-input"
                  type="text"
                  onChange={handleTitleValueChange}
                  maxlength="4"
                  ref={clearRef}
                />
              </div>
              <div className="card-text-size-input">
                <p className="description">Text size:</p>
                <div className="slider-wraper">
                  <Slider
                    value={textValue}
                    handleChange={handleTextValueChange}
                    min={0}
                    max={18}
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
            </motion.div>
          </div>
          <div className="viewer" ref={ref}></div>
          <motion.div
            animate={slideFromRight}
            transition={spring}
            className="cards-container"
          >
            {cards?.map((card) => (
              <Card
                animate={pop}
                transition={spring}
                key={card.id}
                title={card.title}
                fontSize={card.fontSize}
                backgroundColor={card.background}
                textColor={card.color}
              />
            ))}
          </motion.div>
        </section>
      )}
    </InView>
  );
};

export default Components;
