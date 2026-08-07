import PitchCard from "./PitchCard";
import { PITCH_CARDS } from "./pitch-content";

/**
 * Renders the Membership + Directory pitches as one unbroken row — text,
 * image, text, image — flush edge to edge. Deliberately not wrapped in
 * `Container`, unlike every other homepage section.
 */
export default function PitchSection() {
  return (
    <section className="flex flex-col bg-ivory lg:flex-row">
      {PITCH_CARDS.map((content) => (
        <PitchCard key={content.id} content={content} />
      ))}
    </section>
  );
}
