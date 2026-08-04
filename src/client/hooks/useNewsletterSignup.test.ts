import { act, renderHook, waitFor } from "@testing-library/react";
import { useNewsletterSignup } from "./useNewsletterSignup";

describe("useNewsletterSignup", () => {
  it("starts idle", () => {
    const { result } = renderHook(() => useNewsletterSignup());

    expect(result.current.status).toBe("idle");
    expect(result.current.errorMessage).toBeNull();
  });

  it("rejects an invalid email without ever entering submitting", async () => {
    const { result } = renderHook(() => useNewsletterSignup());

    await act(async () => {
      await result.current.submit("not-an-email");
    });

    expect(result.current.status).toBe("error");
    expect(result.current.errorMessage).toBeTruthy();
  });

  it("resets back to idle and clears the error message", async () => {
    const { result } = renderHook(() => useNewsletterSignup());

    await act(async () => {
      await result.current.submit("not-an-email");
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.status).toBe("idle");
    expect(result.current.errorMessage).toBeNull();
  });

  it("transitions through submitting to success for a valid email", async () => {
    const { result } = renderHook(() => useNewsletterSignup());

    act(() => {
      result.current.submit("person@example.com");
    });

    expect(result.current.status).toBe("submitting");

    await waitFor(() => expect(result.current.status).toBe("success"));
  });

  it("does not let a stale submit resolution overwrite a newer reset", async () => {
    const { result } = renderHook(() => useNewsletterSignup());

    act(() => {
      result.current.submit("person@example.com");
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
