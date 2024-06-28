"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClieck = () => {
    setIsOpen(!isOpen);
  };
  const CustomLink = ({ href, title, className = "" }: any) => {
    const pathname = usePathname();
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}

        <span
          className={`h-[2px] inline-block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${
            pathname === href ? "w-full  bg-gradient-to-r from-black to-yellow-300" : "w-0"
          }    dark:bg-light`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const CustomMobileLink = ({ href, title, className = "", toggle }: any) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClieck = () => {
      toggle();
      router.push(href);
    };
    return (
      <a href={href} className={`${className} relative group text-light my-2`} onClick={handleClieck}>
        {title}

        <span
          className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${
            pathname === href ? "w-full" : "w-0"
          }    dark:bg-light`}
        >
          &nbsp;
        </span>
      </a>
    );
  };

  return (
    <header className="w-full bg-white px-32 py-8 font-mediun flex items-center justify-between z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClieck}
      >
        <span
          className={`bg-dark  translate-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark translate-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? " opacity-0" : " opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block translate-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>

      </button>

      <div className="w-full flex justify-between items-center lg:hidden ">
        <nav className="inline-block font-bold">
          <CustomLink href="/" title="Home" className="mr-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-violet-500" />
          <CustomLink href="/about" title="About" className="mx-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-green-500" />
          <CustomLink href="/projects" title="Projects" className="mx-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500" />
          {/* <CustomLink href="/demo" title="Demo" className="mx-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-500" /> */}
        </nav>
      </div>

      {isOpen ? (
        <motion.div 
        initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
        animate={{scale:1, opacity:1}}
        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32">
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClieck}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClieck}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="mx-4"
              toggle={handleClieck}
            />

          {/* <CustomMobileLink
              href="/scroll"
              title="Demo"
              className="mx-4"
              toggle={handleClieck}
            /> */}

          </nav>
        </motion.div>
      ) : null}

      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div> */}
    </header>
  );
};

export default NavBar;
