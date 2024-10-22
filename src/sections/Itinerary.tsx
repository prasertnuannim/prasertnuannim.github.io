"use client";

import { useSectionInView } from "@/lib/useInView";
import React from "react";
import Image from "next/image";

type Props = {};

const Itinerary = (props: Props) => {
  
  const { ref } = useSectionInView("#itinerary", 0.5);

  return (
    <section
      ref={ref}
      id="itinerary"
      className="mb-28 max-w-[74rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div>
          <div>
            <Image
              src="/itinerary.jpg"
              width="480"
              height="480"
              alt="photo"
              quality="100"
              priority={true}
              className="shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
