import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [blue, setBlue] = useState(200);

  useEffect(() => {
    setBlue(200 - counter * 10);
  }, [counter]);

  return (
    <div
      style={{ backgroundColor: "rgb(0," + blue + "," + blue + ")" }}
      className="counter-panel"
    >
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="decrement"
      >
        <img
          className="minus"
          src={require("./images/minus.png")}
          alt="minus-sign"
        />
      </button>
      <div className="count">{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="increment"
      >
        <img
          className="plus"
          src={require("./images/add.png")}
          alt="plus-sign"
        />
      </button>
    </div>
  );
};

export default Counter;
