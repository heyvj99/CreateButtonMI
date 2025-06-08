import { motion } from "framer-motion";

const ButtonHoverAndTap = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        // backgroundColor: "white",
        // color: "black",
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{ duration: 0.25, bounceDamping: 10, bounceStiffness: 600 }}
      className="bg-emerald-600 w-1/2 py-3 rounded-lg text-2xl text-gray-100 font-regular tracking-wide"
    >
      Click Me
    </motion.button>
  );
};

export default ButtonHoverAndTap;
