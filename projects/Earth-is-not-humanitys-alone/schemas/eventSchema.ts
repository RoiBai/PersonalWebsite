import { z } from "zod";

const sourceSchema = z.object({
  id: z.string().min(1), title: z.string().min(3), publisher: z.string().min(2), url: z.string().url(),
  sourceType: z.enum(["official", "court-record", "government", "research", "ngo", "journalism"]),
  publishedAt: z.string().optional(), accessedAt: z.string().date(), language: z.string().optional(), isPrimary: z.boolean(),
});

export const animalEventSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/), slug: z.string().regex(/^[a-z0-9-]+$/),
  date: z.string().date(), endDate: z.string().date().optional(),
  datePrecision: z.enum(["exact", "month", "year", "approximate"]), displayDateZh: z.string().min(4),
  titleZh: z.string().min(4).max(30), shortTitleZh: z.string().min(4).max(20),
  animal: z.object({ nameZh: z.string().min(1), originalName: z.string().optional(), speciesZh: z.string().min(1), speciesEn: z.string().optional(), scientificName: z.string().optional(), sex: z.string().optional(), age: z.string().optional(), identifyingFeatures: z.string().optional() }),
  location: z.object({ placeZh: z.string().min(1), countryZh: z.string().min(1), originalPlaceName: z.string().optional() }),
  summaryZh: z.string().min(40).max(90), infoBoardTextZh: z.string().min(60).max(140), fullStoryZh: z.string().min(300).max(800), highlightedFactZh: z.string().min(8),
  harmCategory: z.array(z.string().min(1)).min(1), outcomeZh: z.string().min(5), aftermathZh: z.string().optional(), uncertaintyNoteZh: z.string().optional(), contentWarningZh: z.string().optional(),
  illustration: z.object({ src: z.string().startsWith("/animals/"), altZh: z.string().min(12), width: z.number().int().positive(), height: z.number().int().positive(), promptFile: z.string().min(1), generationStatus: z.enum(["generated", "needs-generation", "not-available"]) }),
  referenceImage: z.object({ url: z.string().url(), pageUrl: z.string().url(), publisher: z.string().min(2), photographer: z.string().optional(), license: z.string().optional(), usageStatus: z.enum(["research-only", "licensed", "public-domain", "permission-required"]) }).optional(),
  sources: z.array(sourceSchema).min(2),
  verification: z.object({ status: z.enum(["verified", "partially-verified"]), verifiedAt: z.string().date(), notes: z.string().optional() }),
  en: z.object({
    displayDate: z.string().min(4), title: z.string().min(4), shortTitle: z.string().min(4),
    animalName: z.string().min(1), species: z.string().min(1), place: z.string().min(1), country: z.string().min(1),
    summary: z.string().min(40), infoBoardText: z.string().min(60), fullStory: z.string().min(180), highlightedFact: z.string().min(8),
    harmCategory: z.array(z.string().min(1)).min(1), outcome: z.string().min(5), aftermath: z.string().optional(), uncertaintyNote: z.string().optional(), contentWarning: z.string().optional(), alt: z.string().min(12),
  }).optional(),
}).superRefine((event, ctx) => {
  if (!event.sources.some((source) => source.isPrimary)) ctx.addIssue({ code: "custom", path: ["sources"], message: "每个事件至少需要一个一手来源" });
  if (event.endDate && event.endDate < event.date) ctx.addIssue({ code: "custom", path: ["endDate"], message: "结束日期不能早于开始日期" });
});

export const animalEventsSchema = z.array(animalEventSchema);
