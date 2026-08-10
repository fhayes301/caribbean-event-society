import { Container } from "@/client/components/ui/Container";
import { SectionHeading } from "@/client/components/ui/SectionHeading";
import { LeafIcon } from "@/client/components/layout/icons";

/**
 * "Why We Exist" and "What Makes CES Different?" — two adjacent copy-doc
 * blocks with no image/icon of their own, laid out side by side.
 */
export default function WhyWeExist() {
  return (
    <section className="relative overflow-hidden bg-linen py-10 md:py-20">
      <LeafIcon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 hidden h-72 w-72 -translate-y-1/2 translate-x-1/4 -rotate-12 text-forest/5 sm:block md:h-96 md:w-96"
      />
      <Container className="relative grid max-w-7xl gap-6 md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeading eyebrow="WHY WE EXIST" headline="More than Membership." />
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-body text-base text-charcoal/80">
              Caribbean Event Society is more than a professional organisation.
            </p>
            <p className="font-body text-base text-charcoal/80">
              It is a growing community of planners, designers, florists, photographers, venues,
              rental companies, entertainers, beauty professionals, caterers, production teams,
              brand activators, and creative entrepreneurs committed to shaping the future of the
              Caribbean event industry together.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-stone pt-10 md:mt-0 md:border-t-0 md:border-l md:pl-12">
          <h3 className="font-display text-2xl text-charcoal">What Makes CES Different?</h3>
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-body text-base text-charcoal/80">
              We believe professional development is about more than courses and certifications.
            </p>
            <p className="font-body text-base text-charcoal/80">
              It is found in meaningful conversations, shared experiences, mentorship,
              collaboration, and exposure to new ideas.
            </p>
            <p className="font-body text-base text-charcoal/80">
              Through conferences, networking experiences, curated resources, industry
              partnerships, and our growing professional directory, Caribbean Event Society
              exists to create opportunities that help our members grow&mdash;not just
              individually, but collectively.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
