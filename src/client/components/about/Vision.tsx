import { Container } from "@/client/components/ui/Container";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { SectionHeading } from "@/client/components/ui/SectionHeading";

const VISION_IMAGE_URL = "/images/mt.plaisir_grounds.jpg";

/** The "Our Vision" statement alongside a photo. */
export default function Vision() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid max-w-7xl gap-6 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="OUR VISION"
            headline="To see a united Caribbean event industry recognised globally as a destination for world-class events, creativity, exceptional talent, and industry leadership."
          />
        </div>

        <div className="relative aspect-4/3 md:aspect-auto md:min-h-105">
          <ImageWithFallback
            src={VISION_IMAGE_URL}
            alt=""
            fallbackLabel="Photo of a Caribbean coastal sunset representing CES's vision"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
