import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
  activeButton: React.ReactNode;
  hidderButton: React.ReactNode;
  setActiveButton: () => void;
}

export default function Switch({
  activeButton,
  hidderButton,
  setActiveButton,
}: SwitchProps) {
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hover: { scale: 1.2 },
    hidden: { scale: 0.6, opacity: 0, y: 50 },
  };

  return (
    <div>
      <AnimatePresence>
        {isHovered && (
          <motion.button
            key="languageSwitcher"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={switchVariants}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-white shadow-lg"
          >
            <p className="text-sm font-semibold">{hidderButton}</p>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-white w-[3rem] h-[3rem] drrop-shadow backdrop-blur-[0.5rem] border-slate-500 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
        variants={switchVariants}
        initial="visible"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setActiveButton}
      >
        <p className="font-semibold">{activeButton}</p>
      </motion.button>
    </div>
  );
}


