import { act, renderHook } from "@testing-library/react";
import type { Event } from "@/types/event.types";
import { useEventsFilter } from "./useEventsFilter";

const EVENTS: Event[] = [
  {
    id: "upcoming-conference",
    slug: "upcoming-conference",
    title: "Design With Purpose",
    category: "Conference",
    description: "A forum on intentional design.",
    date: "2030-03-14",
    location: "Grand Riviere, Trinidad & Tobago",
    region: "Trinidad & Tobago",
  },
  {
    id: "past-networking",
    slug: "past-networking",
    title: "Diaspora Welcome Reception",
    category: "Networking",
    description: "A networking evening in Miami.",
    date: "2020-02-14",
    location: "Miami, US",
    region: "US",
  },
];

describe("useEventsFilter", () => {
  it("defaults to the upcoming timeframe with no other filters applied", () => {
    const { result } = renderHook(() => useEventsFilter(EVENTS));

    expect(result.current.filters).toEqual({
      search: "",
      category: "All Events",
      region: "All Locations",
      timeframe: "upcoming",
    });
    expect(result.current.filteredEvents.map((event) => event.slug)).toEqual(["upcoming-conference"]);
  });

  it("accepts a partial initial filter override", () => {
    const { result } = renderHook(() => useEventsFilter(EVENTS, { timeframe: "past" }));

    expect(result.current.filteredEvents.map((event) => event.slug)).toEqual(["past-networking"]);
  });

  it("re-derives filteredEvents when setSearch narrows the results", () => {
    const { result } = renderHook(() => useEventsFilter(EVENTS, { timeframe: "past" }));

    act(() => result.current.setSearch("miami"));
    expect(result.current.filteredEvents).toHaveLength(1);

    act(() => result.current.setSearch("nonexistent"));
    expect(result.current.filteredEvents).toHaveLength(0);
  });

  it("re-derives filteredEvents when setCategory/setRegion/setTimeframe change", () => {
    const { result } = renderHook(() => useEventsFilter(EVENTS, { timeframe: "past" }));

    act(() => result.current.setCategory("Conference"));
    expect(result.current.filteredEvents).toHaveLength(0);

    act(() => result.current.setCategory("All Events"));
    act(() => result.current.setRegion("Trinidad & Tobago"));
    expect(result.current.filteredEvents).toHaveLength(0);

    act(() => result.current.setRegion("All Locations"));
    act(() => result.current.setTimeframe("upcoming"));
    expect(result.current.filteredEvents.map((event) => event.slug)).toEqual(["upcoming-conference"]);
  });
});
