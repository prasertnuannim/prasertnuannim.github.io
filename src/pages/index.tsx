import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/sertImage.png";
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { TypeAnimation } from "react-type-animation";
import { DiCss3, DiJavascript, DiNodejsSmall, DiPython, DiReact } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiArduino } from "react-icons/si";
import Tooltip from "@/components/ui/Tooltip";
import ModalContact from "@/components/ui/ModalContact";
import { FcComboChart, FcPieChart } from "react-icons/fc";

const inter = Inter({ subsets: ["latin"] });

const getTransformStyles = (isMouseEntered: boolean, index: number) => ({
  transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
  transitionDelay: `${index * 0.02}s`,
});

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  return (
    <>
      <Head>
        <title>Prasert Nuannim | Home</title>
        <meta name="Prasert Nuannim" content="Prasert Nuannim" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center ">
        <Layout className=" bg-white">
          <div className="flex flex-row items-center justify-center md:flex-col sm:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="profilePic"
                className="w-full h-auto md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>

            <div className="w-1/2 text-gray-500 md:w-full ">
              <p className="text-2xl md:text-2xl font-bold">
                Hi. I am Sert. <br />
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer.",
                    2000,
                    "System Administrator.",
                    2000,
                    "IoT Developer.",
                    2000,
                  ]}
                  wrapper="strong"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
              <p className="text-xl md:text-lg font-sans">
                With 3+ years of experience.
              </p>
              <div className="glass mt-5 p-5">
                <p className=" text-xl  font-bold mb-4 bg-clip-text text-transparent text-center bg-gradient-to-r from-red-500 to-blue-500">
                  My Tech Stack
                </p>
                <div className="grid grid-cols-6 gap-1 text-4xl space-x-2 space-y-2 md:space-x-1 md:space-y-1">
                  <Tooltip content="React Js" className="w-[80px]"><DiReact className="text-sky-500 mt-2" /></Tooltip>
                  <Tooltip content="Next Js"  className="w-[80px]"><RiNextjsFill className="text-black"/></Tooltip>
                  <Tooltip content="Redux"  className="w-[80px]"><TbBrandRedux className="text-violet-700"/></Tooltip>
                  <Tooltip content="Taikwide Css"  className="w-[100px]"><RiTailwindCssFill className="text-sky-500" /></Tooltip>
                  <Tooltip content="Chart Js"  className="w-[100px]"><FcPieChart className="text-sky-500" /></Tooltip>
                  <Tooltip content="Node Js"  className="w-[80px]"><DiNodejsSmall className="text-green-500" /></Tooltip>
                  <Tooltip content="My SQL"  className="w-[80px]"><GrMysql className="text-blue-500"/></Tooltip>
                  <Tooltip content="Python"  className="w-[80px]"><DiPython className="text-yellow-500"/></Tooltip>
                  <Tooltip content="Arduino"  className="w-[80px]"><SiArduino className="text-teal-600"/></Tooltip>
                </div>
              </div>

              <div className="mt-8">
                <button
                 onClick={() => setShowModal(true)}
                  className="bg-gradient-to-r from-cyan-700 to-teal-400 hover:bg-gradient-to-l hover:from-teal-700 hover:to-cyan-400 text-white font-semibold px-6 py-3 rounded-md mr-6"
                  onMouseEnter={() => {
                    setIsMouseEntered(true);
                  }}
                  onMouseLeave={() => {
                    setIsMouseEntered(false);
                  }}
                >
                  <span className="fancy-button-text-container">
                    {splitStringUsingRegex("Contact").map(
                      (character, index) => (
                        <span
                          className="fancy-button-char-container"
                          key={index}
                        >
                          <span
                            style={getTransformStyles(isMouseEntered, index)}
                          >
                            {character}
                          </span>
                          <span
                            style={getTransformStyles(isMouseEntered, index)}
                          >
                            {character}
                          </span>
                        </span>
                      )
                    )}
                  </span>
                </button>
               
              </div>    
            </div>
          </div>
        </Layout>
        <ModalContact showModal={showModal} setShowModal={setShowModal} />
      </main>
    </>
  );
}
