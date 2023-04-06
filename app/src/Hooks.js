import Hook from "./Hook";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              name={"useContext"}
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
                      inside which will set the state every time u call it.
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
                      This is most important and most often used hook in React.
                      Its purpose is to handle variables which define state of
                      some component or variable. It holds two arguments which
                      allow you to check or set state of something
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
                    <div className="title">useContext</div>
                    <div className="text-box">
                      This is most important and most often used hook in React.
                      Its purpose is to handle reactive data. Everytime the
                      state changes it rerenders the UI
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              <div className="example">
                <p>Tu bedzie jakis przyklad</p>
              </div>
            </div>
          )}
        </section>
      )}
    </InView>
  );
};

export default Hooks;
