/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const EsdDisplay = (props: Props) => {
  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col relative  mb-5 rounded-md md:pl-10 sm:p-0">
        <div className="flex items-center justify-between sm:text-[14px]">
          <div className=" flex flex-row space-x-6 py-4 mb-2 w-full md:flex-col md:space-x-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="flex w-1/2 rounded-md shadow-lg shadow-gray-500 bg-gradient-to-r from-green-500 to-red-700 md:w-full"
            >
              <div className="mb-4 p-5 text-2xl max-lg:text-[20px] text-[#7d8590]">
                <span className="font-semibold text-light sm:text-[16px]">
                 Employee Data
                </span>{" "}
                <p className=" mt-2 text-light text-lg indent-8 sm:text-sm sm:indent-4">
                Use the data grid to add, edit, remove, and display employee data.
                </p>
                <img
                    src="/images/projects/beltonESD/employeeState.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="mt-3 w-full h-auto rounded-md"
                  />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="flex w-1/2 rounded-md shadow-lg shadow-gray-500 bg-gradient-to-l from-blue-500 to-red-700 md:w-full md:mt-6"
            >
              <div className="mb-4 p-5 text-2xl max-lg:text-[20px]  text-[#7d8590]">
                <span className="font-semibold text-light sm:text-[16px]">
                  ESD Tester Display
                </span>{" "}
                <p className=" mt-2 text-light text-lg  indent-8 sm:text-sm sm:indent-4">
                ESD tester apparatus wait for the user is employee number, verify permissions to access the production line, and count the number of dots to verify the value from the ESD machine before responding to BD.
                </p>
                <img
                    src="/images/projects/beltonESD/esdDisplay.jpg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="mt-3 w-full h-auto rounded-md"
                  />
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default EsdDisplay