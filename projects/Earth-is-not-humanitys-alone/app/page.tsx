import { HeroIntro } from "@/components/hero/HeroIntro";
import { HorizontalTimeline } from "@/components/timeline/HorizontalTimeline";
import { ClosingSection } from "@/components/closing/ClosingSection";
import { events, reviewedEvents } from "@/data/events";
import { LanguageProvider, LanguageSwitch } from "@/components/ui/LanguageProvider";

export default function Home() {
  return <LanguageProvider><LanguageSwitch /><main id="site-main"><HeroIntro events={events} /><HorizontalTimeline events={events} /><ClosingSection events={events} reviewedCount={reviewedEvents.length} /></main></LanguageProvider>;
}
