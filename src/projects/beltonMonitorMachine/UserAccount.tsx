/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const UserAccount = (props: Props) => {
  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col relative bg-gradient-to-b from-green-200 to-green-700 mb-5 rounded-md md:pl-10 sm:pl-0">
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

        <div className="flex items-center lg:gap-x-5 md:flex-row sm:flex-col sm:text-[14px]">
          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className=""
            >
              <div className="mb-4 pl-5 pr-5 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full sm:w-full text-[#7d8590]">
                <span className="font-semibold text-blue-700 sm:text-[16px]">
                  User Profile
                </span>{" "}
                <p className=" mt-2 text-black text-sm  indent-8 sm:text-sm sm:indent-4">
                  User profiles have the ability to change the status and data
                  of machines.
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
                  className="w-full top-[-100px] right-7 shadow-2xl"
                >
                  <img
                    src="/images/beltonMonitorMachine/userAccount.png"
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

export default UserAccount;
