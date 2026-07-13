import Image from "next/image";
import type { AnimalEvent } from "@/types/event";
import { useLanguage } from "@/components/ui/LanguageProvider"; import { eventText, ui } from "@/lib/i18n";
import { withDemoBasePath } from "@/lib/basePath";
export function AnimalPortrait({ event, priority = false }: { event: AnimalEvent; priority?: boolean }) { const {locale}=useLanguage(); const text=eventText(event,locale); return <div className="portrait-wrap">{event.illustration.generationStatus === "generated" ? <Image unoptimized className="animal-portrait" src={withDemoBasePath(event.illustration.src)} alt={text.alt} width={event.illustration.width} height={event.illustration.height} priority={priority} sizes="(max-width: 720px) 54vw, 210px" /> : <div className="portrait-pending" role="img" aria-label={`${text.alt} ${ui[locale].pending}`}><span aria-hidden="true">{text.species.slice(0,2).toUpperCase()}</span></div>}<span className="portrait-shadow" aria-hidden="true" /></div>; }
