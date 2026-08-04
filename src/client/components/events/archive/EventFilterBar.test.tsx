import { fireEvent, render, screen } from "@testing-library/react";
import type { EventFilters } from "@/types/event.types";
import EventFilterBar from "./EventFilterBar";

const FILTERS: EventFilters = {
  search: "",
  category: "All Events",
  region: "All Locations",
  timeframe: "upcoming",
};

describe("EventFilterBar", () => {
  it("renders the search, event type, location, and date controls", () => {
    render(
      <EventFilterBar
        filters={FILTERS}
        onSearchChange={jest.fn()}
        onCategoryChange={jest.fn()}
        onRegionChange={jest.fn()}
        onTimeframeChange={jest.fn()}
      />,
    );

    expect(screen.getByPlaceholderText("Search Events")).toBeInTheDocument();
    expect(screen.getByLabelText("Event Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
  });

  it("calls onSearchChange as the user types", () => {
    const onSearchChange = jest.fn();
    render(
      <EventFilterBar
        filters={FILTERS}
        onSearchChange={onSearchChange}
        onCategoryChange={jest.fn()}
        onRegionChange={jest.fn()}
        onTimeframeChange={jest.fn()}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Search Events"), { target: { value: "mixer" } });
    expect(onSearchChange).toHaveBeenCalledWith("mixer");
  });

  it("calls onCategoryChange, onRegionChange, and onTimeframeChange on selection", () => {
    const onCategoryChange = jest.fn();
    const onRegionChange = jest.fn();
    const onTimeframeChange = jest.fn();
    render(
      <EventFilterBar
        filters={FILTERS}
        onSearchChange={jest.fn()}
        onCategoryChange={onCategoryChange}
        onRegionChange={onRegionChange}
        onTimeframeChange={onTimeframeChange}
      />,
    );

    fireEvent.change(screen.getByLabelText("Event Type"), { target: { value: "Conference" } });
    expect(onCategoryChange).toHaveBeenCalledWith("Conference");

    fireEvent.change(screen.getByLabelText("Location"), { target: { value: "Caribbean" } });
    expect(onRegionChange).toHaveBeenCalledWith("Caribbean");

    fireEvent.change(screen.getByLabelText("Date"), { target: { value: "past" } });
    expect(onTimeframeChange).toHaveBeenCalledWith("past");
  });
});
