import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const Intro = () => {
  const [inView, setInView] = useState(false);

  // for pop-up Modal
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const animationVariants = {
    slideFromLeft: {
      opacity: [0, 1],
      x: inView ? [-800, 0] : null,
    },
    slideFromRight: {
      opacity: [0, 1],
      x: inView ? [1000, 0] : null,
    },
    containerPopUp: {
      opacity: [0, 1],
      scale: [0, 1],
    },
    requestAnimation: {
      opacity: [0, 1, 0],
      x: [0, 120],
      transition: {
        duration: 2,
        delay: 2,
        repeat: Infinity,
      },
    },
    responseAnimation: {
      opacity: [0, 1, 0],
      x: [0, -120],
      transition: {
        duration: 2,
        delay: 5,
        repeat: Infinity,
      },
    },
  };

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <>
          <section className="content" id="intro">
            <div className="left-container">
              <motion.div
                className="title"
                variants={animationVariants}
                animate="slideFromLeft"
              >
                Traditional Websites
              </motion.div>
              <motion.div
                className="text-box"
                variants={animationVariants}
                animate="slideFromLeft"
              >
                <motion.p
                  variants={animationVariants}
                  animate="slideFromLeft"
                  transition={{ delay: 0.2 }}
                >
                  Traditionally, in web apps, you click a link and wait for a
                  new page to load. You click a button and wait for some action
                  to complete, send request and then wait for server to respond
                  with HTML page.
                </motion.p>
              </motion.div>
              <motion.button
                className="pop-btn"
                onClick={toggleModal}
                variants={animationVariants}
                animate="slideFromLeft"
                whileHover={{
                  scale: 1.1,
                }}
              >
                How it works with JS?
              </motion.button>
            </div>
            <div className="right-container">
              <motion.div className="animation-container">
                <div ref={ref} className="user">
                  <img src={require("./images/user.png")} alt="user" />
                </div>
                <div className="line-container">
                  <motion.p
                    className="request"
                    variants={animationVariants}
                    animate="requestAnimation"
                  >
                    request
                  </motion.p>
                  <motion.div
                    className="line-top"
                    variants={animationVariants}
                    animate="slideFromRight"
                    transition={{ delay: 0.3 }}
                  ></motion.div>
                  <motion.div
                    className="line-bottom"
                    variants={animationVariants}
                    animate="slideFromRight"
                    transition={{ delay: 0.4 }}
                  ></motion.div>
                  <motion.p
                    className="response"
                    variants={animationVariants}
                    animate="responseAnimation"
                  >
                    response
                  </motion.p>
                </div>
                <motion.div
                  className="server"
                  variants={animationVariants}
                  animate="slideFromRight"
                  transition={{ delay: 0.6 }}
                >
                  <img src={require("./images/server.png")} alt="server" />
                </motion.div>
              </motion.div>
            </div>
          </section>
          <AnimatePresence>
            {modal && (
              <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <motion.div className="modal-content">
                  <motion.div
                    className="animation-container"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <h2 className="modal-title">How it works with JS?</h2>
                    <div className="user">
                      <img src={require("./images/user.png")} alt="user" />
                    </div>
                    <div className="line-container">
                      <motion.p
                        className="request"
                        variants={animationVariants}
                        animate="requestAnimation"
                      >
                        request
                      </motion.p>
                      <motion.div
                        className="line-top"
                        variants={animationVariants}
                        animate="slideFromRight"
                        transition={{ delay: 0.3 }}
                      ></motion.div>
                      <motion.div
                        className="line-bottom"
                        variants={animationVariants}
                        animate="slideFromRight"
                        transition={{ delay: 0.4 }}
                      ></motion.div>
                      <motion.p className="no-response">NO response</motion.p>
                    </div>
                    <motion.div
                      className="server"
                      variants={animationVariants}
                      animate="slideFromRight"
                      transition={{ delay: 0.6 }}
                    >
                      <img src={require("./images/server.png")} alt="server" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
    </InView>
  );
};

export default Intro;
