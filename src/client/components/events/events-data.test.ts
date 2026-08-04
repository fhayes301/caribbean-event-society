import {
  getEventBySlug,
  getEvents,
  getFeaturedEvent,
  getPastEvents,
  getRelatedEvents,
  getUpcomingEvents,
} from "./events-data";

const REFERENCE = "2026-07-29";

describe("getEvents", () => {
  it("resolves the full mock catalog", async () => {
    const events = await getEvents();

    expect(events.length).toBeGreaterThan(0);
  });
});

describe("getUpcomingEvents", () => {
  it("returns only future events, sorted ascending, limited to 3 by default", async () => {
    const events = await getUpcomingEvents(3, REFERENCE);

    expect(events.map((event) => event.slug)).toEqual([
      "founding-circle",
      "industry-insights",
      "founding-dinner",
    ]);
  });

  it("respects a custom limit", async () => {
    const events = await getUpcomingEvents(2, REFERENCE);

    expect(events).toHaveLength(2);
  });
});

describe("getPastEvents", () => {
  it("returns only past events, sorted most-recent-first", async () => {
    const events = await getPastEvents(REFERENCE);

    expect(events.map((event) => event.slug)).toEqual([
      "member-welcome-mixer",
      "welcome-reception",
      "founders-launch",
    ]);
  });
});

describe("getFeaturedEvent", () => {
  it("finds the single isFeatured event", async () => {
    const event = await getFeaturedEvent();

    expect(event?.slug).toBe("design-with-purpose");
  });
});

describe("getEventBySlug", () => {
  it("finds an event by slug", async () => {
    const event = await getEventBySlug("founding-circle");

    expect(event?.title).toBe("The Founding Circle");
  });

  it("returns undefined for an unknown slug", async () => {
    const event = await getEventBySlug("does-not-exist");

    expect(event).toBeUndefined();
  });
});

describe("getRelatedEvents", () => {
  it("excludes the current event and prefers upcoming events first", async () => {
    const events = await getRelatedEvents("founding-circle", 3, REFERENCE);

    expect(events.map((event) => event.slug)).toEqual([
      "industry-insights",
      "founding-dinner",
      "caribbean-connections-mixer",
    ]);
  });

  it("fills remaining slots with past events, most-recent-first, once upcoming events run out", async () => {
    const events = await getRelatedEvents("design-with-purpose", 8, REFERENCE);

    expect(events.map((event) => event.slug)).toEqual([
      "founding-circle",
      "industry-insights",
      "founding-dinner",
      "caribbean-connections-mixer",
      "member-welcome-mixer",
      "welcome-reception",
      "founders-launch",
    ]);
  });
});
