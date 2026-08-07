import { Container } from "@/client/components/ui/Container";
import { IconTile } from "@/client/components/ui/IconTile";
import { RESOURCE_HIGHLIGHTS } from "./resources-content";

/** The 4-tile "Resources" strip. */
export default function Resources() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-stone">
        {RESOURCE_HIGHLIGHTS.map((resource) => (
          <IconTile
            key={resource.id}
            Icon={resource.Icon}
            label={resource.label}
            description={resource.description}
            className="md:px-8 md:first:pl-0 md:last:pr-0"
          />
        ))}
      </Container>
    </section>
  );
}
