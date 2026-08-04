import { fireEvent, render, screen } from "@testing-library/react";
import { ImageWithFallback } from "./ImageWithFallback";

describe("ImageWithFallback", () => {
  it("renders the image with the given src and alt", () => {
    render(
      <ImageWithFallback
        src="/images/hero.jpg"
        alt="Hero"
        fallbackLabel="Hero placeholder"
        width={100}
        height={100}
      />,
    );

    expect(screen.getByAltText("Hero")).toBeInTheDocument();
  });

  it("falls back to the placeholder when the image fails to load", () => {
    render(
      <ImageWithFallback
        src="/images/missing.jpg"
        alt="Missing"
        fallbackLabel="Missing placeholder"
        width={100}
        height={100}
      />,
    );

    fireEvent.error(screen.getByAltText("Missing"));

    expect(screen.getByText("Missing placeholder")).toBeInTheDocument();
    expect(screen.queryByAltText("Missing")).not.toBeInTheDocument();
  });
});
