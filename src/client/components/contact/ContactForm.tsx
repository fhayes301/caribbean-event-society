"use client";

import { useId, type FormEvent } from "react";
import { Button } from "@/client/components/ui/Button";
import { FORM_FIELD_CLASSES } from "@/client/components/ui/formField";
import { useContactForm } from "@/client/hooks/useContactForm";
import { CONTACT_SUBJECT_OPTIONS } from "./contact-content";

/**
 * The "We're Here to Help" contact form. Uncontrolled (reads values via
 * `FormData` on submit) — no per-field `useState`, matching `NewsletterForm`.
 */
export default function ContactForm() {
  const { status, errorMessage, submit, reset } = useContactForm();
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await submit({
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    });
  };

  const clearErrorOnChange = () => {
    if (status === "error") reset();
  };

  if (status === "success") {
    return (
      <p role="status" className="font-body text-base text-charcoal">
        Thanks for reaching out — we aim to respond within 2–3 business days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} onChange={clearErrorOnChange} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={firstNameId} className="sr-only">
            First Name
          </label>
          <input
            id={firstNameId}
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            className={FORM_FIELD_CLASSES}
          />
        </div>
        <div>
          <label htmlFor={lastNameId} className="sr-only">
            Last Name
          </label>
          <input
            id={lastNameId}
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            className={FORM_FIELD_CLASSES}
          />
        </div>
      </div>

      <div>
        <label htmlFor={emailId} className="sr-only">
          Email Address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          placeholder="Email Address"
          required
          autoComplete="email"
          inputMode="email"
          className={FORM_FIELD_CLASSES}
        />
      </div>

      <div>
        <label htmlFor={subjectId} className="sr-only">
          Subject
        </label>
        <select id={subjectId} name="subject" required defaultValue="" className={FORM_FIELD_CLASSES}>
          <option value="" disabled>
            Subject
          </option>
          {CONTACT_SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={messageId} className="sr-only">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          placeholder="How can we help you?"
          required
          rows={5}
          className={FORM_FIELD_CLASSES}
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="font-body text-xs text-gold">
          {errorMessage}
        </p>
      )}

      <div>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </div>

      <p className="font-body text-xs text-taupe">We aim to respond within 2–3 business days.</p>
    </form>
  );
}
