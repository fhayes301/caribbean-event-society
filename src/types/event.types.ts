/** The categories a real event can be tagged with (mirrors Prisma's `EventType` lookup table, flattened to a string union for Phase 1's mock data). */
export type EventCategory =
  | "Networking"
  | "Professional Development"
  | "Conference"
  | "Member Events"
  | "Founding Events";

/** `EventCategory` plus the Events Archive filter bar's "no filter" sentinel. */
export type EventCategoryFilter = "All Events" | EventCategory;

/** Coarse region an event belongs to, used by the Events Archive's Location filter. */
export type EventRegion = "Caribbean" | "Trinidad & Tobago" | "US";

/** `EventRegion` plus the Events Archive filter bar's "no filter" sentinel. */
export type EventRegionFilter = "All Locations" | EventRegion;

/** Whether an event is in the future or the past, relative to today. */
export type EventTimeframe = "upcoming" | "past";

/** The Events Archive filter bar's current selections. */
export interface EventFilters {
  search: string;
  category: EventCategoryFilter;
  region: EventRegionFilter;
  timeframe: EventTimeframe;
}

/**
 * A single event as surfaced on the public site. Shaped to match the
 * Prisma `Event` model / a future `GET /api/events` response so mock data
 * can be swapped for real data without changing any consuming component's
 * props.
 */
export interface Event {
  id: string;
  /** Unique, URL-safe identifier used to route to `/events/[slug]`. */
  slug: string;
  title: string;
  category: EventCategory;
  description: string;
  /** ISO 8601 start date (e.g. "2026-10-03"). Kept as a raw string, not
   *  pre-formatted, to mirror what a real API response would return. */
  date: string;
  /** ISO 8601 end date, for multi-day events. Omitted for single-day events. */
  endDate?: string;
  location: string;
  region: EventRegion;
  /**
   * Public path the real event photo will be uploaded to (e.g.
   * "/images/events/founding-circle.jpg"). The file doesn't exist yet —
   * `EventPreviewCard` falls back to a placeholder until it's uploaded.
   */
  imageUrl?: string;
  /** Marks the single event shown in the Events Archive's Featured Event section. */
  isFeatured?: boolean;
  /** External registration link (e.g. Eventbrite). When absent, registration
   *  CTAs fall back to a mailto link. */
  registrationUrl?: string;
}
