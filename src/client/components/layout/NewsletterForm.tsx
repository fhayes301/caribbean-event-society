"use client";

import { useId, type FormEvent } from "react";
import { Button } from "@/client/components/ui/Button";
import { cn } from "@/client/components/ui/cn";
import { useNewsletterSignup } from "@/client/hooks/useNewsletterSignup";

export interface NewsletterFormProps {
  /** Which surface this form sits on. `"light"` (default) matches the
   *  Footer's `bg-ivory` column; `"dark"` keeps input text/success copy
   *  legible on a `bg-forest` surface, e.g. the Contact page's CTA band. */
  tone?: "light" | "dark";
}

const TONE_CLASSES = {
  light: {
    input: "border-stone text-charcoal placeholder:text-taupe",
    success: "text-charcoal",
  },
  dark: {
    input: "border-ivory/30 text-ivory placeholder:text-ivory/60",
    success: "text-ivory",
  },
} as const;

/**
 * The "Stay Connected" email signup form. Uncontrolled (reads the email
 * via `FormData` on submit) — no redundant input `useState`.
 */
export default function NewsletterForm({ tone = "light" }: NewsletterFormProps) {
  const { status, errorMessage, submit, reset } = useNewsletterSignup();
  const inputId = useId();
  const toneClasses = TONE_CLASSES[tone];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    await submit(email);
  };

  if (status === "success") {
    return (
      <p role="status" className={cn("font-body text-sm", toneClasses.success)}>
        Thanks for signing up — you&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-0"
    >
      <div className="flex-1">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          placeholder="Your email address"
          required
          maxLength={254}
          autoComplete="email"
          inputMode="email"
          onChange={() => {
            if (status === "error") reset();
          }}
          className={cn(
            "w-full border bg-transparent px-4 py-3 font-body text-sm focus:border-gold focus:outline-none",
            toneClasses.input,
          )}
        />
        {status === "error" && errorMessage && (
          <p role="alert" className="mt-2 font-body text-xs text-gold">
            {errorMessage}
          </p>
        )}
      </div>
      <Button type="submit" variant="dark" disabled={status === "submitting"}>
        {status === "submitting" ? "Signing Up…" : "Sign Up"}
      </Button>
    </form>
  );
}
