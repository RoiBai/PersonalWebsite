import { animalEventsSchema } from "@/schemas/eventSchema";
import type { AnimalEvent } from "@/types/event";
export function validateEvents(input: unknown): AnimalEvent[] { return animalEventsSchema.parse(input) as AnimalEvent[]; }
