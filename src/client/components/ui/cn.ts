/**
 * Joins conditional Tailwind class fragments, skipping falsy values.
 * A minimal stand-in for `clsx` — no className-merging dependency exists
 * in this repo, and every `ui/` primitive is designed so consumers only
 * ever add new utility kinds via `className` rather than override a base
 * one, so nothing here needs conflict resolution (unlike `tailwind-merge`).
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
