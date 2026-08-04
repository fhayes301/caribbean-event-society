import type { Event, EventFilters } from "@/types/event.types";
import {
  compareEventsByDate,
  filterEvents,
  formatEventDateParts,
  formatEventDateRange,
  getEventHref,
  getEventRegistrationLink,
  isUpcomingEvent,
} from "./event-utils";

function buildEvent(overrides: Partial<Event> = {}): Event {
  return {
    id: "sample-event",
    slug: "sample-event",
    title: "Sample Event",
    category: "Networking",
    description: "A sample event used for testing.",
    date: "2026-10-03",
    location: "Port of Spain, Trinidad & Tobago",
    region: "Trinidad & Tobago",
    ...overrides,
  };
}

describe("formatEventDateParts", () => {
  it("splits a single-day ISO date without a timezone off-by-one", () => {
    expect(formatEventDateParts(buildEvent({ date: "2026-10-03" }))).toEqual({
      month: "OCT",
      day: "03",
      year: "2026",
    });
  });

  it("renders a compact day range for a multi-day event within the same month", () => {
    expect(
      formatEventDateParts(buildEvent({ date: "2027-03-14", endDate: "2027-03-16" })),
    ).toEqual({ month: "MAR", day: "14–16", year: "2027" });
  });

  it("falls back to the start day for a multi-day event spanning months", () => {
    expect(
      formatEventDateParts(buildEvent({ date: "2026-01-30", endDate: "2026-02-02" })),
    ).toEqual({ month: "JAN", day: "30", year: "2026" });
  });
});

describe("formatEventDateRange", () => {
  it("formats a single-day event", () => {
    expect(formatEventDateRange(buildEvent({ date: "2026-10-03" }))).toBe("3 October 2026");
  });

  it("formats a multi-day event within the same month", () => {
    expect(
      formatEventDateRange(buildEvent({ date: "2027-03-14", endDate: "2027-03-16" })),
    ).toBe("14–16 March 2027");
  });

  it("formats a multi-day event spanning months and years", () => {
    expect(
      formatEventDateRange(buildEvent({ date: "2026-12-30", endDate: "2027-01-02" })),
    ).toBe("30 December 2026 – 2 January 2027");
  });
});

describe("getEventHref", () => {
  it("builds the detail page path from the event's slug", () => {
    expect(getEventHref(buildEvent({ slug: "founding-circle" }))).toBe("/events/founding-circle");
  });
});

describe("isUpcomingEvent", () => {
  const REFERENCE = "2026-07-29";

  it("treats a future date as upcoming", () => {
    expect(isUpcomingEvent(buildEvent({ date: "2026-10-03" }), REFERENCE)).toBe(true);
  });

  it("treats a past date as not upcoming", () => {
    expect(isUpcomingEvent(buildEvent({ date: "2026-01-20" }), REFERENCE)).toBe(false);
  });

  it("treats the reference date itself as upcoming", () => {
    expect(isUpcomingEvent(buildEvent({ date: REFERENCE }), REFERENCE)).toBe(true);
  });

  it("uses endDate over date when both are present", () => {
    expect(
      isUpcomingEvent(buildEvent({ date: "2026-01-01", endDate: "2026-10-03" }), REFERENCE),
    ).toBe(true);
  });
});

describe("filterEvents", () => {
  const REFERENCE = "2026-07-29";
  const EVENTS: Event[] = [
    buildEvent({
      id: "1",
      title: "Design With Purpose",
      description: "A conference for creative professionals.",
      category: "Conference",
      region: "Trinidad & Tobago",
      date: "2027-03-14",
    }),
    buildEvent({
      id: "2",
      title: "Diaspora Welcome Reception",
      description: "A networking evening in Miami.",
      category: "Networking",
      region: "US",
      date: "2026-02-14",
    }),
  ];

  function withFilters(overrides: Partial<EventFilters>): EventFilters {
    return { search: "", category: "All Events", region: "All Locations", timeframe: "upcoming", ...overrides };
  }

  it("matches search against title and description, case-insensitively", () => {
    expect(filterEvents(EVENTS, withFilters({ search: "miami", timeframe: "past" }), REFERENCE)).toEqual([
      EVENTS[1],
    ]);
  });

  it("filters by category", () => {
    expect(
      filterEvents(EVENTS, withFilters({ category: "Conference" }), REFERENCE),
    ).toEqual([EVENTS[0]]);
  });

  it("filters by region", () => {
    expect(
      filterEvents(EVENTS, withFilters({ region: "US", timeframe: "past" }), REFERENCE),
    ).toEqual([EVENTS[1]]);
  });

  it("filters by timeframe", () => {
    expect(filterEvents(EVENTS, withFilters({ timeframe: "upcoming" }), REFERENCE)).toEqual([EVENTS[0]]);
    expect(filterEvents(EVENTS, withFilters({ timeframe: "past" }), REFERENCE)).toEqual([EVENTS[1]]);
  });
});

describe("compareEventsByDate", () => {
  it("sorts ascending by effective date", () => {
    const later = buildEvent({ id: "later", date: "2026-10-03" });
    const earlier = buildEvent({ id: "earlier", date: "2026-02-14" });

    expect([later, earlier].sort(compareEventsByDate)).toEqual([earlier, later]);
  });

  it("uses endDate as the effective date when present", () => {
    const endsLater = buildEvent({ id: "ends-later", date: "2026-01-01", endDate: "2026-12-31" });
    const endsEarlier = buildEvent({ id: "ends-earlier", date: "2026-02-01" });

    expect([endsLater, endsEarlier].sort(compareEventsByDate)).toEqual([endsEarlier, endsLater]);
  });
});

describe("getEventRegistrationLink", () => {
  it("links directly to an external registrationUrl when present", () => {
    expect(
      getEventRegistrationLink(
        buildEvent({ title: "Design With Purpose", registrationUrl: "https://example.com/register" }),
      ),
    ).toEqual({ href: "https://example.com/register", label: "Register Now", isExternal: true });
  });

  it("falls back to a prefilled mailto when there's no registrationUrl", () => {
    const link = getEventRegistrationLink(buildEvent({ title: "The Founding Circle" }));

    expect(link.isExternal).toBe(false);
    expect(link.label).toBe("Register Interest");
    expect(link.href).toBe(
      "mailto:hello@caribbeaneventsociety.com?subject=Registration%20Interest%3A%20The%20Founding%20Circle",
    );
  });
});
