import type { Event } from "@/types/event.types";
import { Container } from "@/client/components/ui/Container";

export interface BodyProps {
  event: Event;
}

/** The Event Detail page's full description, in the site's standard prose treatment. */
export default function Body({ event }: BodyProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="max-w-3xl">
        <h2 className="font-display text-2xl text-charcoal">About This Event</h2>
        <p className="mt-6 font-body text-base text-taupe">{event.description}</p>
      </Container>
    </section>
  );
}
