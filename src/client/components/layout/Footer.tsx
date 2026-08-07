import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { InstagramIcon, LinkedInIcon, MailIcon, PeopleIcon } from "./icons";
import NewsletterForm from "./NewsletterForm";
import type { NavLink } from "./nav-links";

// Reuses the same placeholder photo as the Hero — rendered as its own
// fixed-width panel on the left edge, fading into the footer's ivory
// background rather than bleeding across the whole section.
const FOOTER_BACKGROUND_IMAGE_URL = "/images/hero.jpg";

type SocialLink = NavLink & {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "#", Icon: InstagramIcon },
  { id: "linkedin", label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { id: "mail", label: "Email Us", href: "/contact", Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ivory text-charcoal">
      <div className="flex flex-col lg:flex-row">
        <div className="relative hidden shrink-0 overflow-hidden lg:block lg:w-80">
          <ImageWithFallback
            src={FOOTER_BACKGROUND_IMAGE_URL}
            alt=""
            fallbackLabel="Decorative palm foliage photo"
            fill
            sizes="320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-ivory/70 to-ivory" />
        </div>

        <div className="flex-1 px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest/30 text-forest">
                    <PeopleIcon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-lg uppercase tracking-wide text-charcoal">
                    Be Part of the Movement
                  </h2>
                </div>
                <p className="mt-6 font-body text-sm text-taupe">
                  Membership is designed for event professionals who are committed to excellence,
                  collaboration, and the continued growth of the Caribbean event industry.
                </p>
                <CtaLink href="#" tone="forest" disablePlaceholderNav className="mt-6">
                  Apply for Membership
                </CtaLink>
              </div>

              <div>
                <h2 className="font-display text-lg uppercase tracking-wide text-charcoal">
                  Stay Connected
                </h2>
                <p className="mt-6 font-body text-sm text-taupe">
                  Be the first to hear about membership opportunities, industry events,
                  professional resources, and updates from Caribbean Event Society.
                </p>
                <div className="mt-6">
                  <NewsletterForm />
                </div>
              </div>

              <div>
                <h2 className="font-display text-lg uppercase tracking-wide text-charcoal">
                  Follow Us
                </h2>
                <ul className="mt-6 flex items-center gap-5">
                  {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                    <li key={id}>
                      <Link
                        href={href}
                        aria-label={label}
                        className="text-taupe transition-colors hover:text-gold"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-forest text-ivory">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <p className="font-display text-base uppercase leading-tight tracking-wide text-ivory">
            Caribbean
            <br />
            Event Society
          </p>
          <p className="font-body text-xs text-ivory/70">
            © 2026 Caribbean Event Society. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <CtaLink
              href="#"
              disablePlaceholderNav
              showIcon={false}
              className="font-body text-xs normal-case tracking-normal text-ivory/70"
            >
              Privacy Policy
            </CtaLink>
            <CtaLink
              href="#"
              disablePlaceholderNav
              showIcon={false}
              className="font-body text-xs normal-case tracking-normal text-ivory/70"
            >
              Terms of Use
            </CtaLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
