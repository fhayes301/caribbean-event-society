import FoundingDirectors from "@/client/components/home/FoundingDirectors";
import Hero from "@/client/components/home/Hero";
import Mission from "@/client/components/home/Mission";
import PitchSection from "@/client/components/home/PitchSection";
import Resources from "@/client/components/home/Resources";
import UpcomingEvents from "@/client/components/home/UpcomingEvents";

/**
 * The CES marketing homepage. A thin composition root — every section
 * owns its own layout, styling, and data.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <PitchSection />
      <UpcomingEvents />
      <Resources />
      <FoundingDirectors />
    </>
  );
}
