"use client";
import { useSectionInView } from '@/lib/useInView';
import React from 'react'
import Image from "next/image";
import OTPForm from '@/components/otpForm';

type Props = {}

const Blessing = (props: Props) => {
  const { ref } = useSectionInView("#blessing", 0.5);
  return (
    <section
      ref={ref}
      id="blessing"
      className="mb-28 max-w-[74rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div>
          <div>
            <Image
              src="/blessing.jpg"
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
      <OTPForm/>
    </section>
  );
}

export default Blessing