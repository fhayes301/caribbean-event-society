import { Container } from "@/client/components/ui/Container";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";

const ABOUT_HERO_IMAGE_URL = "/images/about_hero.jpg";

/** The About page's full-bleed hero banner — the page's single `<h1>`. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={ABOUT_HERO_IMAGE_URL}
          alt=""
          fallbackLabel="Hero photo of a CES member overlooking the Caribbean coastline"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <Container className="relative flex min-h-80 max-w-7xl flex-col justify-center py-16 md:min-h-100 md:py-20">
        <h1 className="max-w-2xl font-display text-4xl text-charcoal md:text-6xl">About CES</h1>
        <p className="mt-6 max-w-xl font-body text-lg text-charcoal/90">
          Elevating the Caribbean event industry through connection, collaboration, and
          professional excellence.
        </p>
      </Container>
    </section>
  );
}
