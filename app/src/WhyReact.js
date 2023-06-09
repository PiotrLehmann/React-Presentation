import { useState } from "react";
import { InView } from "react-intersection-observer";
import { motion, useTransform } from "framer-motion";
import OneLiner from "./OneLiner";

const WhyReact = () => {
  const [inView, setInView] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 20,
  };

  const hideRight = {
    scale: 0,
    opacity: 0,
    x: [0, 800],
  };

  const hideLeft = {
    scale: 0,
    opacity: 0,
    x: [0, -800],
  };

  const popLeft = {
    scale: 1,
    opacity: 1,
    x: [800, 0],
  };

  const popRight = {
    scale: 1,
    opacity: 1,
    x: [-800, 0],
  };

  const changeForRed = {
    background: "linear-gradient(45deg, #b7b9b9, transparent)",
  };

  const changeForGreen = {
    background: "linear-gradient(45deg, #14ccc3,transparent)",
  };

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="why-react">
          <motion.div
            className="pros"
            animate={!isOn && inView ? popLeft : hideRight}
            transition={spring}
          >
            <div className="pros-container">
              <OneLiner content="Performs fast" />
              <OneLiner content="Defines how data must be written - clear code, because of syntax standards" />
              <OneLiner content="Less coding" />
              <OneLiner content="UI renders faster due tu Virtual DOM" />
              <OneLiner content="Massive open-source environment" />
              <OneLiner content="Extensive collection of UI reusable components" />
            </div>
          </motion.div>
          <div
            ref={ref}
            className="switch"
            data-ison={isOn}
            onClick={toggleSwitch}
          >
            <motion.div
              className="handle"
              layout
              transition={spring}
              animate={isOn ? changeForRed : changeForGreen}
            ></motion.div>
          </div>
          <motion.div
            className="cons"
            animate={isOn && inView ? popRight : hideLeft}
            transition={spring}
          >
            <div className="cons-container">
              <OneLiner className="pro" content="High pace of development" />
              <OneLiner content="Performs fast, but slower than Vanilla JS" />
              <OneLiner content="Steep learning curve" />
              <OneLiner content="Covers only UI Layers of the app" />
              <OneLiner content="Syntax of JSX is harder than JS and creates some barriers" />
            </div>
          </motion.div>
        </section>
      )}
    </InView>
  );
};

export default WhyReact;
