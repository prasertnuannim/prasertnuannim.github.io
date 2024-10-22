"use client";
import { useActiveSectionContext } from "@/containers/active-section";
import { useSectionInView } from "../lib/useInView";
import Image from "next/image";
import React from "react";

export default function intro  () {
  const { ref } = useSectionInView("#home", 0.5);
  //const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[74rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div>
          <div>
            <Image
              src="/boy.png"
              width="480"
              height="480"
              alt="photo"
              quality="100"
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
      <h1 className="mb-10 mt-5 text-4xl sm:text-6xl">
        <span className="font-medium !leading-[1.5]">Hello</span>
        <p className="text-[32px]">Front dend is fukk servier </p>
      </h1>
    </section>
  );
};

