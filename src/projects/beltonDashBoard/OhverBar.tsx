/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const OhverBar = (props: Props) => {
  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };
  return (
    <div className="flex relative md:pl-10 sm:pl-0">

      <img
        alt=""
        aria-hidden="true"
        className=" mt-10 absolute top-0 right-0 h-auto pointer-events-none blur-sx"
        loading="lazy"
        decoding="async"
        src="/images/background/line1.png/"
      />

      <div className="flex items-center relative">
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="w-[3px] h-full increase origin-top"
        ></motion.div>
      </div>
      <div className="lg:pl-24 md:pl-16 pl-6 sm:pl-0">

        <div className="flex relative max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-2 md:my-16 pb-6 md:pb-20 md:flex-row sm:flex-col">
          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="md:pr-6"
            >
              <div className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full sm:w-full text-[#7d8590]">
                <span className="font-semibold text-yellow-700 sm:text-[16px] ">
                  Custom Ohver Bar Chat.
                </span>{" "}
                <p className="text-black text-lg font-bold  indent-8 sm:text-sm sm:indent-4">
                The main bar chart can be viewed in detail by hovering the mouse over the desired bar.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="py-2 px-2 w-full ">
            <div className="relative">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween" }}
                  className="w-full top-[-100px] right-7 shadow-2xl "
                >
                  <img
                    src="/images/projects/beltonDashBoard/OeeDashBoardLossesHour.jpg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className=" w-full h-auto rounded-md"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OhverBar;
