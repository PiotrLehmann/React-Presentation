import { motion } from "framer-motion";
import { useState } from "react";

const JSX = () => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const topRightContents = [
    "const one = <h1>Hello World<h1>;",
    'var newh1 = document.createElement("h1") \n' +
      'newh1.innerHTML = "this is new html element"',
  ];

  const [topRightContent, setTopRightContent] = useState(topRightContents[0]);

  function changeTopRightContent() {
    if (topRightContent === topRightContents[0]) {
      setTopRightContent(topRightContents[1]);
    } else {
      setTopRightContent(topRightContents[0]);
    }
  }

  const introWhileHover = {
    width: "100%",
    height: "100%",
  };
  const textHide = {
    scale: 0,
  };
  const textPop = {
    scale: 1,
  };
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 20,
  };

  return (
    <section className="content" id="JSX">
      <div className="examples-container">
        <motion.div
          className="quick-intro"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={introWhileHover}
          transition={spring}
        >
          <p className="title">What is JSX?</p>
          <motion.div
            className="text-container"
            initial={textHide}
            animate={isHovered ? textPop : textHide}
          >
            <p>
              JSX is short for JavaScript XML. JSX is an expression which uses
              valid HTML statements within JavaScript. You can assign this
              expression to a variable and use it elsewhere. You can combine
              other valid JavaScript expressions and JSX within these HTML
              statements by placing them within curly braces
            </p>
          </motion.div>
        </motion.div>
        <div className="other hidden"></div>
        <div className="other" onClick={changeTopRightContent}>
          <p className="other-title">Single-line expressions</p>
          <p className="code-like">{topRightContent}</p>
        </div>
        <div className="other">
          <p className="other-title">Combining JS with HTML tags</p>
          <p className="code-like">
            {'const who = "Someone"'}
            {"\n"}
            {"const greet = <h1>Hello {who}!</h1>;"}
          </p>
        </div>
        <div className="other"></div>
      </div>
    </section>
  );
};

export default JSX;
