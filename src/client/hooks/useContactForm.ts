import { useCallback, useRef, useState } from "react";
import type {
  ContactFormStatus,
  ContactFormValues,
  ContactSubmissionResult,
} from "@/types/contact.types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOCK_SUBMIT_DELAY_MS = 600;

export interface UseContactFormResult {
  status: ContactFormStatus;
  errorMessage: string | null;
  submit: (values: ContactFormValues) => Promise<void>;
  reset: () => void;
}

function validate(values: ContactFormValues): string | null {
  if (
    !values.firstName.trim() ||
    !values.lastName.trim() ||
    !values.subject.trim() ||
    !values.message.trim()
  ) {
    return "Please fill in all fields.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

async function mockSubmitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmissionResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: `Message from ${values.email} sent.` });
    }, MOCK_SUBMIT_DELAY_MS);
  });
}

/**
 * Manages the contact form's async lifecycle: validates the fields
 * client-side, then calls a mocked submission request.
 *
 * When a real submission endpoint exists, only `mockSubmitContactForm`'s
 * internals need to change — ideally to a Next.js Server Action, which
 * fits this hook's `submit(values): Promise<void>` signature with no
 * rework. The returned shape is unaffected either way.
 */
export function useContactForm(): UseContactFormResult {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const generationRef = useRef(0);
  const isSubmittingRef = useRef(false);

  const submit = useCallback(async (values: ContactFormValues) => {
    if (isSubmittingRef.current) return;

    const validationError = validate(values);
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    isSubmittingRef.current = true;
    const generation = ++generationRef.current;
    setStatus("submitting");
    setErrorMessage(null);

    const result = await mockSubmitContactForm(values);

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
