import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      animate={props.animate}
      transition={props.transition}
      key={props.key}
      className="card"
      style={{
        backgroundColor: "#fff",
        color: props.textColor,
        fontSize: props.fontSize,
      }}
    >
      <div
        className="card-background"
        style={{ backgroundColor: props.backgroundColor }}
      ></div>
      <p>{props.title}</p>
    </motion.div>
  );
};

export default Card;
