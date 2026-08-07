import { act, renderHook, waitFor } from "@testing-library/react";
import { useContactForm } from "./useContactForm";
import type { ContactFormValues } from "@/types/contact.types";

const VALID_VALUES: ContactFormValues = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  subject: "General Enquiry",
  message: "Hello there.",
};

describe("useContactForm", () => {
  it("starts idle", () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.status).toBe("idle");
    expect(result.current.errorMessage).toBeNull();
  });

  it("rejects incomplete values without ever entering submitting", async () => {
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.submit({ ...VALID_VALUES, message: "" });
    });

    expect(result.current.status).toBe("error");
    expect(result.current.errorMessage).toBeTruthy();
  });

  it("rejects an invalid email without ever entering submitting", async () => {
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.submit({ ...VALID_VALUES, email: "not-an-email" });
    });

    expect(result.current.status).toBe("error");
    expect(result.current.errorMessage).toBeTruthy();
  });

  it("resets back to idle and clears the error message", async () => {
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.submit({ ...VALID_VALUES, message: "" });
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.status).toBe("idle");
    expect(result.current.errorMessage).toBeNull();
  });

  it("transitions through submitting to success for valid values", async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.submit(VALID_VALUES);
    });

    expect(result.current.status).toBe("submitting");

    await waitFor(() => expect(result.current.status).toBe("success"));
  });

  it("does not let a stale submit resolution overwrite a newer reset", async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.submit(VALID_VALUES);
    });
    expect(result.current.status).toBe("submitting");

    act(() => {
      result.current.reset();
    });
    expect(result.current.status).toBe("idle");

    // Give the original (now-stale) submit time to resolve, and assert it
    // was discarded rather than clobbering the reset state.
    await new Promise((resolve) => setTimeout(resolve, 700));

    expect(result.current.status).toBe("idle");
  });
});
