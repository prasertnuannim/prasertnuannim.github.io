/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EsdDisplay from "./EsdDisplay";

type Props = {};

const EsdTester = (props: Props) => {
  return (
    <div className="max-w-[1280px] mx-auto" id="esdTester">
      <div className="flex space-x-3 md:space-x-10 sm:space-x-0">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <p className="text-white bg-gradient-to-r from-red-500 to-red-700 text-center h-[30px] w-[30px] rounded-md flex items-center justify-center md:text-2xl sm:mr-2 sm:text-sm">
              3
            </p>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] mt-4 rounded-md bg-gradient-to-b from-red-700"
            style={{ transitionDelay: "100ms" }}
          ></motion.div>
        </div>
        <div className="flex flex-col mb-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: false }}
            className="md:text-2xl font-medium text-black js-build-in-item build-in-slideX-left build-in-animate sm:text-md"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-red-700 text-2xl md:text-lg sm:text-sm">
              ESD Tester System
            </p>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="indent-4 md:text-sm max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-5 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-gray-600 text-lg sm:text-sm">
              The Anti-Static ESD Access Control Tester is designed to work with
              outdated hardware, use a microcontroller to monitor employee
              status, operate door, and save recode in a database.
            </span>
            <p className="text-gray-500 text-lg sm:text-sm">
              - ESD Tester is developed using Redux Toolkit, Tailwind CSS,
              NextJS, NextAuth.
            </p>
            <p className="text-gray-500 text-lg sm:text-sm">
              - Develop a backend using Node.js and connect to a MySQL server.
            </p>
            <p className="text-gray-500 text-lg sm:text-sm">
              - Raspberry pi use python script.
            </p>
          </motion.h3>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween" }}
        className="object-center"
      >
        <img
          className="w-full h-auto items-center justify-center shadow-2xl mb-8"
          alt=""
          src="/images/beltonESD/esdTesterData.png"
        />
      </motion.div>

      <EsdDisplay />
    </div>
  );
};

export default EsdTester;
