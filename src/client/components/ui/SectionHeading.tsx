import { cn } from "./cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  /** Wired to the heading's id so a parent `<section>` can use
   *  `aria-labelledby` for an accessible section landmark name. */
  id?: string;
  className?: string;
  headlineClassName?: string;
}

/**
 * The eyebrow + headline pattern repeated across most homepage sections.
 *
 * Not used by the Hero section — the hero headline is the page's single
 * `<h1>` with bespoke markup, while this component always renders an
 * `<h2>`.
 */
export function SectionHeading({
  eyebrow,
  headline,
  id,
  className,
  headlineClassName,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={cn("mt-3 font-display text-3xl text-charcoal md:text-3xl", headlineClassName)}>
        {headline}
      </h2>
    </div>
  );
}
