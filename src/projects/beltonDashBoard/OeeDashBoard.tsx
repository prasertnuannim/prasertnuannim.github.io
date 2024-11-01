/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import OhverBar from "./OhverBar";

type Props = {};

const OeeDashBoard = (props: Props) => {
  return (
    <div className="max-w-[1280px] mx-auto" id="oeeDashBoard">
      <div className="flex space-x-3 md:space-x-10 sm:space-x-0">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <p className="text-white bg-gradient-to-r from-green-400 to-[#519457] text-center h-[30px] w-[30px] rounded-md flex items-center justify-center md:text-2xl sm:mr-2 sm:text-sm">
              1
            </p>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] mt-5 rounded-md bg-gradient-to-b from-[#519457] sm:mt-2"
            style={{ transitionDelay: "100ms" }}
          ></motion.div>
        </div>
        <div className="flex flex-col mb-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: false }}
            className="md:text-2xl font-medium text-black js-build-in-item build-in-slideX-left build-in-animate sm:text-md"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-green-700 text-2xl md:text-lg sm:text-sm">Dashboard </p>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="indent-4 md:text-sm max-md:leading-8 max-lg:leading-10 mb-5 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
           <span className=" text-gray-600 text-lg sm:text-sm">Web application displays data from the OEE Dashboard for IoT. There is run hour, losses hour, output, losses summary.</span>
            <p className="text-gray-600 text-lg sm:text-sm">
            - Reactjs.tsx, chartjs, material UI, and redux are used to construct dashboards.
            </p>
            <p className="text-gray-600 text-lg sm:text-sm">
            - Create a backend with Node.js and establish a MySQL server connection.
            </p>
            <p className="text-gray-600 text-lg sm:text-sm">
            - Use the store procedure functionality in the MySQL server to assist with data table queries.
            </p>
          </motion.h3>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween" }}
      >
        <img
          className="w-full  h-auto shadow-2xl"
          width="1208"
          height="764"
          loading="lazy"
          decoding="async"
          alt=""
          aria-hidden="true"
          src="/images/projects/beltonDashBoard/OeeDashBoardLine.jpg"
        />
      </motion.div>
      <OhverBar />
    </div>
  );
};

export default OeeDashBoard;
