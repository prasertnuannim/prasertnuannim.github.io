import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";
import TextSlide from "@/motionFunction/TextSlide";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const detailRef = useRef(null);

  return (
    <li
      ref={detailRef}
      className="my-4 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-start justify-between md:w-full sm:w-full"
    >
      <div className="first:mt-5 last:mb-0 w-[100%] mx-auto flex-col items-start justify-between md:w-full sm:w-full">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex md:pl-2 space-x-2">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="h-[30px] w-[30px] bg-red-700 rounded-full sm:hidden" />
                <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-1"></span>
              </div>
              <div className="h-full w-[3px] mt-2 rounded-md bg-gradient-to-b from-[red] sm:hidden" />
            </div>
            <div className="mt-10 sm:mt-3">
              <div className="flex flex-row items-start">
                <TextSlide
                  text={`${position}`}
                  className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
                  delay={500}
                />
                <a href={companyLink} target="_blank" rel="noopener noreferrer">
                  <TextSlide
                    text={`@${company}`}
                    className="capitalize font-bold text-red-500 pl-2 text-2xl sm:text-xl xs:text-lg"
                  />
                </a>
              </div>
              <TextSlide
                text={`${time} | ${address}`}
                className="capitalize font-medium sm:text-sx"
              />
              {work.map((task, index) => (
                <TextSlide
                  key={index}
                  text={task}
                  className="indent-4 text-gray-600 text-md sm:text-sx"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const text = "Experience";
  const textChars = splitStringUsingRegex(text);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <div className="my-10 sm:my-5">
      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.2 }}
        className="text-2xl font-bold"
      >
        {textChars.map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.35 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <div
        ref={ref}
        className="w-[80%] mx-auto relative lg:w-full md:w-full sm:w-full sx:w-full"
      >
        <ul className="flex flex-col items-start justify-start">
          <Details
            position="IoT Development Services"
            company="Belton"
            companyLink="https://www.beltontechnology.com/en/index.html"
            time="2018-Present"
            address="Nava Nakorn Industrial Estate Zone 1, Pathumthani"
            work={[
              " - Establish a wifi network and API domain inside the company to facilitate IoT projects.",
              " - Utilize Mysql's OEE calculation capability and preserve raw data.",
              " - Use Python and Arduino C/C++ to develop microcontrollers.",
              " - Create a dashboard or web application with NodeJS, Redux, Tailwind CSS, NextJs, chartJs, and React."
            ]}
          />
          <Details
            position="IT Support"
            company="Belton"
            companyLink="https://www.beltontechnology.com/en/index.html"
            time="2013-Present"
            address="Nava Nakorn Industrial Estate Zone 1, Pathumthani"
            work={[
              " - Worked on a team responsible for installing and solving office and production computer problems.",
              " - Solving Cisco network issues in the organization."
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;