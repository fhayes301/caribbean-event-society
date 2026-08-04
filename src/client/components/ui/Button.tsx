import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

const BASE_BUTTON_CLASSES =
  "inline-flex items-center justify-center px-8 py-3 font-body text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50";

export const SOLID_BUTTON_CLASSES = cn(BASE_BUTTON_CLASSES, "rounded-full bg-gold text-charcoal");

const DARK_BUTTON_CLASSES = cn(BASE_BUTTON_CLASSES, "bg-charcoal text-ivory");

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  /** `"gold"` (default) is the site's standard solid CTA. `"dark"` is for
   *  gold-on-forest contexts where gold would collide with a nearby gold
   *  accent (e.g. the footer's newsletter button sitting near gold links). */
  variant?: "gold" | "dark";
};

/**
 * A native `<button>` styled with the site's solid CTA treatment.
 *
 * Defaults `type` to `"button"` rather than relying on the native HTML
 * default of `"submit"` — a real footgun once this primitive gets reused
 * inside other forms (e.g. the future login/register/contact forms) for
 * a non-submit purpose.
 */
export function Button({ type = "button", variant = "gold", className, ...props }: ButtonProps) {
  const variantClasses = variant === "dark" ? DARK_BUTTON_CLASSES : SOLID_BUTTON_CLASSES;
  return <button type={type} className={cn(variantClasses, className)} {...props} />;
}
