import { motion } from "framer-motion";
import { useState } from "react";

const JSX = () => {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(!isHovered);
    console.log(isHovered);
  }

  function handleMouseLeave() {
    setIsHovered(!isHovered);
    console.log(isHovered);
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
    stiffness: 700,
    damping: 10,
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
            animate={isHovered ? "textPop" : "textHide"}
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
        <div className="other"></div>
        <div className="other"></div>
        <div className="other"></div>
      </div>
    </section>
  );
};

export default JSX;
