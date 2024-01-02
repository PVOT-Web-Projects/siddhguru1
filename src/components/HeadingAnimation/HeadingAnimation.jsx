import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, fontSize, justifyContent }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        // type: "spring",
        damping: 12,
        stiffness: 50,
        duration: "0.5",
      },
    },
    hidden: {
      x: 0,
      y: 100,
      transition: {
        damping: 12,
        stiffness: 50,
        duration: "0.5",
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: fontSize,
        justifyContent: justifyContent,
      }}
      variants={container}
    >
      <motion.span variants={child}>{text}</motion.span>
    </motion.div>
  );
};

export default AnimatedTextWord;
