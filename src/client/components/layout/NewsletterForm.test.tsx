import { render, screen } from "@testing-library/react";
import NewsletterForm from "./NewsletterForm";

describe("NewsletterForm", () => {
  it("renders the email input and sign up button by default", () => {
    render(<NewsletterForm />);

    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });

  it("applies dark-surface styling for tone=\"dark\"", () => {
    render(<NewsletterForm tone="dark" />);

    expect(screen.getByLabelText("Email address")).toHaveClass("text-ivory");
  });

  it("applies light-surface styling by default", () => {
    render(<NewsletterForm />);

    expect(screen.getByLabelText("Email address")).toHaveClass("text-charcoal");
  });
});
