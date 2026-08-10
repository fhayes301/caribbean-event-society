import Link from "next/link";
import { Container } from "@/client/components/ui/Container";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { cn } from "@/client/components/ui/cn";
import { ArrowRightIcon } from "@/client/components/layout/icons";
import { HERO_ACTIONS } from "./hero-actions";

const HERO_BACKGROUND_IMAGE_URL = "/images/hero.jpg";

const TONE_CLASSES = {
  dark: "border-ivory/30 bg-forest text-ivory",
  light: "border-stone bg-ivory text-charcoal",
} as const;

/** The homepage's full-bleed hero banner — the page's single `<h1>`. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_BACKGROUND_IMAGE_URL}
          alt=""
          fallbackLabel="Hero background photo of a Caribbean coastal scene"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/85 via-charcoal/55 to-charcoal/10" />
      </div>

      <Container className="relative flex max-w-7xl flex-col justify-center py-14 sm:min-h-[45vh] sm:py-20 md:py-28">
        <h1 className="max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-6xl">
          Advancing Excellence in the Caribbean Event Industry
        </h1>
        <p className="mt-6 max-w-xl font-body text-base text-ivory/90 sm:text-lg">
          Caribbean Event Society is a professional membership organization dedicated to
          connecting, supporting, and elevating event professionals throughout the Caribbean and
          its diaspora.
        </p>

        <div className="mt-10 grid gap-4 sm:max-w-xl sm:grid-cols-2">
          {HERO_ACTIONS.map((action) => (
            <Link
              key={action.id}
              href={action.href}
              className={cn(
                "group flex items-start gap-4 border p-6 transition-opacity hover:opacity-90",
                TONE_CLASSES[action.tone],
              )}
            >
              <action.Icon className="h-9 w-9 shrink-0" />
              <span className="flex flex-col gap-2">
                <span className="font-body text-sm font-semibold uppercase tracking-wide">
                  {action.label}
                </span>
                <span className="flex items-center gap-2 font-body text-sm opacity-80">
                  {action.description}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
