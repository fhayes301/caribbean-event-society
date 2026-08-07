import { Container } from "@/client/components/ui/Container";
import FoundingDirectorsGrid from "./FoundingDirectorsGrid";

/** Section chrome (heading + background) around the reusable directors grid. */
export default function FoundingDirectors() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container className="max-w-7xl">
        <h2 className="text-center font-body text-sm font-semibold uppercase tracking-widest text-forest">
          Meet Our Founding Directors
        </h2>
        <div className="mt-12">
          <FoundingDirectorsGrid />
        </div>
      </Container>
    </section>
  );
}
