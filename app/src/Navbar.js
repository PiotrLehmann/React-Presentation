import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

const Navbar = () => {
  const animationVariants = {
    slidingAnchor: {
      y: [-100, 15, 0],
    },
  };

  return (
    <>
      <nav>
        <ul className="nav-items">
          <motion.li
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.2 },
            }}
            whileTap={{ color: "#000" }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#react-js">React Js</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#intro">Intro</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#why-react">Why React?</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.3, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#JSX">JSX</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.4, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#components">Components</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#hooks">Hooks</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.6, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#environment">Environment</a>
          </motion.li>
          <motion.li
            whileTap={{ color: "#000" }}
            whileHover={{
              scale: 1.3,
              color: "#1d9cbb",
              transition: { duration: 0.1 },
            }}
            variants={animationVariants}
            animate="slidingAnchor"
            transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
          >
            <a href="#end">End</a>
          </motion.li>
        </ul>
      </nav>
      <ProgressBar />
    </>
  );
};

export default Navbar;
