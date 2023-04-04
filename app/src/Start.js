import { delay, motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const Start = () => {
  const [inView, setInView] = useState(false);

  const pop = {
    scale: inView ? [0, 1] : null,
    opacity: [0, 1],
  };
  const spring = {
    delay: 7,
    type: "spring",
    stiffness: 500,
    damping: 20,
  };

  const [modal, setModal] = useState(true);
  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <div className="start-container">
          <div className="typewriter">
            <p className="title">WHAT IS REACT?</p>
          </div>
          <div className="typewriter">
            <InView onChange={setInView}>
              {({ inView, ref }) => (
                <p ref={ref} className="by">
                  By Piotr Lehmann & Bartłomiej Czech
                </p>
              )}
            </InView>
          </div>
          <motion.button
            onClick={hideModal}
            animate={pop}
            transition={spring}
            className="get-started-btn"
          >
            GET STARTED
          </motion.button>
        </div>
      )}
    </>
  );
};

export default Start;
