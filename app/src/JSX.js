import { delay, motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import parse from "html-react-parser";

const JSX = () => {
  const [inView, setInView] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  // for top right content
  const topRightContents = [
    "const one = <h1>Hello World<h1>;",
    parse(
      "var newh1 = document.createElement('h1')<br>newh1.innerHTML = 'this is new html element'"
    ),
  ];

  const [topRightContent, setTopRightContent] = useState(topRightContents[0]);

  function changeTopRightContent() {
    if (topRightContent === topRightContents[0]) {
      setTopRightContent(topRightContents[1]);
    } else {
      setTopRightContent(topRightContents[0]);
    }
  }

  // for bot right content
  const botRightContents = [
    "<> Put all Parent Components between these </>",
    parse(
      "It's a good practise, but if you have <br> to use multiple  parent components, then <br> use special component to wrap them"
    ),
  ];

  const [botRightContent, setBotRightContent] = useState(botRightContents[1]);

  function changeBotRightContent() {
    if (botRightContent === botRightContents[0]) {
      setBotRightContent(botRightContents[1]);
    } else {
      setBotRightContent(botRightContents[0]);
    }
  }

  const introWhileHover = {
    width: "100%",
    height: "100%",
  };
  const textHide = {
    scale: 0,
    opacity: 0,
  };
  const textPop = {
    scale: 1,
    opacity: 1,
  };
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 20,
  };
  const slideFromRight = {
    opacity: [0, 1],
    x: [1000, 0],
  };
  const doNothing = {};

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="JSX">
          <div className="examples-container">
            <motion.div
              className="quick-intro"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={introWhileHover}
              transition={spring}
            >
              <p ref={ref} className="title">
                What is JSX?
              </p>
              <motion.div
                className="text-container"
                initial={textHide}
                animate={isHovered ? textPop : textHide}
              >
                <p>
                  JSX is short for JavaScript XML. JSX is an expression which
                  uses valid HTML statements within JavaScript. You can assign
                  this expression to a variable and use it elsewhere. You can
                  combine other valid JavaScript expressions and JSX within
                  these HTML statements by placing them within curly braces
                </p>
              </motion.div>
            </motion.div>
            <div className="other hidden"></div>
            <motion.div
              className="other right-top"
              onClick={changeTopRightContent}
              animate={inView ? slideFromRight : doNothing}
              transition={{delay: 0.1}}
            >
              <p className="other-title">Single-line expressions</p>
              <p className="code-like">{topRightContent}</p>
            </motion.div>
            <motion.div
              className="other"
              animate={inView ? slideFromRight : doNothing}
              transition={{delay: 0.3}}
            >
              <p className="other-title">Combining JS with HTML tags</p>
              <div className="code-like">
                <p className="code-like">{'const who = "Someone";'}</p>
                <p className="code-like">
                  {"const greet = <h1>Hello {who}!</h1>;"}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="other right-bottom"
              onClick={changeBotRightContent}
              animate={inView ? slideFromRight : doNothing}
              transition={{delay: 0.5}}
            >
              <p className="other-title">Only single parent tag is allowed</p>
              <div className="code-like right-bottom">
                <p className="code-like">{botRightContent}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default JSX;
