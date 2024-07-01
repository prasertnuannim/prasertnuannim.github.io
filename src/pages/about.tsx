/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/motionFunction/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/sert.jpg";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/ui/TransitionEffect";

type Props = {};

const about = (props: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphBiography = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-20%"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  
  return (
    <>
      <Head>
        <title>Sert | About Page</title>
        <meta name="" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-screen flex-col items-center justify-center bg-white">
        <Layout className="mt-4 bg-white">
          <AnimatedText
            text="Prasert Nuannim"
            className="mb-2 mt-1 p-10 rounded-lg text-white text-8xl bg-gradient-to-r from-blue-900 via-blue-400 to-blue-0 lg:!text-4xl sm:!text-4xl xs:!text-2xl"
          />
          <div className="flex flex-row items-center md:flex-col sm:flex-col">
            <motion.div
              style={{ translateX: paragraphBiography }}
              className="col-span-2 flex flex-col w-2/3 p-20 items-start justify-center  xl:col-span-12 md:order-2 md:flex-col md:w-full md:p-0 sm:p-0 sm:w-full"
            >
              <p className="indent-8 text-gray-500 text-xl font-medium md:text-md md:p-0 sm:text-md">
                Greetings, I'm Sert, a highly motivated{" "}
                <span className="text-blue-700">system administrator</span> with
                over a 10+ years  of expertise overseeing the technical and
                functional upkeep and operation of designated systems.
              </p>
              <p className="indent-8 text-gray-500 mt-2 text-xl font-medium md:text-md sm:text-md">
                <span className="text-red-700">IoT Development Services </span>{" "}
                more than 5+ years of full stack development expertise with ESP Node MCU, NodeJS, and React
              </p>
            </motion.div>

            <div className="relative w-[400px] mt-3 rounded-2xl border-solid border-dark bg-light shadow-dark shadow-2xl xl:col-span-4 md:order-2 md:w-[400px] sm:w-[300px] sm:items-center">
              <Image
                src={profilePic}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl items-center justify-center"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
