/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import addProfile from "../../../../public/images/projects/beltonMonitorMachine/addProfile.png";
import editProfile from "../../../../public/images/projects/beltonMonitorMachine/editProfile.png";
import deleteProfile from "../../../../public/images/projects/beltonMonitorMachine/deleteProfile.png";
import resetPassword from "../../../../public/images/projects/beltonMonitorMachine/resetPassword.png";
import overAllProfile from "../../../../public/images/projects/beltonMonitorMachine/overAllProfile.png";

import changPassword from "../../../../public/images/projects/beltonMonitorMachine/changePassword.png";
import updatemage from "../../../../public/images/projects/beltonMonitorMachine/updateImage.png";

type Props = {};

const AdminAccount = (props: Props) => {
  const [adminPositionIndex, setAdminPositionIndex] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setAdminPositionIndex((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setAdminPositionIndex((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [
    addProfile,
    editProfile,
    deleteProfile,
    resetPassword,
    overAllProfile,
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col relative bg-gradient-to-r from-gray-700 to-blue-700 mb-5 rounded-md md:pl-10 sm:pl-0">
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

        <div className="flex relative items-center lg:gap-x-5 sm:my-2 md:flex-row sm:flex-col-reverse sm:text-[14px]">
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
                    src="/images/projects/beltonMonitorMachine/adminAccounts.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className=" w-full h-auto rounded-md"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="md:pr-6"
            >
              <div className="mb-4 pl-5 pr-5 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full sm:w-full text-[#7d8590]">
                <span className="font-semibold text-yellow-700 sm:text-[16px]">
                  Admin Profile
                </span>{" "}
                <p className=" mt-2 text-white text-lg  indent-8 sm:text-sm sm:indent-4">
                  Admin profile can be created, edited, deleted, granted
                  permissions and reset password. utilize the data table to see
                  every user account.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "tween" }}
        className="rounded-2xl shadow-lg shadow-gray-500"
      >
        <p className="text-2xl text-white bg-gradient-to-r from-red-700 to-green-700 rounded-t-md px-5 py-3 sm:text-sm">
          Detail of Admin Profile
        </p>

        <div className="flex h-[680px] 2xl:h-[480px] sm:h-[180px] bg-gray-300 items-center flex-col justify-center">
          {images.map((image: any, index: any) => (
            <motion.div
              key={index}
              initial="center"
              animate={positions[adminPositionIndex[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ width: "25%", position: "absolute" }}
            >
              <Image
                src={image}
                alt={`Admin Image ${index}`}
                className="rounded-[10px]  p-0.1 mb-5 shadow-md sm:p-0 sm:rounded-sm"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between gap-3">
          <motion.button
            whileTap={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4D5656",
              color: "white",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-1/6 py-4 rounded-lg text-gray-500 font-bold tracking-wide sm:p-2 sm:text-[12px]"
            onClick={handleBack}
          >
            Back
          </motion.button>
          <motion.button
            whileTap={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4D5656",
              color: "white",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-1/6 py-4 rounded-lg text-gray-500 font-bold tracking-wide  sm:p-2 sm:text-[12px]"
            onClick={handleNext}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminAccount;
