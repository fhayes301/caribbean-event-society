import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";

/**
 * The "Past Events & Highlights" teaser. "View Archive" deep-links back
 * into `EventsBrowser` with `?timeframe=past`, so the shared filter bar
 * becomes the past-events archive rather than duplicating the grid here.
 */
export default function PastEvents() {
  return (
    <section className="bg-linen py-16 md:py-20">
      <Container className="max-w-7xl text-center">
        <h2 className="font-display text-3xl text-charcoal">Past Events &amp; Highlights</h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-base text-taupe">
          A collection of previous gatherings, conversations, and milestones that continue to
          shape the future of Caribbean Event Society.
        </p>
        <CtaLink href="/events?timeframe=past#browse-events" tone="forest" className="mt-6">
          View Archive
        </CtaLink>
      </Container>
    </section>
  );
}
