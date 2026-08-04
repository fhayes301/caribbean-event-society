import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import EventPreviewCard from "@/client/components/events/EventPreviewCard";
import { getUpcomingEvents } from "@/client/components/events/events-data";

/**
 * The "Upcoming Events" section. An async Server Component that awaits
 * `getUpcomingEvents()` directly during render — the same shape a real
 * data source (Prisma/`GET /api/events`) will use, so no client-side
 * fetching or extra client JS is needed for this section.
 */
export default async function UpcomingEvents() {
  const events = await getUpcomingEvents();

  return (
    <section className="bg-white py-5 md:py-5">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_3fr_1fr] sm:items-end">
          <div aria-hidden="true" className="hidden sm:block" />
          <div className="text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              UPCOMING EVENTS
            </p>
            <h2 className="mt-2 font-display text-4xl text-charcoal">
              Coming Together to Create Impact
            </h2>
          </div>
          <CtaLink href="/events" tone="forest" className="justify-self-center sm:justify-self-end">
            View All Events
          </CtaLink>
        </div>

        <div className="mt-2 grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <EventPreviewCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
