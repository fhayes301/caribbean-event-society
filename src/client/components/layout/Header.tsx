import Link from "next/link";
import { Container } from "@/client/components/ui/Container";
import { SunIcon } from "./icons";
import MobileNav from "./MobileNav";
import { HEADER_NAV_LINKS } from "./nav-links";

export default function Header() {
  return (
    <header className="w-full border-b border-stone bg-ivory">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
          <Link href="/" className="group flex items-center gap-2 py-2">
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl uppercase tracking-wide text-charcoal transition-colors group-hover:text-gold sm:text-2xl">
                Caribbean
              </span>
              <span className="font-display text-xl uppercase tracking-wide text-charcoal transition-colors group-hover:text-gold sm:text-2xl">
                Event Society
              </span>
              <span className="mt-1.5 font-body text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Elevate. Connect. Transform.
              </span>
            </div>
            <SunIcon className="hidden h-5 w-5 shrink-0 text-gold sm:block" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {HEADER_NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="font-body text-sm font-medium uppercase tracking-wide text-charcoal transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="#"
            className="hidden shrink-0 items-center justify-center rounded-full bg-forest px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-ivory transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Apply for Membership
          </Link>

          <MobileNav links={HEADER_NAV_LINKS} />
        </div>
      </Container>
    </header>
  );
}
