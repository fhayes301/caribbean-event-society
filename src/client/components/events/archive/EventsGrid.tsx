import type { Event } from "@/types/event.types";
import EventPreviewCard from "@/client/components/events/EventPreviewCard";

export interface EventsGridProps {
  events: Event[];
}

/** The Events Archive's 3-column (1-column on mobile) results grid. */
export default function EventsGrid({ events }: EventsGridProps) {
  if (events.length === 0) {
    return (
      <p className="mt-12 text-center font-body text-base text-taupe">
        No events match your filters. Try adjusting your search or filters.
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {events.map((event) => (
        <EventPreviewCard key={event.id} event={event} />
      ))}
    </div>
  );
}
