import type { ComponentType, SVGProps } from "react";

/** Lifecycle status of the contact form. */
export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

/** Values collected from the contact form on submit. */
export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

/** Shape of a (currently mocked) contact form submission's result. */
export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

/** An "Other Ways to Reach Us" list item. */
export interface ContactMethod {
  id: string;
  label: string;
  description: string;
  email: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
