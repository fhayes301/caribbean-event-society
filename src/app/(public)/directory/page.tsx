import type { Metadata } from "next";
import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";

export const metadata: Metadata = {
  title: "Directory | Caribbean Event Society",
  description:
    "The Caribbean Event Society member directory is launching soon — a curated home for vetted event professionals across the Caribbean and its diaspora.",
};

export default function DirectoryPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container className="max-w-2xl text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
          DIRECTORY
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
          Coming Soon
        </h1>
        <p className="mt-6 font-body text-base text-taupe">
          We&rsquo;re building a curated directory of vetted event professionals across the
          Caribbean and its diaspora. Check back soon, or reach out if you&rsquo;d like to be
          notified when it launches.
        </p>
        <CtaLink href="/contact" variant="solid" className="mt-8">
          Contact Us
        </CtaLink>
      </Container>
    </section>
  );
}
