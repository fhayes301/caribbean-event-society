import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";

const EVENTS_HERO_IMAGE_URL = "/images/events/design-with-purpose.jpg";

/** The Events Archive page's full-bleed hero banner — the page's single `<h1>`. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={EVENTS_HERO_IMAGE_URL}
          alt=""
          fallbackLabel="Hero photo of a Caribbean Event Society gathering"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/85 via-charcoal/55 to-charcoal/10" />
      </div>

      <Container className="relative flex max-w-7xl flex-col justify-center py-14 sm:min-h-[45vh] sm:py-20 md:py-28">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
          EVENTS
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-ivory md:text-6xl">
          Coming Together to Create Impact
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-ivory/90">
          Explore networking gatherings, professional development experiences, industry
          conversations, and signature Caribbean Event Society events designed to strengthen
          connections and advance the Caribbean event industry.
        </p>
        <CtaLink href="#browse-events" variant="solid" className="mt-8">
          View Upcoming Events
        </CtaLink>
      </Container>
    </section>
  );
}
