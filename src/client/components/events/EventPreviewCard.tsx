import Link from "next/link";
import type { Event } from "@/types/event.types";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { PlaceholderImage } from "@/client/components/ui/PlaceholderImage";
import { cn } from "@/client/components/ui/cn";
import { ArrowRightIcon, MapPinIcon } from "@/client/components/layout/icons";
import { formatEventDateParts, getEventHref } from "./event-utils";

export interface EventPreviewCardProps {
  event: Event;
  className?: string;
}

/**
 * A single event preview card, used by both the homepage's "Upcoming
 * Events" section and the Events Archive grid. `event` is exactly the
 * shape a future `GET /api/events` response item will have, so swapping
 * the mock data source for a real one requires no change to this
 * component.
 */
export default function EventPreviewCard({ event, className }: EventPreviewCardProps) {
  const { month, day, year } = formatEventDateParts(event);

  return (
    <Link
      href={getEventHref(event)}
      className={cn("group block overflow-hidden rounded-2xl bg-ivory shadow-sm", className)}
    >
      <div className="relative aspect-4/3 w-full">
        {event.imageUrl ? (
          <ImageWithFallback
            src={event.imageUrl}
            alt={`${event.title} event photo`}
            fallbackLabel={`${event.title} event photo`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <PlaceholderImage label={`${event.title} event photo`} className="h-full w-full" />
        )}
        <div className="absolute left-4 top-4 flex flex-col items-center bg-charcoal px-3 py-2 text-center leading-none text-ivory shadow-sm">
          <span className="font-body text-xs font-semibold uppercase tracking-wide">{month}</span>
          <span className="font-display text-xl">{day}</span>
          <span className="font-body text-xs text-ivory/70">{year}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
          {event.category}
        </p>
        <h3 className="mt-1 font-display text-xl text-charcoal transition-colors group-hover:text-forest">
          {event.title}
        </h3>
        <p className="mt-2 font-body text-sm text-taupe">{event.description}</p>
        <p className="mt-4 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-taupe">
          <MapPinIcon className="h-3.5 w-3.5 shrink-0" />
          {event.location}
        </p>
        <p className="mt-4 flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wide text-forest">
          View Event
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
