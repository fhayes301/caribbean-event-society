/** Lifecycle status of the newsletter signup form. */
export type NewsletterSignupStatus = "idle" | "submitting" | "success" | "error";

/** Shape of a (currently mocked) newsletter subscription request's result. */
export interface NewsletterSignupResult {
  success: boolean;
  message: string;
}
