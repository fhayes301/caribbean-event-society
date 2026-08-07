import { render, screen } from "@testing-library/react";
import { PersonCard } from "./PersonCard";

describe("PersonCard", () => {
  it("renders name and title without a photo", () => {
    render(<PersonCard name="Test Person" title="Test Title" />);

    expect(screen.getByText("Test Person")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("does not render bio or Instagram link by default, even if provided", () => {
    render(
      <PersonCard
        name="Test Person"
        title="Test Title"
        bio="A short bio."
        instagramUrl="https://www.instagram.com/test/"
      />,
    );

    expect(screen.queryByText("A short bio.")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Test Person on Instagram")).not.toBeInTheDocument();
  });

  it("renders bio and Instagram link when showBio is set", () => {
    render(
      <PersonCard
        name="Test Person"
        title="Test Title"
        bio="A short bio."
        instagramUrl="https://www.instagram.com/test/"
        showBio
      />,
    );

    expect(screen.getByText("A short bio.")).toBeInTheDocument();
    expect(screen.getByLabelText("Test Person on Instagram")).toHaveAttribute(
      "href",
      "https://www.instagram.com/test/",
    );
  });

  it("omits bio and Instagram link when showBio is set but the data is missing", () => {
    render(<PersonCard name="Test Person" title="Test Title" showBio />);

    expect(screen.queryByLabelText("Test Person on Instagram")).not.toBeInTheDocument();
  });
});
