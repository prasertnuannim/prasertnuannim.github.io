"use client";
import { useSectionInView } from '@/lib/useInView';
import React from 'react'
import Image from "next/image";
type Props = {}

const Invitations = (props: Props) => {
  const { ref } = useSectionInView("#invitations", 0.5);
  return (
    <section
      ref={ref}
      id="invitations"
      className="mb-28 max-w-[74rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div>
          <div>
            <Image
              src="/invitations.webp"
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


export default Invitations