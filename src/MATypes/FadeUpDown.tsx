import { motion } from "framer-motion";

const FadeUpDown = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="w-20 h-20 bg-amber-500 rounded-lg"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="w-20 h-20 bg-rose-500 rounded-full"
      ></motion.div>
    </>
  );
};

export default FadeUpDown;
