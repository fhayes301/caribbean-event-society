import { Container } from "@/client/components/ui/Container";
import { IconTile } from "@/client/components/ui/IconTile";
import { RESOURCE_HIGHLIGHTS } from "./resources-content";

/** The 4-tile "Resources" strip. */
export default function Resources() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-stone">
        {RESOURCE_HIGHLIGHTS.map((resource) => (
          <IconTile
            key={resource.id}
            Icon={resource.Icon}
            label={resource.label}
            description={resource.description}
            className="sm:px-8 sm:first:pl-0 sm:last:pr-0"
          />
        ))}
      </Container>
    </section>
  );
}
