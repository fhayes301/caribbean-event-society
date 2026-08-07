import { Container } from "@/client/components/ui/Container";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";

const CONTACT_HERO_IMAGE_URL = "/images/contact_hero.jpg";

/** The Contact page's full-bleed hero banner — the page's single `<h1>`. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={CONTACT_HERO_IMAGE_URL}
          alt=""
          fallbackLabel="Hero photo of a porch overlooking the Caribbean coastline"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/85 via-charcoal/55 to-charcoal/10" />
      </div>

      <Container className="relative max-w-7xl py-20 md:py-28">
        <h1 className="max-w-2xl font-display text-4xl text-ivory md:text-6xl">
          Let&rsquo;s Connect. Let&rsquo;s Elevate the Industry, Together.
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-ivory/90">
          We would love to hear from you. Reach out, ask a question, or explore how we can work
          together to shape the future of the Caribbean event industry.
        </p>
      </Container>
    </section>
  );
}
