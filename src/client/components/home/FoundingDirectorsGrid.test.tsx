import { render, screen, within } from "@testing-library/react";
import FoundingDirectorsGrid from "./FoundingDirectorsGrid";
import { FOUNDING_DIRECTORS } from "./founding-directors-content";

describe("FoundingDirectorsGrid", () => {
  it("renders all founding directors by default, each with their own title", () => {
    render(<FoundingDirectorsGrid />);

    // Scoped per-card, not a bare screen.getByText(title) — several real
    // directors share the identical "Founding Director..." title, so a
    // global text query would match more than one element and throw.
    for (const director of FOUNDING_DIRECTORS) {
      const nameEl = screen.getByText(director.name);
      const card = nameEl.parentElement as HTMLElement;
      expect(within(card).getByText(director.title)).toBeInTheDocument();
    }
  });

  it("renders a custom directors list when provided", () => {
    render(
      <FoundingDirectorsGrid
        directors={[{ id: "test-person", name: "Test Person", title: "Test Title" }]}
      />,
    );

    expect(screen.getByText("Test Person")).toBeInTheDocument();
    expect(screen.queryByText(FOUNDING_DIRECTORS[0].name)).not.toBeInTheDocument();
  });

  it("does not render bios by default, even though the data carries them", () => {
    render(<FoundingDirectorsGrid />);

    for (const director of FOUNDING_DIRECTORS) {
      if (director.bio) {
        expect(screen.queryByText(director.bio)).not.toBeInTheDocument();
      }
    }
  });

  it("renders each director's bio when showBios is set", () => {
    render(<FoundingDirectorsGrid showBios />);

    for (const director of FOUNDING_DIRECTORS) {
      if (director.bio) {
        expect(screen.getByText(director.bio)).toBeInTheDocument();
      }
    }
  });
});
