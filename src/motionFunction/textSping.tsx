import { motion } from "framer-motion";
import React from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import TextSpan from "../utils/textSpan";

interface Props {
    text: String
    className: String
}

const TextSping = ({text, className}:Props) => {
  const sentenc = text.split("");

  return (
    <>
      <div className={`${className}`}>
        {sentenc.map((letter, index) => {
          return (
            <TextSpan key={index} >
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </div>
    </>
  );
};

export default TextSping;
