import Blessing from "@/sections/blessing";
import Intro from "@/sections/intro";
import Invitations from "@/sections/invitations";
import Itinerary from "@/sections/Itinerary";
import Venue from "@/sections/venue";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-4xl pt-20 md:pt-28 px-4">
      <Invitations />
      <Itinerary/>
      <Blessing />
      <Venue/>
    </main>
  );
}
