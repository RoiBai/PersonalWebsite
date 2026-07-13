export type DatePrecision = "exact" | "month" | "year" | "approximate";
export type VerificationStatus = "verified" | "partially-verified";

export type EventSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  sourceType: "official" | "court-record" | "government" | "research" | "ngo" | "journalism";
  publishedAt?: string;
  accessedAt: string;
  language?: string;
  isPrimary: boolean;
};

export type AnimalEvent = {
  id: string;
  slug: string;
  date: string;
  endDate?: string;
  datePrecision: DatePrecision;
  displayDateZh: string;
  titleZh: string;
  shortTitleZh: string;
  animal: {
    nameZh: string;
    originalName?: string;
    speciesZh: string;
    speciesEn?: string;
    scientificName?: string;
    sex?: string;
    age?: string;
    identifyingFeatures?: string;
  };
  location: { placeZh: string; countryZh: string; originalPlaceName?: string };
  summaryZh: string;
  infoBoardTextZh: string;
  fullStoryZh: string;
  highlightedFactZh: string;
  harmCategory: string[];
  outcomeZh: string;
  aftermathZh?: string;
  uncertaintyNoteZh?: string;
  contentWarningZh?: string;
  illustration: {
    src: string;
    altZh: string;
    width: number;
    height: number;
    promptFile: string;
    generationStatus: "generated" | "needs-generation" | "not-available";
  };
  referenceImage?: {
    url: string;
    pageUrl: string;
    publisher: string;
    photographer?: string;
    license?: string;
    usageStatus: "research-only" | "licensed" | "public-domain" | "permission-required";
  };
  sources: EventSource[];
  verification: { status: VerificationStatus; verifiedAt: string; notes?: string };
  en?: {
    displayDate: string;
    title: string;
    shortTitle: string;
    animalName: string;
    species: string;
    place: string;
    country: string;
    summary: string;
    infoBoardText: string;
    fullStory: string;
    highlightedFact: string;
    harmCategory: string[];
    outcome: string;
    aftermath?: string;
    uncertaintyNote?: string;
    contentWarning?: string;
    alt: string;
  };
};
