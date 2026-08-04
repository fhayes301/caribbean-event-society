import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("defaults to type=button", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole("button", { name: "Click me" })).toHaveAttribute("type", "button");
  });

  it("respects an explicit type=submit", () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit");
  });
});
