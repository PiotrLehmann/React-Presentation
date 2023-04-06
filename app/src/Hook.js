import { delay, motion } from "framer-motion";

const hookAppear = {
  opacity: 1,
  y: 0,
};

const hookInitial = {
  opacity: 0,
  y: -400,
};

const hide = {
  scale: 0,
  opacity: 0,
  transition: {
    duration: 0.1,
    delay: 0,
  },
};

const Hook = (props) => {
  return (
    <motion.div
      onClick={props.onClick}
      initial={hookInitial}
      animate={props.inView ? hookAppear : hide}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 15,
        delay: props.delay,
      }}
      className="hook-container"
    >
      <motion.img
        whileTap={{ scale: 1.5 }}
        transition={props.transition}
        src={require("./images/hook.png")}
      />
      <p className="hook-name">{props.name}</p>
    </motion.div>
  );
};

export default Hook;
