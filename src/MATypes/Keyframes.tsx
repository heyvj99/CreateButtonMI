import { motion } from "framer-motion";

const Keyframes = () => {
  return (
    <motion.div
      //   initial={{ opacity: 0, y: 100 }}
      animate={{
        scale: [1, 2, 2, 1],
        rotate: [0, 90, 90, 0],
        borderRadius: ["10%", "10%", "50%", "10%"],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: 3,
        repeatDelay: 1,
      }}
      className="w-1/3 h-1/3 bg-teal-200"
    ></motion.div>
  );
};

export default Keyframes;
