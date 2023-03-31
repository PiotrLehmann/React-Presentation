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

  const hide = {
    scale: 0,
    opacity: 0,
  };

  const pop = {
    scale: 1,
    opacity: 1,
  };

  const changeForRed = {
    background: "linear-gradient(45deg, rgb(54, 64, 64), rgb(8, 101, 101))",
  };

  const changeForGreen = {
    background: "linear-gradient(45deg,rgb(18, 104, 104), #00f2ff)",
  };

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="why-react">
          <motion.div
            className="pros"
            animate={!isOn ? pop : hide}
            transition={spring}
          >
            <div className="pros-container">
              <OneLiner content="Performs fast" />
              <OneLiner content="Defines how data must be written - clear code, because of syntax standards" />
              <OneLiner content="Less coding" />
              <OneLiner content="UI renders faster due tu Virtual DOM" />
              <OneLiner content="Massive open-source environment" />
              <OneLiner content="Extensive collection of UI resusable components" />
            </div>
          </motion.div>
          <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
            <motion.div
              ref={ref}
              className="handle"
              layout
              transition={spring}
              animate={isOn ? changeForRed : changeForGreen}
            ></motion.div>
          </div>
          <motion.div
            className="cons"
            animate={isOn ? pop : hide}
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
