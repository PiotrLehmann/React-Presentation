import { useState } from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import OneLiner from "./OneLiner";

const WhyReact = () => {
  const [inView, setInView] = useState(false);
  const [isOn, setIsOn] = useState(true);
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

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="why-react">
          <div className="pros">
            <motion.div className="pros-container" animate={isOn ? pop : hide}
            transition={spring}
            >
              <OneLiner content="Performs fast" />
              <OneLiner content="Defines how data must be written - clear code, because of syntax standards" />
              <OneLiner content="Less coding" />
              <OneLiner content="UI renders faster due tu Virtual DOM" />
              <OneLiner content="Massive open-source environment" />
              <OneLiner content="Extensive collection of UI resusable components" />
            </motion.div>
          </div>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div
              className="handle"
              layout
              transition={spring}
            ></motion.div>
          </div>
          <div className="cons">
            <motion.div className="cons-container" animate={!isOn ? pop : hide}
            transition={spring}
            >
              <OneLiner className="pro" content="High pace of development" />
              <OneLiner content="Performs fast, but slower than Vanilla JS" />
              <OneLiner content="Steep learning curve" />
              <OneLiner content="Covers only UI Layers of the app" />
              <OneLiner content="Syntax of JSX is harder than JS and creates some barriers" />
            </motion.div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default WhyReact;
