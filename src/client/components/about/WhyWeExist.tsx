import { Container } from "@/client/components/ui/Container";
import { SectionHeading } from "@/client/components/ui/SectionHeading";

/**
 * "Why We Exist" and "What Makes CES Different?" — two adjacent copy-doc
 * blocks with no image/icon of their own, kept as one section rather than
 * two near-empty components.
 */
export default function WhyWeExist() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="WHY WE EXIST" headline="More than Membership." />
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-body text-base text-taupe">
              Caribbean Event Society is more than a professional organisation.
            </p>
            <p className="font-body text-base text-taupe">
              It is a growing community of planners, designers, florists, photographers, venues,
              rental companies, entertainers, beauty professionals, caterers, production teams,
              brand activators, and creative entrepreneurs committed to shaping the future of the
              Caribbean event industry together.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-stone pt-14">
          <h3 className="font-display text-2xl text-charcoal">What Makes CES Different?</h3>
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-body text-base text-taupe">
              We believe professional development is about more than courses and certifications.
            </p>
            <p className="font-body text-base text-taupe">
              It is found in meaningful conversations, shared experiences, mentorship,
              collaboration, and exposure to new ideas.
            </p>
            <p className="font-body text-base text-taupe">
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
