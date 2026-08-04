import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { SectionHeading } from "@/client/components/ui/SectionHeading";
import { LeafIcon } from "@/client/components/layout/icons";

/**
 * The "Our Mission" section. The mission statement itself is passed as
 * `SectionHeading`'s `headline` — matching the mockup, where the
 * statement is rendered in the section's large serif display treatment,
 * not a separate short headline (the copy doc gives no shorter one).
 */
export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-ivory py-10 md:py-10">
      <LeafIcon
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-forest/5 md:h-112 md:w-md"
      />
      <Container className="relative max-w-7xl grid gap-10 md:grid-cols-2 md:gap-12">
        <SectionHeading
          eyebrow="OUR MISSION"
          headline="To elevate the standards, visibility, and sustainability of the Caribbean event industry through collaboration, meaningful connections, shared opportunities, and the promotion of professional excellence."
        />
        <div className="flex flex-col justify-center gap-6 md:border-l md:border-forest/20 md:pl-12">
          <p className="font-body text-base text-taupe">
            Caribbean Event Society is a nonprofit membership organization for event
            professionals. We provide resources, industry connections and leadership
            opportunities that empower our members and shape the future of our industry.
          </p>
          <CtaLink href="/about">Learn More About CES</CtaLink>
        </div>
      </Container>
    </section>
  );
}
