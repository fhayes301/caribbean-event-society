import { PersonCard } from "@/client/components/ui/PersonCard";
import type { FoundingDirector } from "@/types/home.types";
import { FOUNDING_DIRECTORS } from "./founding-directors-content";

export interface FoundingDirectorsGridProps {
  directors?: FoundingDirector[];
  /** Opts every card into showing its bio/Instagram link (e.g. the About
   *  page's team section). Defaults to `false` for the homepage's compact
   *  grid. */
  showBios?: boolean;
}

/**
 * A responsive grid of founding director profile cards. Presentational
 * and reusable — no section chrome (heading/background) of its own, so
 * it can be dropped onto other pages (e.g. a future `/about` team
 * section) alongside their own heading.
 */
export default function FoundingDirectorsGrid({
  directors = FOUNDING_DIRECTORS,
  showBios = false,
}: FoundingDirectorsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {directors.map((director) => (
        <PersonCard
          key={director.id}
          name={director.name}
          title={director.title}
          photoUrl={director.photoUrl}
          bio={director.bio}
          instagramUrl={director.instagramUrl}
          showBio={showBios}
        />
      ))}
    </div>
  );
}
