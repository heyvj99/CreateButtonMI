import { useState } from "react";
import { motion } from "framer-motion";
import FadeUpDown from "./MATypes/FadeUpDown.tsx";
import Keyframes from "./MATypes/Keyframes.tsx";
import ButtonHoverAndTap from "./MATypes/ButtonHoverAndTap.tsx";
import DragAnimation from "./MATypes/DragAnimation.tsx";
import ScrollIndicator from "./MATypes/ScrollIndicator.tsx";
import SVGAnimation from "./MATypes/SVGAnimation.tsx";

const MAGrid = () => {
  const [grid, setGrid] = useState<string[]>([]);

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <motion.section
        variants={gridVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-md p-4 gap-10 justify-center items-center flex flex-row"
        >
          <FadeUpDown />
        </motion.div>

        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-md p-4 gap-10 justify-center items-center flex flex-row"
        >
          <Keyframes />
        </motion.div>

        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-md p-4 gap-10 justify-center items-center flex flex-row"
        >
          <ButtonHoverAndTap />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-md p-4 justify-center gap-10 items-center flex flex-row"
        >
          <DragAnimation />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-md p-4 justify-center gap-10 items-center flex flex-row"
        >
          <ScrollIndicator />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-md p-4 justify-center gap-10 items-center flex flex-row"
        >
          <SVGAnimation />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MAGrid;
