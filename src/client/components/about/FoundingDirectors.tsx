import { Container } from "@/client/components/ui/Container";
import FoundingDirectorsGrid from "@/client/components/home/FoundingDirectorsGrid";

/** Section chrome (heading + intro) around the reusable directors grid, with bios shown. */
export default function FoundingDirectors() {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            OUR FOUNDING DIRECTORS
          </p>
          <h2 className="mt-3 font-display text-3xl text-charcoal">
            Meet Our Founding Directors
          </h2>
          <p className="mt-6 font-body text-base text-taupe">
            Caribbean Event Society is led by professionals who share a common vision: to build a
            stronger, more connected future for the Caribbean event industry. Together, our
            directors bring decades of experience across planning, design, business strategy,
            operations, beauty, wellness, education, and creative leadership.
          </p>
        </div>
        <div className="mt-12">
          <FoundingDirectorsGrid showBios />
        </div>
      </Container>
    </section>
  );
}
