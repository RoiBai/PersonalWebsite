"use client";
import { useLanguage } from "@/components/ui/LanguageProvider"; import { ui } from "@/lib/i18n";
export function TimelineNavigation() { const {locale}=useLanguage(); return <div className="timeline-navigation" aria-hidden="true"><span>{ui[locale].scrollAdvance}</span><span>←</span><span>→</span></div>; }
