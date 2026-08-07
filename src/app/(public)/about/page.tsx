import type { Metadata } from "next";
import FoundingDirectors from "@/client/components/about/FoundingDirectors";
import Hero from "@/client/components/about/Hero";
import Mission from "@/client/components/about/Mission";
import OurStory from "@/client/components/about/OurStory";
import Vision from "@/client/components/about/Vision";
import WhyWeExist from "@/client/components/about/WhyWeExist";

export const metadata: Metadata = {
  title: "About | Caribbean Event Society",
  description:
    "Elevating the Caribbean event industry through connection, collaboration, and professional excellence.",
};

/**
 * The CES About page. A thin composition root — every section owns its
 * own layout, styling, and data.
 */
export default function AboutPage() {
  return (
    <>
      <Hero />
      <OurStory />
      <Mission />
      <Vision />
      <WhyWeExist />
      <FoundingDirectors />
    </>
  );
}
