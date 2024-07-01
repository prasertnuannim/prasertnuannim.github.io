import React, { useRef } from "react";
import { motion } from "framer-motion";
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";

const Education = () => {
  const ref = useRef(null);
  const Details = ({ type, time, place, info }: any) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-4 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-start justify-start md:w-full sm:w-full"
      >
        <div className="my-8 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-start justify-start md:w-full sm:w-full">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex md:pl-2 space-x-3">
              <div className="flex flex-col items-center sm:hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="relative"
                >
                  <div className="h-[30px] w-[30px] bg-blue-700 rounded-full" />
                  <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
                </motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className=" h-full w-[3px] mt-4 rounded-md bg-gradient-to-b from-[blue]"
                />
              </div>

              <div className="mt-10 sm:mt-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: false }}
                  className="text-[20px] md:text-2xl mb-5 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate"
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className=" capitalize text-2xl sm:text-xl xs:text-lg">
                    <p className="text-xl font-bold">{type}</p>
                    <p className="text-red-700 text-md font-bold">
                      {time}{" "}
                      <span className="text-gray-500 text-[20px]">{place}</span>{" "}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  const text = "Education";
  const textChars = splitStringUsingRegex(text);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <div className="">
      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-2xl font-bold"
      >
        {textChars.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.35 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <div
        ref={ref}
        className="w-[80%] mx-auto relative lg:w-full md:w-full sm:w-full sm:"
      >
        <ul className="mt-5 w-full flex flex-col items-start justify-start ml-4 sm:ml-2">
          <Details
            type="Technology Bachelor: Internet Technology B.Tech"
            time="2009-2013"
            place="Phuket Rajabhat University."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
