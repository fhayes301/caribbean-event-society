import { render, screen } from "@testing-library/react";
import EventPreviewCard from "./EventPreviewCard";
import type { Event } from "@/types/event.types";

const EVENT: Event = {
  id: "founding-circle",
  slug: "founding-circle",
  title: "The Founding Circle",
  category: "Founding Events",
  description: "An invitation-only evening for industry leaders and changemakers.",
  date: "2026-10-03",
  location: "Port of Spain, Trinidad",
  region: "Trinidad & Tobago",
};

describe("EventPreviewCard", () => {
  it("renders the category, title, description, and location from the event prop", () => {
    render(<EventPreviewCard event={EVENT} />);

    expect(screen.getByText("Founding Events")).toBeInTheDocument();
    expect(screen.getByText("The Founding Circle")).toBeInTheDocument();
    expect(
      screen.getByText("An invitation-only evening for industry leaders and changemakers."),
    ).toBeInTheDocument();
    expect(screen.getByText("Port of Spain, Trinidad")).toBeInTheDocument();
  });

  it("links to the event's detail page, derived from its slug", () => {
    render(<EventPreviewCard event={EVENT} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/events/founding-circle");
  });

  it("renders the correct date badge without a timezone off-by-one", () => {
    render(<EventPreviewCard event={EVENT} />);

    expect(screen.getByText("OCT")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("2026")).toBeInTheDocument();
  });

  it("renders a compact day range in the badge for a multi-day event", () => {
    render(
      <EventPreviewCard
        event={{ ...EVENT, date: "2027-03-14", endDate: "2027-03-16" }}
      />,
    );

    expect(screen.getByText("14–16")).toBeInTheDocument();
  });

  it("renders a 'View Event' affordance", () => {
    render(<EventPreviewCard event={EVENT} />);

    expect(screen.getByText("View Event")).toBeInTheDocument();
  });
});
