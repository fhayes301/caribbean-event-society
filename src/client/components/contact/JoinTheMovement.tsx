import NewsletterForm from "@/client/components/layout/NewsletterForm";
import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { SectionHeading } from "@/client/components/ui/SectionHeading";

/** The dark "Be Part of the Movement" / "Stay Connected" CTA band. */
export default function JoinTheMovement() {
  return (
    <section className="bg-forest py-16 md:py-20">
      <Container className="grid max-w-7xl gap-10 sm:grid-cols-2 sm:gap-12">
        <div>
          <SectionHeading headline="Be Part of the Movement" headlineClassName="text-ivory" />
          <p className="mt-6 font-body text-base text-ivory/80">
            Join a community of event professionals committed to elevating standards, creating
            meaningful connections, and transforming the future of the Caribbean event industry.
          </p>
          <CtaLink href="#" variant="solid" disablePlaceholderNav className="mt-8">
            Apply for Membership
          </CtaLink>
        </div>

        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            STAY CONNECTED
          </p>
          <p className="mt-3 font-body text-base text-ivory/80">
            Subscribe to our mailing list for the latest on events, resources, and industry
            insights.
          </p>
          <div className="mt-6">
            <NewsletterForm tone="dark" />
          </div>
        </div>
      </Container>
    </section>
  );
}
