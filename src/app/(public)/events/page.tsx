import type { Metadata } from "next";
import FeaturedEvent from "@/client/components/events/archive/FeaturedEvent";
import EventsBrowser from "@/client/components/events/archive/EventsBrowser";
import Hero from "@/client/components/events/archive/Hero";
import Newsletter from "@/client/components/events/archive/Newsletter";
import PastEvents from "@/client/components/events/archive/PastEvents";
import { getEvents, getFeaturedEvent } from "@/client/components/events/events-data";

export const metadata: Metadata = {
  title: "Events | Caribbean Event Society",
  description:
    "Explore networking gatherings, professional development experiences, industry conversations, and signature Caribbean Event Society events.",
};

interface EventsPageProps {
  searchParams: Promise<{ timeframe?: string }>;
}

/**
 * The Events Archive page. A thin composition root — every section owns
 * its own layout, styling, and data — plus a `searchParams` read so the
 * "Past Events" section's "View Archive" link can deep-link into
 * `EventsBrowser`'s filter state via `?timeframe=past`.
 */
export default async function EventsPage({ searchParams }: EventsPageProps) {
  const { timeframe } = await searchParams;
  const [events, featuredEvent] = await Promise.all([getEvents(), getFeaturedEvent()]);
  const browsableEvents = events.filter((event) => event.id !== featuredEvent?.id);

  return (
    <>
      <Hero />
      {featuredEvent && <FeaturedEvent event={featuredEvent} />}
      <EventsBrowser
        events={browsableEvents}
        initialTimeframe={timeframe === "past" ? "past" : "upcoming"}
      />
      <PastEvents />
      <Newsletter />
    </>
  );
}
