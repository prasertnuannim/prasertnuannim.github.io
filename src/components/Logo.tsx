import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/profile/Logo.png";
type Props = {};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1",
  },
};

const Logo = (props: Props) => {
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-center">
      <motion.div
        variants={gridSquareVariants}
        className="w-52 h-20 aspect-square rounded-lg justify-center flex items-center gap-0  mt-2"
      >
        <Image
          src={logo}
          alt="logo"
          className="w-full h-auto mt-10 md:inline-block md:w-full "
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </motion.div>
    </div>
  );
};

export default Logo;
