import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the 3 revised column headings", () => {
    render(<Footer />);

    expect(screen.getByRole("heading", { name: "Be Part of the Movement" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Stay Connected" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Follow Us" })).toBeInTheDocument();
  });

  it("points Apply for Membership at the placeholder href", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Apply for Membership" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("renders the newsletter form", () => {
    render(<Footer />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });

  it("renders exactly Instagram, LinkedIn, and Mail social links (no Facebook)", () => {
    render(<Footer />);

    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Us")).toHaveAttribute("href", "/contact");
    expect(screen.queryByLabelText("Facebook")).not.toBeInTheDocument();
  });

  it("renders the updated copyright and legal links in the bottom bar", () => {
    render(<Footer />);

    expect(
      screen.getByText("© 2026 Caribbean Event Society. All Rights Reserved."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Terms of Use" })).toBeInTheDocument();
  });
});
