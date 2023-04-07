import { AnimatePresence, motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const End = () => {
  const [inView, setInView] = useState(false);

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
    <section className="content" id="end">
      <InView onChange={setInView}>
        {({ inView, ref }) => (
          <>
            {inView && (
              <AnimatePresence>
                <motion.p
                  initial={hide}
                  animate={popFromBottom}
                  exit={hide}
                  transition={spring}
                >
                  We hope u enjoyed our presentation!
                </motion.p>
              </AnimatePresence>
            )}
            <div ref={ref} className="viewer"></div>
            {inView && (
              <AnimatePresence>
                <motion.a
                  initial={hide}
                  animate={popFromBottom}
                  exit={hide}
                  transition={spring}
                  className="last-anchor"
                  href="#"
                >
                  GitHub Repository of this webiste
                </motion.a>
              </AnimatePresence>
            )}
          </>
        )}
      </InView>
    </section>
  );
};

export default End;
