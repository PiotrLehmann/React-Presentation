import Hook from "./Hook";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "./Counter";

const Hooks = () => {
  const [inView, setInView] = useState(false);

  const [stateIsClicked, setStateIsClicked] = useState(false);
  const handleStateClick = () => {
    setStateIsClicked(!stateIsClicked);
    setEffectIsClicked(false);
    setContextIsClicked(false);
  };

  const [effectIsClicked, setEffectIsClicked] = useState(false);
  const handleEffectClick = () => {
    setEffectIsClicked(!effectIsClicked);
    setStateIsClicked(false);
    setContextIsClicked(false);
  };

  const [contextIsClicked, setContextIsClicked] = useState(false);
  const handleContextClick = () => {
    setContextIsClicked(!contextIsClicked);
    setStateIsClicked(false);
    setEffectIsClicked(false);
  };

  console.log("state " + stateIsClicked);
  console.log("effect " + effectIsClicked);
  console.log("context " + contextIsClicked);

  const popFromBottom = {
    scale: 1,
    opacity: 1,
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 20,
    duration: 0.5,
  };

  const hide = {
    scale: 0,
    opacity: 0,
  };

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="hooks">
          <div className="hooks-container">
            <Hook
              onClick={handleStateClick}
              isClicked={stateIsClicked}
              inView={inView}
              name={"useState"}
              delay={0.2}
              transition={spring}
            />
            <Hook
              onClick={handleEffectClick}
              isClicked={effectIsClicked}
              inView={inView}
              name={"useEffect"}
              delay={0.5}
              transition={spring}
            />
            <Hook
              onClick={handleContextClick}
              isClicked={contextIsClicked}
              inView={inView}
              name={"useRef"}
              delay={0.8}
              transition={spring}
            />
          </div>
          <div ref={ref} className="viewer"></div>
          {!stateIsClicked && !effectIsClicked && !contextIsClicked && (
            <motion.div
              className="description-container"
              initial={hide}
              animate={inView ? popFromBottom : hide}
              transition={spring}
            >
              <p className="title">What are hooks?</p>
              <p className="text-box main">
                Before React 16.8 developers were required to write classes to
                develop certain logic of components. That generated a lot of
                nested, complicated looking code. You can still do that, but
                Hooks generally provide more ergonomic way of applying logic.
                They let you "hook into" React state and lifecycle features from
                built in functions. Those functions are called Hooks.
              </p>
            </motion.div>
          )}
          {(stateIsClicked || effectIsClicked || contextIsClicked) && (
            <div className="example-container">
              {stateIsClicked && (
                <AnimatePresence>
                  <motion.div
                    initial={hide}
                    animate={popFromBottom}
                    exit={hide}
                    transition={spring}
                    className="hook-description"
                  >
                    <div className="title">useState</div>
                    <div className="text-box">
                      This is most important and most often used hook in React.
                      Its purpose is to handle state of some object. You pass
                      initial state to this function, and it returns a variable
                      with the current state value. You also define function
                      inside which will set the state every time u call it. Here
                      useState is used to control count value every time u
                      increment, or decrement it.
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {effectIsClicked && (
                <AnimatePresence>
                  <motion.div
                    className="hook-description"
                    initial={hide}
                    animate={popFromBottom}
                    transition={spring}
                    exit={hide}
                  >
                    <div className="title">useEffect</div>
                    <div className="text-box">
                      This hook allows you to perform side effects in your
                      components. Most popular examples are fetching data,
                      updating the DOM, or using timers. useEffect takes two
                      arguments. Function in which u declare what it will do,
                      and array of dependencies. This hook will rerender UI
                      every time dependencies change. If you put in it an empty
                      array of dependencies, it will only rerender UI once, when
                      page loads. Here we use this hook co control the color of
                      counter background. Higher count means darker background.
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {contextIsClicked && (
                <AnimatePresence>
                  <motion.div
                    initial={hide}
                    animate={popFromBottom}
                    exit={hide}
                    transition={spring}
                    className="hook-description"
                  >
                    <div className="title">useRef</div>
                    <div className="text-box">
                      The useRef Hook allows you to persist values between
                      renders. It can be used to store a mutable value which not
                      cause re-render when updated, but most common use of
                      useRef is to access a DOM element directly. If we would use useRef here to set count it would increase and decrease on every click, but we could not see the result. In this section, useRef is used to set the reference to the specific DOM element. Then by using external library we check if that concrete element is "in view" of user. By knowing that we can run animations when user enters this section.
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              <motion.div
                className="example"
                initial={hide}
                animate={popFromBottom}
                exit={hide}
                transition={spring}
              >
                <div className="title">Counter</div>
                <Counter />
              </motion.div>
            </div>
          )}
        </section>
      )}
    </InView>
  );
};

export default Hooks;
