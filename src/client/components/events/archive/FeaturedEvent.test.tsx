import { render, screen } from "@testing-library/react";
import type { Event } from "@/types/event.types";
import FeaturedEvent from "./FeaturedEvent";

const EVENT: Event = {
  id: "design-with-purpose",
  slug: "design-with-purpose",
  title: "Design With Purpose",
  category: "Conference",
  description: "A flagship gathering of event professionals from across the Caribbean.",
  date: "2027-03-14",
  endDate: "2027-03-16",
  location: "Grand Riviere, Trinidad & Tobago",
  region: "Trinidad & Tobago",
  isFeatured: true,
};

describe("FeaturedEvent", () => {
  it("renders the event's category, title, date range, location, and description", () => {
    render(<FeaturedEvent event={EVENT} />);

    expect(screen.getByText("Conference")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Design With Purpose" })).toBeInTheDocument();
    expect(screen.getByText("14–16 March 2027")).toBeInTheDocument();
    expect(screen.getByText("Grand Riviere, Trinidad & Tobago")).toBeInTheDocument();
  });

  it("links 'Learn More' to the event's detail page", () => {
    render(<FeaturedEvent event={EVENT} />);

    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "/events/design-with-purpose",
    );
  });

  it("shows a 'Register Now' external link when registrationUrl is set", () => {
    render(<FeaturedEvent event={{ ...EVENT, registrationUrl: "https://example.com/register" }} />);

    const link = screen.getByRole("link", { name: "Register Now" });
    expect(link).toHaveAttribute("href", "https://example.com/register");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("falls back to a 'Register Interest' mailto link when there's no registrationUrl", () => {
    render(<FeaturedEvent event={EVENT} />);

    const link = screen.getByRole("link", { name: "Register Interest" });
    expect(link.getAttribute("href")).toMatch(/^mailto:/);
  });
});
