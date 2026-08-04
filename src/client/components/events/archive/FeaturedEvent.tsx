import type { Event } from "@/types/event.types";
import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { PlaceholderImage } from "@/client/components/ui/PlaceholderImage";
import { MapPinIcon } from "@/client/components/layout/icons";
import { formatEventDateRange, getEventHref, getEventRegistrationLink } from "../event-utils";

export interface FeaturedEventProps {
  event: Event;
}

/**
 * The Events Archive's large horizontal Featured Event card: image left,
 * copy right. Renders the single event flagged `isFeatured` — callers
 * are responsible for excluding it from the browsable grid below.
 */
export default function FeaturedEvent({ event }: FeaturedEventProps) {
  const registrationLink = getEventRegistrationLink(event);

  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container className="grid max-w-7xl gap-10 md:grid-cols-2 md:gap-12">
        <div className="relative min-h-80 md:min-h-105">
          {event.imageUrl ? (
            <ImageWithFallback
              src={event.imageUrl}
              alt={`${event.title} event photo`}
              fallbackLabel={`${event.title} event photo`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <PlaceholderImage
              label={`${event.title} event photo`}
              className="absolute inset-0 h-full w-full"
            />
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            {event.category}
          </p>
          <h2 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">{event.title}</h2>
          <p className="mt-4 font-body text-sm uppercase tracking-wide text-taupe">
            {formatEventDateRange(event)}
          </p>
          <p className="mt-2 flex items-center gap-1.5 font-body text-sm text-taupe">
            <MapPinIcon className="h-4 w-4 shrink-0" />
            {event.location}
          </p>
          <p className="mt-6 font-body text-base text-taupe">{event.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <CtaLink href={getEventHref(event)} tone="forest">
              Learn More
            </CtaLink>
            <CtaLink
              href={registrationLink.href}
              variant="solid"
              external={registrationLink.isExternal}
            >
              {registrationLink.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
