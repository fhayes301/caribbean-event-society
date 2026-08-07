import { Container } from "@/client/components/ui/Container";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { SectionHeading } from "@/client/components/ui/SectionHeading";

const VISIT_US_IMAGE_URL = "/images/mt.plaisir_grounds.jpg";

/** The "Visit Us" section — CES's Trinidad & Tobago roots alongside a photo. */
export default function VisitUs() {
  return (
    <section className="bg-linen py-16 md:py-20">
      <Container className="grid max-w-7xl gap-10 sm:grid-cols-2 sm:gap-12">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="VISIT US"
            headline="Rooted in Trinidad & Tobago. Connected to the Caribbean."
          />
          <p className="mt-6 font-body text-base text-taupe">
            CES is proudly based in Trinidad &amp; Tobago. Our work, our members, and our impact
            extend across the Caribbean and beyond.
          </p>
        </div>

        <div className="relative min-h-80 md:min-h-105">
          <ImageWithFallback
            src={VISIT_US_IMAGE_URL}
            alt=""
            fallbackLabel="Photo of the Mt Plaisir grounds signage"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
