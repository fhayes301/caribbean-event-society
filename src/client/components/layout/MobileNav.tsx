"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "./icons";
import type { NavLink } from "./nav-links";

interface MobileNavProps {
  links: NavLink[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center text-charcoal transition-colors hover:text-gold"
      >
        {isOpen ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <HamburgerIcon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-16 z-40 border-b border-stone bg-ivory px-6 py-8"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-6">
              {links.map((link, index) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    onClick={() => setIsOpen(false)}
                    className="font-body block text-lg uppercase tracking-wide text-charcoal transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-forest px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-ivory transition-opacity hover:opacity-90"
          >
            Apply for Membership
          </Link>
        </div>
      )}
    </div>
  );
}
