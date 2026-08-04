"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { ArrowRightIcon } from "@/client/components/layout/icons";
import { SOLID_BUTTON_CLASSES } from "./Button";
import { cn } from "./cn";

export interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: "text" | "solid";
  /** Which surface this link sits on — controls text color for `variant="text"`. */
  tone?: "light" | "dark" | "forest";
  className?: string;
  /**
   * Prevents the default anchor navigation. Used for `href="#"` links that
   * point at a destination this task introduces ahead of it existing (e.g.
   * "Apply for Membership"), so clicking them doesn't jump-scroll the page
   * to the top.
   */
  disablePlaceholderNav?: boolean;
  /** Hides the trailing arrow on the "text" variant — for plain inline
   *  links (e.g. Footer's legal links) that shouldn't read as a CTA. */
  showIcon?: boolean;
  /** Opens the link in a new tab with `rel="noopener noreferrer"` — for
   *  links to destinations outside this site (e.g. an event's external
   *  registration page). */
  external?: boolean;
}

const TEXT_LINK_BASE_CLASSES =
  "inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-75";

const TEXT_LINK_TONE_CLASSES: Record<NonNullable<CtaLinkProps["tone"]>, string> = {
  light: "text-gold",
  dark: "text-ivory",
  forest: "text-forest",
};

/**
 * A call-to-action link, rendered as plain text with a trailing arrow or
 * as a solid button.
 *
 * Both variants use opacity-based hover rather than a color swap, since
 * this component renders on both light sections and dark (`bg-forest`)
 * surfaces — the Membership pitch card and the Footer — where a
 * `hover:text-forest`-style treatment would become invisible.
 */
export function CtaLink({
  href,
  children,
  variant = "text",
  tone = "light",
  className,
  disablePlaceholderNav = false,
  showIcon = true,
  external = false,
}: CtaLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disablePlaceholderNav) {
      event.preventDefault();
    }
  };

  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (variant === "solid") {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={cn(SOLID_BUTTON_CLASSES, className)}
        {...externalProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(TEXT_LINK_BASE_CLASSES, TEXT_LINK_TONE_CLASSES[tone], className)}
      {...externalProps}
    >
      {children}
      {showIcon && <ArrowRightIcon className="h-4 w-4" />}
    </Link>
  );
}
