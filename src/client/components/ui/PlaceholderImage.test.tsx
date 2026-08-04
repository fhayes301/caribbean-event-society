import { render, screen } from "@testing-library/react";
import { PlaceholderImage } from "./PlaceholderImage";

describe("PlaceholderImage", () => {
  it("renders the given label", () => {
    render(<PlaceholderImage label="Hero background photo" />);

    expect(screen.getByText("Hero background photo")).toBeInTheDocument();
  });

  it("applies rounded-full only when shape=circle", () => {
    const { container: rectContainer } = render(<PlaceholderImage label="rect" />);
    expect(rectContainer.firstChild).not.toHaveClass("rounded-full");

    const { container: circleContainer } = render(
      <PlaceholderImage label="circle" shape="circle" />,
    );
    expect(circleContainer.firstChild).toHaveClass("rounded-full");
  });
});
