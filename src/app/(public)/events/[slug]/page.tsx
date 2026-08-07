import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Body from "@/client/components/events/detail/Body";
import Hero from "@/client/components/events/detail/Hero";
import MoreEvents from "@/client/components/events/detail/MoreEvents";
import Newsletter from "@/client/components/events/archive/Newsletter";
import { getEventBySlug, getRelatedEvents } from "@/client/components/events/events-data";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return { title: "Event Not Found | Caribbean Event Society" };
  }

  return {
    title: `${event.title} | Caribbean Event Society`,
    description: event.description,
  };
}

/**
 * A single Event Detail page. A thin composition root — every section
 * owns its own layout, styling, and data — matching the About/Contact
 * pages' pattern, plus a `notFound()` guard for unmatched slugs.
 */
export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = await getRelatedEvents(event.slug);

  return (
    <>
      <Hero event={event} />
      <Body event={event} />
      <MoreEvents events={relatedEvents} />
      <Newsletter />
    </>
  );
}
