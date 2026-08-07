import type { Event, EventFilters } from "@/types/event.types";

const MONTH_ABBREVIATIONS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface EventDateParts {
  month: string;
  day: string;
  year: string;
}

interface ParsedIsoDate {
  year: string;
  month: string;
  day: string;
}

/**
 * Splits an ISO date string (e.g. "2026-10-03") into its parts without
 * ever constructing a `Date`. `new Date("2026-10-03")` parses as UTC
 * midnight, which renders as the previous day in any timezone behind
 * UTC — the entire Caribbean is UTC-4 — so this sidesteps that off-by-one
 * entirely.
 */
function parseIsoDate(isoDate: string): ParsedIsoDate {
  const [year, month, day] = isoDate.split("-");
  return { year, month, day };
}

/**
 * Splits an event's date(s) into the compact parts `EventPreviewCard`'s
 * date badge renders. For multi-day events that stay within one
 * month/year, `day` becomes a range (e.g. "14–16"); a multi-day event
 * spanning months falls back to the start day only — the badge is too
 * small to render a full cross-month range legibly, and that detail is
 * fully spelled out via `formatEventDateRange` on the Featured/Detail
 * pages instead.
 */
export function formatEventDateParts(event: Pick<Event, "date" | "endDate">): EventDateParts {
  const start = parseIsoDate(event.date);
  const month = MONTH_ABBREVIATIONS[Number(start.month) - 1];

  if (!event.endDate) {
    return { month, day: start.day, year: start.year };
  }

  const end = parseIsoDate(event.endDate);
  const isSameMonthAndYear = start.year === end.year && start.month === end.month;
  const day = isSameMonthAndYear ? `${Number(start.day)}–${Number(end.day)}` : start.day;

  return { month, day, year: start.year };
}

/**
 * Formats an event's date(s) as a full human-readable string, e.g.
 * "14–16 March 2027" for a multi-day event or "3 October 2026" for a
 * single-day one — used on the Featured Event section and the Event
 * Detail page, where there's room to spell the range out in full.
 */
export function formatEventDateRange(event: Pick<Event, "date" | "endDate">): string {
  const start = parseIsoDate(event.date);
  const startMonthName = MONTH_NAMES[Number(start.month) - 1];

  if (!event.endDate) {
    return `${Number(start.day)} ${startMonthName} ${start.year}`;
  }

  const end = parseIsoDate(event.endDate);
  const isSameMonthAndYear = start.year === end.year && start.month === end.month;
  if (isSameMonthAndYear) {
    return `${Number(start.day)}–${Number(end.day)} ${startMonthName} ${start.year}`;
  }

  const endMonthName = MONTH_NAMES[Number(end.month) - 1];
  const sameYear = start.year === end.year;
  const startLabel = `${Number(start.day)} ${startMonthName}${sameYear ? "" : ` ${start.year}`}`;
  return `${startLabel} – ${Number(end.day)} ${endMonthName} ${end.year}`;
}

/** Builds the path to an event's detail page from its slug. */
export function getEventHref(event: Pick<Event, "slug">): string {
  return `/events/${event.slug}`;
}

/**
 * Whether an event's effective date (its `endDate` if set, otherwise
 * `date`) is on or after `referenceIsoDate`. Comparing raw ISO strings
 * (rather than constructing `Date`s) avoids the same timezone pitfall
 * `formatEventDateParts` sidesteps, and accepting the reference date as a
 * plain string keeps this — and everything built on it — deterministic
 * to unit test without relying on the real wall clock.
 */
export function isUpcomingEvent(
  event: Pick<Event, "date" | "endDate">,
  referenceIsoDate: string = new Date().toISOString().slice(0, 10),
): boolean {
  const effectiveDate = event.endDate ?? event.date;
  return effectiveDate >= referenceIsoDate;
}

/**
 * Applies the Events Archive filter bar's current selections to a list
 * of events. `referenceIsoDate` is exposed only so callers (tests, the
 * timeframe-aware data getters) can pin "today" — production call sites
 * can omit it and get the real current date.
 */
export function filterEvents(
  events: Event[],
  filters: EventFilters,
  referenceIsoDate?: string,
): Event[] {
  const query = filters.search.trim().toLowerCase();

  return events.filter((event) => {
    const matchesSearch =
      query.length === 0 ||
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query);
    const matchesCategory = filters.category === "All Events" || event.category === filters.category;
    const matchesRegion = filters.region === "All Locations" || event.region === filters.region;
    const isUpcoming = isUpcomingEvent(event, referenceIsoDate);
    const matchesTimeframe = filters.timeframe === "upcoming" ? isUpcoming : !isUpcoming;

    return matchesSearch && matchesCategory && matchesRegion && matchesTimeframe;
  });
}

/** Sorts events by their effective date (`endDate` if set, otherwise `date`), ascending. */
export function compareEventsByDate(a: Event, b: Event): number {
  const aDate = a.endDate ?? a.date;
  const bDate = b.endDate ?? b.date;
  return aDate.localeCompare(bDate);
}

export interface EventRegistrationLink {
  href: string;
  label: string;
  isExternal: boolean;
}

const REGISTRATION_INTEREST_EMAIL = "hello@caribbeaneventsociety.com";

/**
 * The registration CTA's destination and label. Events with a real
 * `registrationUrl` (e.g. Eventbrite) link out to it directly; events
 * without one — every mock event today — fall back to a prefilled
 * mailto, consistent with how other not-yet-built flows in this app
 * (e.g. "Apply for Membership") degrade to a placeholder rather than a
 * dead link.
 */
export function getEventRegistrationLink(
  event: Pick<Event, "title" | "registrationUrl">,
): EventRegistrationLink {
  if (event.registrationUrl) {
    return { href: event.registrationUrl, label: "Register Now", isExternal: true };
  }

  const subject = encodeURIComponent(`Registration Interest: ${event.title}`);
  return {
    href: `mailto:${REGISTRATION_INTEREST_EMAIL}?subject=${subject}`,
    label: "Register Interest",
    isExternal: false,
  };
}
