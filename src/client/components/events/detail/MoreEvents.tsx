import type { Event } from "@/types/event.types";
import { Container } from "@/client/components/ui/Container";
import EventPreviewCard from "@/client/components/events/EventPreviewCard";

export interface MoreEventsProps {
  events: Event[];
}

/** The Event Detail page's "More Events" section, fed by `getRelatedEvents`. */
export default function MoreEvents({ events }: MoreEventsProps) {
  if (events.length === 0) {
    return null;
  }

  return (
    <section className="bg-linen py-16 md:py-20">
      <Container className="max-w-7xl">
        <h2 className="text-center font-display text-3xl text-charcoal">More Events</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <EventPreviewCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
