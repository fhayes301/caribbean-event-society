import { Container } from "@/client/components/ui/Container";
import { IconTile } from "@/client/components/ui/IconTile";
import { SectionHeading } from "@/client/components/ui/SectionHeading";
import { VALUE_HIGHLIGHTS } from "./values-content";

/** The "Our Mission" statement, boxed with the Elevate/Connect/Transform value tiles. */
export default function Mission() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="max-w-7xl">
        <div className="bg-white px-6 py-12 text-center md:px-16 md:py-16">
          <SectionHeading
            eyebrow="OUR MISSION"
            headline="To elevate the standards, visibility, and long-term sustainability of the Caribbean event industry through professional development, meaningful connections, collaboration, and the promotion of excellence."
            className="mx-auto max-w-3xl"
            headlineClassName="mx-auto"
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {VALUE_HIGHLIGHTS.map((value) => (
              <IconTile
                key={value.id}
                Icon={value.Icon}
                label={value.label}
                description={value.description}
                className="flex-col text-center"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
