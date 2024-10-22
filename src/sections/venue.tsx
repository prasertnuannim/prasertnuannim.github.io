"use client";

import dynamic from 'next/dynamic';
import Map from '@/components/map';
import { useSectionInView } from '@/lib/useInView';

const MapComponent = dynamic(() => import('@/components/map'), {
  ssr: false, // Prevent server-side rendering for Google Maps
});

export default function Venue() {
  const { ref } = useSectionInView("#venue", 0.5);

  return (
    <section
      ref={ref}
      id="venue"
      className="mb-28 max-w-[74rem] sm:mb-0"
    >
    <div>
      <Map />
    </div>
    </section>
  );
}