import { render, screen } from "@testing-library/react";
import type { Event } from "@/types/event.types";
import EventsGrid from "./EventsGrid";

const EVENTS: Event[] = [
  {
    id: "founding-circle",
    slug: "founding-circle",
    title: "The Founding Circle",
    category: "Founding Events",
    description: "An invitation-only evening.",
    date: "2026-10-03",
    location: "Port of Spain, Trinidad & Tobago",
    region: "Trinidad & Tobago",
  },
  {
    id: "industry-insights",
    slug: "industry-insights",
    title: "Industry Insights",
    category: "Professional Development",
    description: "Conversations with industry leaders.",
    date: "2026-09-11",
    location: "Miami, US",
    region: "US",
  },
];

describe("EventsGrid", () => {
  it("renders a card for each event", () => {
    render(<EventsGrid events={EVENTS} />);

    expect(screen.getByText("The Founding Circle")).toBeInTheDocument();
    expect(screen.getByText("Industry Insights")).toBeInTheDocument();
  });

  it("renders an empty-state message when there are no events", () => {
    render(<EventsGrid events={[]} />);

    expect(screen.getByText(/no events match your filters/i)).toBeInTheDocument();
  });
});
