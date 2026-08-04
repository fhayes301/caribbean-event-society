import NewsletterForm from "@/client/components/layout/NewsletterForm";
import { Container } from "@/client/components/ui/Container";

/**
 * The "Stay Connected" band closing out the Events Archive and Event
 * Detail pages. Reuses the existing, already-tested `NewsletterForm` —
 * no new signup logic needed.
 */
export default function Newsletter() {
  return (
    <section className="bg-forest py-16 md:py-20">
      <Container className="max-w-2xl text-center">
        <h2 className="font-display text-3xl text-ivory">Stay Connected</h2>
        <p className="mt-4 font-body text-base text-ivory/80">
          Be the first to hear about upcoming events, membership opportunities, and announcements
          from Caribbean Event Society.
        </p>
        <div className="mt-8">
          <NewsletterForm tone="dark" />
        </div>
      </Container>
    </section>
  );
}
