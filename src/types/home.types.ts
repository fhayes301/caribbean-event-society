import type { ComponentType, SVGProps } from "react";

/** One tile in the homepage's "Resources" strip. */
export interface ResourceHighlight {
  id: string;
  label: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

/** A founding director profile shown in the "Meet Our Founding Directors" section. */
export interface FoundingDirector {
  id: string;
  name: string;
  title: string;
  /**
   * Public path the real headshot will be uploaded to (e.g.
   * "/images/directors/jaael-shebioba.jpg"). The file doesn't exist yet —
   * `PersonCard` falls back to a placeholder until it's uploaded, so
   * dropping the file at this exact path is all that's needed later.
   */
  photoUrl?: string;
  /** One-line bio. Only rendered where `PersonCard`'s `showBio` is set
   *  (e.g. the About page's team section) — the homepage's compact grid
   *  ignores it. */
  bio?: string;
  /** Instagram profile URL, rendered as an icon link alongside `bio`. */
  instagramUrl?: string;
}

/** Shared content shape for the mirrored Membership/Directory pitch cards. */
export interface PitchCardContent {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  /** Also doubles as the placeholder image's label until real photography exists. */
  imageAlt: string;
  /**
   * Public path the real photo will be uploaded to. Doesn't exist yet —
   * `PitchCard` falls back to a placeholder until it's uploaded.
   */
  imageUrl: string;
  /** Whether this card renders on the dark (forest) or light (linen) surface. */
  tone: "dark" | "light";
}

/** One of the hero section's two composite CTA cards. */
export interface HeroAction {
  id: string;
  label: string;
  description: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Whether this card renders as a solid dark (forest) or light (ivory) card. */
  tone: "dark" | "light";
}
