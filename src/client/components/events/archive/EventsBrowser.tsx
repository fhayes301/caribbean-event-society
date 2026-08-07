"use client";

import type { Event, EventTimeframe } from "@/types/event.types";
import { Container } from "@/client/components/ui/Container";
import { useEventsFilter } from "@/client/hooks/useEventsFilter";
import EventFilterBar from "./EventFilterBar";
import EventsGrid from "./EventsGrid";

export interface EventsBrowserProps {
  events: Event[];
  /** Seeds the filter bar's Date control — set from the page's `?timeframe`
   *  search param so the "Past Events" section's "View Archive" link can
   *  deep-link straight into the past-events view. */
  initialTimeframe: EventTimeframe;
}

/**
 * The Events Archive's interactive filter bar + results grid. The one
 * client boundary on the page — `EventsPage` fetches `events` server-side
 * and passes it down; all filtering happens locally via `useEventsFilter`.
 */
export default function EventsBrowser({ events, initialTimeframe }: EventsBrowserProps) {
  const { filters, filteredEvents, setSearch, setCategory, setRegion, setTimeframe } =
    useEventsFilter(events, { timeframe: initialTimeframe });

  return (
    <section id="browse-events" className="border-b border-stone bg-white py-16 md:py-20">
      <Container className="max-w-7xl">
        <EventFilterBar
          filters={filters}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onRegionChange={setRegion}
          onTimeframeChange={setTimeframe}
        />
        <EventsGrid events={filteredEvents} />
      </Container>
    </section>
  );
}
