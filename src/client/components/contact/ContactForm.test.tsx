import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";

function fillValidForm() {
  fireEvent.change(screen.getByPlaceholderText("First Name"), {
    target: { value: "Jane" },
  });
  fireEvent.change(screen.getByPlaceholderText("Last Name"), {
    target: { value: "Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email Address"), {
    target: { value: "jane@example.com" },
  });
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "General Enquiry" },
  });
  fireEvent.change(screen.getByPlaceholderText("How can we help you?"), {
    target: { value: "Hello there." },
  });
}

describe("ContactForm", () => {
  it("submits successfully with valid values", async () => {
    render(<ContactForm />);

    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();

    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
    expect(
      screen.getByText(/we aim to respond within 2–3 business days/i),
    ).toBeInTheDocument();
  });

  it("renders the expected form fields", () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("How can we help you?")).toBeInTheDocument();
  });
});
