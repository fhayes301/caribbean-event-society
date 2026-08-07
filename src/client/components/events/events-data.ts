import type { Event } from "@/types/event.types";
import { compareEventsByDate, isUpcomingEvent } from "./event-utils";

/**
 * Mock event catalog for the public site. There's no admin UI to create
 * or manage events yet (that's the Phase 4 admin curation layer), so
 * this is placeholder data — not a database or API call. Every getter
 * below is `async` and returns exactly the shape a future `GET
 * /api/events` response (or direct Prisma query) will, so swapping this
 * module's internals for a real data source later requires no change to
 * any consuming component.
 */
const MOCK_EVENTS: Event[] = [
  {
    id: "founders-launch",
    slug: "founders-launch",
    title: "The Founders' Launch",
    category: "Founding Events",
    description: "The very first gathering of Caribbean Event Society's founding members.",
    date: "2026-01-20",
    location: "Port of Spain, Trinidad & Tobago",
    region: "Trinidad & Tobago",
    imageUrl: "/images/events/founders-launch.jpg",
  },
  {
    id: "welcome-reception",
    slug: "welcome-reception",
    title: "Diaspora Welcome Reception",
    category: "Networking",
    description: "An evening reconnecting Caribbean event professionals across the diaspora.",
    date: "2026-02-14",
    location: "Miami, US",
    region: "US",
    imageUrl: "/images/events/welcome-reception.jpg",
  },
  {
    id: "member-welcome-mixer",
    slug: "member-welcome-mixer",
    title: "Member Welcome Mixer",
    category: "Member Events",
    description:
      "A relaxed evening welcoming our newest members into the Caribbean Event Society community.",
    date: "2026-03-02",
    location: "Bridgetown, Barbados",
    region: "Caribbean",
    imageUrl: "/images/events/member-welcome-mixer.jpg",
  },
  {
    id: "industry-insights",
    slug: "industry-insights",
    title: "Industry Insights",
    category: "Professional Development",
    description: "Conversations with leaders shaping the future of our industry.",
    date: "2026-09-11",
    location: "Miami, US",
    region: "US",
    imageUrl: "/images/events/industry-insights.jpg",
  },
  {
    id: "founding-circle",
    slug: "founding-circle",
    title: "The Founding Circle",
    category: "Founding Events",
    description: "An invitation-only evening for industry leaders and changemakers.",
    date: "2026-08-15",
    location: "Port of Spain, Trinidad & Tobago",
    region: "Trinidad & Tobago",
    imageUrl: "/images/events/founding-circle.jpg",
  },
  {
    id: "caribbean-connections-mixer",
    slug: "caribbean-connections-mixer",
    title: "Caribbean Connections Mixer",
    category: "Networking",
    description: "An evening of connection for event professionals across the region.",
    date: "2026-11-05",
    location: "Kingston, Jamaica",
    region: "Caribbean",
    imageUrl: "/images/events/caribbean-connections-mixer.jpg",
  },
  {
    id: "founding-dinner",
    slug: "founding-dinner",
    title: "Founding Dinner",
    category: "Founding Events",
    description: "An intimate gathering celebrating the launch of Caribbean Event Society.",
    date: "2026-10-17",
    location: "Port of Spain, Trinidad & Tobago",
    region: "Trinidad & Tobago",
    imageUrl: "/images/events/founding-dinner.jpg",
  },
  {
    id: "design-with-purpose",
    slug: "design-with-purpose",
    title: "Design With Purpose",
    category: "Conference",
    description:
      "A flagship gathering of event professionals from across the Caribbean and its diaspora, created for those who believe our region deserves stronger connections, greater visibility, and world-class opportunities.",
    date: "2027-03-14",
    endDate: "2027-03-16",
    location: "Grand Riviere, Trinidad & Tobago",
    region: "Trinidad & Tobago",
    imageUrl: "/images/events/design-with-purpose.jpg",
    isFeatured: true,
    registrationUrl: "https://example.com/register/design-with-purpose",
  },
];

/** Returns the full event catalog. */
export async function getEvents(): Promise<Event[]> {
  return MOCK_EVENTS;
}

/**
 * Returns the events featured in the homepage's "Upcoming Events"
 * section: the soonest `limit` events whose date hasn't passed yet.
 * `referenceIsoDate` defaults to today and exists only so tests can pin
 * a fixed "now" instead of depending on the real wall clock.
 */
export async function getUpcomingEvents(limit = 3, referenceIsoDate?: string): Promise<Event[]> {
  return MOCK_EVENTS.filter((event) => isUpcomingEvent(event, referenceIsoDate))
    .sort(compareEventsByDate)
    .slice(0, limit);
}

/** Returns past events, most recent first, for the Events Archive's "Past Events" filter. */
export async function getPastEvents(referenceIsoDate?: string): Promise<Event[]> {
  return MOCK_EVENTS.filter((event) => !isUpcomingEvent(event, referenceIsoDate)).sort((a, b) =>
    compareEventsByDate(b, a),
  );
}

/** Returns the single event marked `isFeatured`, if any. */
export async function getFeaturedEvent(): Promise<Event | undefined> {
  return MOCK_EVENTS.find((event) => event.isFeatured);
}

/** Looks up a single event by its slug, for the Event Detail page. */
export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  return MOCK_EVENTS.find((event) => event.slug === slug);
}

/**
 * Returns up to `limit` other events for the Event Detail page's "More
 * Events" section, excluding the current event and preferring upcoming
 * events over past ones.
 */
export async function getRelatedEvents(
  currentSlug: string,
  limit = 3,
  referenceIsoDate?: string,
): Promise<Event[]> {
  const others = MOCK_EVENTS.filter((event) => event.slug !== currentSlug);
  const upcoming = others.filter((event) => isUpcomingEvent(event, referenceIsoDate)).sort(compareEventsByDate);
  const past = others
    .filter((event) => !isUpcomingEvent(event, referenceIsoDate))
    .sort((a, b) => compareEventsByDate(b, a));

  return [...upcoming, ...past].slice(0, limit);
}
