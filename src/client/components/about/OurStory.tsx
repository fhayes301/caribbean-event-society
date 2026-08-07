"use client";

import Link from "next/link";
import { Container } from "@/client/components/ui/Container";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { SectionHeading } from "@/client/components/ui/SectionHeading";

const OUR_STORY_IMAGE_URL = "/images/carved_artwork.jpg";

/** The "Our Story" section — CES's founding narrative alongside a photo. */
export default function OurStory() {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container className="grid max-w-7xl gap-6 md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeading
            eyebrow="OUR STORY"
            headline="Rooted in the Caribbean. Created for Impact."
          />
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-body text-base text-taupe">
              The Caribbean is home to extraordinary creative talent, remarkable hospitality, and
              world-class event professionals. Yet many of us have built our businesses in
              isolation, with limited opportunities to connect, learn from one another, or
              collectively elevate our industry.
            </p>
            <p className="font-body text-base text-taupe">
              Caribbean Event Society was created to change that.
            </p>
            <p className="font-body text-base text-taupe">
              Founded in Trinidad &amp; Tobago, CES exists to bring together event professionals
              from across the Caribbean and its diaspora, creating opportunities to build
              relationships, share knowledge, celebrate excellence, and strengthen our industry
              for generations to come.
            </p>
            <p className="font-body text-base text-taupe">
              We believe that when professionals grow together, the entire Caribbean grows with
              them.
            </p>
          </div>
          <Link
            href="#"
            onClick={(event) => event.preventDefault()}
            className="mt-8 inline-flex items-center justify-center bg-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-opacity hover:opacity-90"
          >
            Join Our Community
          </Link>
        </div>

        <div className="relative aspect-4/3 md:aspect-auto md:min-h-105">
          <ImageWithFallback
            src={OUR_STORY_IMAGE_URL}
            alt=""
            fallbackLabel="Photo representing the CES founding story"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-top"
          />
        </div>
      </Container>
    </section>
  );
}
