/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const AdminAccount = (props: Props) => {
  const [adminPositionIndex, setAdminPositionIndex] = useState([0, 1, 2, 3, 4]);

  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col relative bg-gradient-to-r from-gray-800 to-blue-800 mb-5 rounded-md md:pl-10 sm:pl-0">
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
      </motion.div>
    </div>
  );
};

export default AdminAccount;
