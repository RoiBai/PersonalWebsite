import type { AnimalEvent } from "@/types/event";
export const sortEvents = (events: AnimalEvent[]) => [...events].sort((a, b) => a.date.localeCompare(b.date));
export function eventStats(events: AnimalEvent[]) {
  const sorted = sortEvents(events);
  return { count: sorted.length, species: new Set(sorted.map((event) => event.animal.scientificName || event.animal.speciesEn || event.animal.speciesZh)).size, startYear: sorted[0]?.date.slice(0, 4) ?? "—", endYear: sorted.at(-1)?.date.slice(0, 4) ?? "—", verifiedAt: sorted.map((event) => event.verification.verifiedAt).sort().at(-1) ?? "—" };
}
