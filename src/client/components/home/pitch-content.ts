import type { PitchCardContent } from "@/types/home.types";

export const PITCH_CARDS: PitchCardContent[] = [
  {
    id: "membership",
    eyebrow: "FOR PROFESSIONALS",
    headline: "Grow. Connect. Lead.",
    body: "Access exclusive resources, professional development opportunities, industry insights, networking events, and leadership initiatives designed to help your business thrive.",
    ctaLabel: "Explore Membership",
    ctaHref: "#",
    imageAlt: "Event professionals collaborating together",
    imageUrl: "/images/membership-pitch.jpg",
    tone: "dark",
  },
  {
    id: "directory",
    eyebrow: "FIND A PROFESSIONAL",
    headline: "Discover Trusted Event Professionals",
    body: "Search our directory of vetted professionals across every discipline in the event industry serving Trinidad & Tobago, Guyana, Grenada, and destinations across the Caribbean.",
    ctaLabel: "Browse Directory",
    ctaHref: "/directory",
    imageAlt: "An elegant event table setting",
    imageUrl: "/images/directory-pitch.jpg",
    tone: "light",
  },
];
