import { motion, useScroll } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <>
      <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
        <motion.div
          className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
          style={{ scaleY: completionProgress }}
          transition={{ ease: "easeIn" }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default ScrollIndicator;
