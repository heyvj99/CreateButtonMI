import { motion } from "framer-motion";

const DragAnimation = () => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={{
          top: -125,
          right: 125,
          bottom: 125,
          left: -125,
        }}
        dragTransition={{
          bounceDamping: 100,
          bounceStiffness: 60,
        }}
        className="w-20 h-20 bg-rose-400 rounded-lg cursor-grab"
      ></motion.div>
    </>
  );
};

export default DragAnimation;
