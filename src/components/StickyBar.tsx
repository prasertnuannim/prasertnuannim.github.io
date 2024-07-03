"use client";
import React, { useEffect, useState } from "react";

const StickyBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [oeeDashBoard, setoeeDashBoard] = useState(false);
  const [monitorMachine, setmonitorMachine] = useState(false);
  const [security, setEsdTester] = useState(false);
  const [oeeDashBoard1, setOeeDashBoard1] = useState(false);
  const [monitorMachine1, setMonitorMachine1] = useState(false);
  const [security1, setEsdTester1] = useState(false);
  const [smallNav, setSmallNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
      }
      const element = document.getElementById("nav");
      const topCoordinate = element?.getBoundingClientRect().top;
      const OeeDashBoard = document.getElementById("oeeDashBoard");
      const topOeeDashBoard = OeeDashBoard?.getBoundingClientRect().top;
      const MonitorMachine = document.getElementById("monitorMachine");
      const topMonitorMachine = MonitorMachine?.getBoundingClientRect().top;
      const EsdTester = document.getElementById("esdTester");
      const topEsdTester = EsdTester?.getBoundingClientRect().top;

      if (topCoordinate && topCoordinate < 0) {
        setIsSticky(true);
      }
      if (topCoordinate && topCoordinate < -20) {
        setIsFixed(true);
      }
      if (topCoordinate && topCoordinate > -20) {
        setIsFixed(false);
      }
      if (topCoordinate && topCoordinate > 0) {
        setIsSticky(false);
      }
      if (topOeeDashBoard && topOeeDashBoard < 10) {
        setoeeDashBoard(true);
        setmonitorMachine(false);
        setEsdTester(false);
      }
      if (topMonitorMachine && topMonitorMachine < 10) {
        setoeeDashBoard(false);
        setmonitorMachine(true);
        setEsdTester(false);
      }
      if (topEsdTester && topEsdTester < 10) {
        setoeeDashBoard(false);
        setmonitorMachine(false);
        setEsdTester(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="nav"
      className={`absolute h-[100px] z-[6] transition ease-in duration-150 ${
        isSticky ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-[100%] ${
          isFixed ? "fixed" : "sticky"
        }  py-2 bg-black shadow-gray-700 shadow-md top-0`}
      >
        <div className="w-full mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative">
          <div className="flex flex-row text-md justify-start space-x-2 max-lg:w-full flex-auto lg:space-x-4 text-white">
            
            <a
              href="#oeeDashBoard"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setOeeDashBoard1(true)}
              onMouseLeave={() => setOeeDashBoard1(false)}
              className={` max-lg:pt-2  ${
                oeeDashBoard1 ? "lg:text-blue-500" : ""
              }  ${
                oeeDashBoard || smallNav
                  ? "lg:text-blue-500 max-lg:pb-6"
                  : "max-lg:hidden"
              } `}
            >
              OEE DashBoard{" "}
              <div
                className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-200 ${
                  oeeDashBoard1 ? "scale-100 bg-blue-500" : ""
                } ${oeeDashBoard ? "scale-100 bg-blue-500" : ""}`}
              ></div>
            </a>
            <a
              href="#monitorMachine"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setMonitorMachine1(true)}
              onMouseLeave={() => setMonitorMachine1(false)}
              className={` max-lg:pt-2 ${
                monitorMachine1 ? "lg:text-blue-500" : ""
              } ${
                monitorMachine || smallNav
                  ? "lg:text-blue-500 max-lg:pb-6"
                  : "max-lg:hidden"
              } `}
            >
              MonitorMachine
              <div
                className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${
                  monitorMachine1 ? "scale-100 bg-blue-500" : ""
                } ${monitorMachine ? "scale-100 bg-blue-500" : ""}`}
              ></div>
            </a>
            <a
              href="#esdTester"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setEsdTester1(true)}
              onMouseLeave={() => setEsdTester1(false)}
              className={` max-lg:pt-2 ${security1 ? "lg:text-blue-500" : ""} ${
                security || smallNav ? "lg:text-blue-500 " : "max-lg:hidden"
              } `}
            >
              ESD Tester
              <div
                className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${
                  security1 ? "scale-100 bg-blue-500" : ""
                } ${security ? "scale-100 bg-blue-500" : ""}`}
              ></div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
