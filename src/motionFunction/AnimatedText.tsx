import React from "react";
import {motion} from 'framer-motion'

const quote ={
  initial:{
    opacity:1,
  },
  animate:{
    opacity:0.7,
    transition:{
      delay:0.2,
      staggerChildren:0.2
    }
  }
}

const singelWord ={
  initial:{
    opacity:1,
    y:30,
  },
  animate:{
    y:0,
    transition:{
      duration:0.5
    }
  }
}

const AnimatedText = ({ text, className="" }: any) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-5xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word:any, index:any) => 
          <motion.span key={word+'-'+index} className="inline-block"
          variants={singelWord}
          >
            {word}&nbsp;
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
