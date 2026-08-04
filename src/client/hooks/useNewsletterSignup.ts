import { useCallback, useRef, useState } from "react";
import type {
  NewsletterSignupResult,
  NewsletterSignupStatus,
} from "@/types/newsletter.types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOCK_SUBSCRIBE_DELAY_MS = 600;

export interface UseNewsletterSignupResult {
  status: NewsletterSignupStatus;
  errorMessage: string | null;
  submit: (email: string) => Promise<void>;
  reset: () => void;
}

async function mockSubscribe(email: string): Promise<NewsletterSignupResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: `Subscribed ${email} to the mailing list.` });
    }, MOCK_SUBSCRIBE_DELAY_MS);
  });
}

/**
 * Manages the newsletter signup form's async lifecycle: validates the
 * email client-side, then calls a mocked subscription request.
 *
 * When a real subscription endpoint exists, only `mockSubscribe`'s
 * internals need to change — ideally to a Next.js Server Action, which
 * fits this hook's `submit(email): Promise<void>` signature with no
 * rework. The returned shape is unaffected either way.
 */
export function useNewsletterSignup(): UseNewsletterSignupResult {
  const [status, setStatus] = useState<NewsletterSignupStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const generationRef = useRef(0);
  const isSubmittingRef = useRef(false);

  const submit = useCallback(async (email: string) => {
    if (isSubmittingRef.current) return;

    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    isSubmittingRef.current = true;
    const generation = ++generationRef.current;
    setStatus("submitting");
    setErrorMessage(null);

    const result = await mockSubscribe(trimmedEmail);

    isSubmittingRef.current = false;
    // A newer submit() or reset() has happened since this one started —
    // don't let this stale resolution overwrite more recent state.
    if (generationRef.current !== generation) return;

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.message);
    }
  }, []);

  const reset = useCallback(() => {
    generationRef.current += 1;
    isSubmittingRef.current = false;
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  return { status, errorMessage, submit, reset };
}
