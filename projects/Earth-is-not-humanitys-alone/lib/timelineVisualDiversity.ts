import type { AnimalEvent } from "@/types/event";

/**
 * Verified records retained in the research library but omitted from the public
 * timeline when they would place the exact same species in consecutive slots.
 * The retained neighbour has the clearer identity, stronger public record, or
 * more representative narrative value.
 */
export const timelineVisualDiversityExclusions = new Set([
  "albert-iv-v2-impact",
  "dezik-lisa-rocket-failure",
  "mia-one-mouse-rocket-destruction",
  "jupiter-fourteen-mice",
  "bars-lisichka-launch-explosion",
  "oreo-dog-euthanasia",
  "krijger-norfolk-k9",
  "chucky-bexar-k9",
  "knight-chesterfield-k9",
]);

export function filterTimelineVisualDuplicates(events: AnimalEvent[]) {
  return events.filter((event) => !timelineVisualDiversityExclusions.has(event.id));
}
