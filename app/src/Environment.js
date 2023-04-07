import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const Environment = () => {
  const [inView, setInView] = useState(false);

  const variants = {
    bounce: {
      y: [0, -200],
      height: ["3vh", "5vh"],
      transition: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

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
        <section className="content" id="environment">
          <div className="top-container">
            <motion.div
              variants={variants}
              animate="bounce"
              className="bouncy-ball"
            ></motion.div>
          </div>
          <div ref={ref} className="viewer"></div>
          <div className="bottom-container">
            {inView && (
              <AnimatePresence>
                <motion.div
                  initial={hide}
                  animate={popFromBottom}
                  exit={hide}
                  transition={spring}
                  className="text-box-container"
                >
                  <p className="title">Poor official Doc</p>
                  <p className="text-box">
                    React technologies are being updated at extremely high pace.
                    There is no time to make proper official documentation.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
            {inView && (
              <AnimatePresence>
                <motion.div
                  initial={hide}
                  animate={popFromBottom}
                  exit={hide}
                  transition={spring}
                  className="text-box-container"
                >
                  <p className="title">Massive Community</p>
                  <p className="text-box">
                    To overcome poor official documentation, developers started
                    doing it on thier own. Thanks to popularity of React,
                    everyone from beginner to advanced can find thousands of
                    videos, articles and examples of what he is looking for.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
            {inView && (
              <AnimatePresence>
                <motion.div
                  initial={hide}
                  animate={popFromBottom}
                  exit={hide}
                  transition={spring}
                  className="text-box-container"
                >
                  <p className="title">Our Example</p>
                  <p className="text-box">
                    We wanted our page to look more interactive. To show You how
                    easily this can be done, we used Framer Motion Library.
                    Every animation effect on this webiste, incuding jumping
                    ball in this section, is done by Framer Motion. A little
                    effort is enough to make every site responsive and good
                    looking.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>
      )}
    </InView>
  );
};

export default Environment;
