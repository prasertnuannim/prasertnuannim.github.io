/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/motionFunction/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import OeeDashBoard from "@/projects/beltonDashBoard/OeeDashBoard";
import MonitorMachine from "@/projects/beltonMonitorMachine/MonitorMachine";
import EsdTester from "@/projects/beltonESD/EsdTester";

type Props = {};

const Projects: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Sert | Projects Page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-screen flex-col items-center justify-center bg-white">
        <Layout className="bg-white">
          <AnimatedText
            text="My Projects"
            className="mb-10 p-10 rounded-lg text-white text-4xl bg-gradient-to-r from-teal-700 to-yellow-500 lg:!text-4xl sm:!text-4xl xs:!text-2xl sm:mb-2"
          />

          <div className="grid w-full grid-cols-1 gap-10">
            <OeeDashBoard />
          </div>

          <motion.div
            initial={{ width: 1 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-[3px] w-full mb-4 rounded-md bg-gradient-to-r from-cyan-500 to-yellow-500"
          />

          <div className="grid w-full grid-cols-1 gap-10 mt-5">
            <MonitorMachine />
          </div>

          <motion.div
            initial={{ width: 1 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-[3px] w-full mb-4 rounded-md bg-gradient-to-r from-red-500 to-blue-500"
          />

          <div className="grid w-full grid-cols-1 gap-10 mt-5">
            <EsdTester />
          </div>

          <motion.div
            initial={{ width: 1 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-[3px] w-full mb-4 rounded-md bg-gradient-to-r from-red-500 to-blue-500"
          />
        </Layout>
      </main>
    </>
  );
};

export default Projects;
