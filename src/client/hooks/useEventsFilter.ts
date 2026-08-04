import { useMemo, useState } from "react";
import type { Event, EventCategoryFilter, EventFilters, EventRegionFilter, EventTimeframe } from "@/types/event.types";
import { filterEvents } from "@/client/components/events/event-utils";

export const DEFAULT_EVENT_FILTERS: EventFilters = {
  search: "",
  category: "All Events",
  region: "All Locations",
  timeframe: "upcoming",
};

export interface UseEventsFilterResult {
  filters: EventFilters;
  filteredEvents: Event[];
  setSearch: (search: string) => void;
  setCategory: (category: EventCategoryFilter) => void;
  setRegion: (region: EventRegionFilter) => void;
  setTimeframe: (timeframe: EventTimeframe) => void;
}

/**
 * Manages the Events Archive filter bar's state and derives the
 * currently-matching events. `initialFilters` lets a server-rendered
 * deep link (e.g. the "Past Events" section's "View Archive" link,
 * which sets `?timeframe=past`) seed the starting selection.
 *
 * The actual filtering logic lives in the pure, framework-free
 * `filterEvents` — this hook is just the `useState`/`useMemo` binding
 * layer around it, matching the state/logic split already used by
 * `useContactForm`/`useNewsletterSignup`.
 */
export function useEventsFilter(
  events: Event[],
  initialFilters: Partial<EventFilters> = {},
): UseEventsFilterResult {
  const [filters, setFilters] = useState<EventFilters>({
    ...DEFAULT_EVENT_FILTERS,
    ...initialFilters,
  });

  const filteredEvents = useMemo(() => filterEvents(events, filters), [events, filters]);

  return {
    filters,
    filteredEvents,
    setSearch: (search) => setFilters((current) => ({ ...current, search })),
    setCategory: (category) => setFilters((current) => ({ ...current, category })),
    setRegion: (region) => setFilters((current) => ({ ...current, region })),
    setTimeframe: (timeframe) => setFilters((current) => ({ ...current, timeframe })),
  };
}
