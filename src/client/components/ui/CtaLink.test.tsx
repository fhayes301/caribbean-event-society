import { fireEvent, render, screen } from "@testing-library/react";
import { CtaLink } from "./CtaLink";
import { SOLID_BUTTON_CLASSES } from "./Button";

describe("CtaLink", () => {
  it("renders an accessible link with the given href and text", () => {
    render(<CtaLink href="/directory">Browse Directory</CtaLink>);

    const link = screen.getByRole("link", { name: /browse directory/i });
    expect(link).toHaveAttribute("href", "/directory");
  });

  it("applies the solid button classes for variant=solid", () => {
    render(
      <CtaLink href="#" variant="solid">
        Apply for Membership
      </CtaLink>,
    );

    const link = screen.getByRole("link", { name: "Apply for Membership" });
    for (const cls of SOLID_BUTTON_CLASSES.split(" ")) {
      expect(link).toHaveClass(cls);
    }
  });

  it("prevents default navigation when disablePlaceholderNav is set", () => {
    render(
      <CtaLink href="#" disablePlaceholderNav>
        Privacy Policy
      </CtaLink>,
    );

    const link = screen.getByRole("link", { name: /privacy policy/i });
    const event = fireEvent.click(link);

    // fireEvent.click returns false when preventDefault() was called
    expect(event).toBe(false);
  });

  it("defaults to gold text for the light tone", () => {
    render(<CtaLink href="/about">Learn More</CtaLink>);

    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toHaveClass("text-gold");
  });

  it("renders ivory text for tone=dark", () => {
    render(
      <CtaLink href="#" tone="dark">
        Explore Membership
      </CtaLink>,
    );

    const link = screen.getByRole("link", { name: /explore membership/i });
    expect(link).toHaveClass("text-ivory");
    expect(link).not.toHaveClass("text-gold");
  });

  it("renders forest text for tone=forest", () => {
    render(
      <CtaLink href="/events" tone="forest">
        View All Events
      </CtaLink>,
    );

    const link = screen.getByRole("link", { name: /view all events/i });
    expect(link).toHaveClass("text-forest");
    expect(link).not.toHaveClass("text-gold");
  });

  it("opens in a new tab with rel=noopener noreferrer when external", () => {
    render(
      <CtaLink href="https://example.com/register" external>
        Register Now
      </CtaLink>,
    );

    const link = screen.getByRole("link", { name: /register now/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("omits target/rel when external is not set", () => {
    render(<CtaLink href="/about">Learn More</CtaLink>);

    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });
});
