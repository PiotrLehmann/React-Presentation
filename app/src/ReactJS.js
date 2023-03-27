import { motion } from "framer-motion";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const Section1 = () => {
  const [inView, setInView] = useState(false);

  return (
    <InView onChange={setInView}>
      {({ inView, ref }) => (
        <section className="content" id="react-js">
          <div className="left-container">
            <div ref={ref} className="title-container">
              <motion.p
                initial={{ x: -800, opacity: 0 }}
                className="title"
                animate={{ x: inView ? [-800, 0] : null, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                React JS
              </motion.p>
            </div>
            <motion.p
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: inView ? [-1000, 0] : null, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-box"
              id="p1"
            >
              React JS is a JavaScript library for building User Interfaces. It
              was developed at Facebook, Meta in 2013 and we can safely say, it
              has been one of the most infuential UI library of recent decade.
              It centers on the view layer of the application and is friendly
              for people, who already know basics of JS and it really offers
              many tools to create responsive websites... fast!
            </motion.p>
          </div>
          <div className="right-container">
            <motion.img
              animate={{ y: inView ? [-1000, 0] : null }}
              id="p1-logo"
              src={require("./images/React.webp")}
            />
          </div>
        </section>
      )}
    </InView>
  );
};

export default Section1;
