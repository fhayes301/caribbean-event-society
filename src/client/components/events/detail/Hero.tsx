import type { Event } from "@/types/event.types";
import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { PlaceholderImage } from "@/client/components/ui/PlaceholderImage";
import { CalendarIcon, MapPinIcon } from "@/client/components/layout/icons";
import { formatEventDateRange, getEventRegistrationLink } from "../event-utils";

export interface HeroProps {
  event: Event;
}

/** The Event Detail page's full-bleed hero banner — the page's single `<h1>`. */
export default function Hero({ event }: HeroProps) {
  const registrationLink = getEventRegistrationLink(event);

  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        {event.imageUrl ? (
          <ImageWithFallback
            src={event.imageUrl}
            alt=""
            fallbackLabel={`${event.title} event photo`}
            fill
            priority
            sizes="100vw"
          />
        ) : (
          <PlaceholderImage label={`${event.title} event photo`} className="absolute inset-0 h-full w-full" />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/85 via-charcoal/55 to-charcoal/10" />
      </div>

      <Container className="relative max-w-7xl py-20 md:py-28">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
          {event.category}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-ivory md:text-6xl">
          {event.title}
        </h1>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <p className="flex items-center gap-2 font-body text-base text-ivory/90">
            <CalendarIcon className="h-5 w-5 shrink-0" />
            {formatEventDateRange(event)}
          </p>
          <p className="flex items-center gap-2 font-body text-base text-ivory/90">
            <MapPinIcon className="h-5 w-5 shrink-0" />
            {event.location}
          </p>
        </div>

        <CtaLink
          href={registrationLink.href}
          variant="solid"
          external={registrationLink.isExternal}
          className="mt-8"
        >
          {registrationLink.label}
        </CtaLink>
      </Container>
    </section>
  );
}
