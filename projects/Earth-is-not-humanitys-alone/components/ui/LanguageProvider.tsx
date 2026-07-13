"use client";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

const LanguageContext = createContext<{locale:Locale;setLocale:(locale:Locale)=>void}>({locale:"en",setLocale:()=>undefined});

export function LanguageProvider({children}:{children:ReactNode}) {
  const [locale,setLocaleState] = useState<Locale>("en");
  useEffect(() => { const saved = window.localStorage.getItem("archive-locale"); if (saved === "zh" || saved === "en") window.setTimeout(()=>setLocaleState(saved),0); }, []);
  const setLocale = (next:Locale) => { setLocaleState(next); window.localStorage.setItem("archive-locale",next); document.documentElement.lang = next === "en" ? "en" : "zh-CN"; };
  useEffect(() => { document.documentElement.lang = locale === "en" ? "en" : "zh-CN"; }, [locale]);
  const value = useMemo(() => ({locale,setLocale}),[locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);

export function LanguageSwitch() {
  const {locale,setLocale} = useLanguage();
  return <div className="language-switch" role="group" aria-label="Language / 语言"><button type="button" className={locale === "en" ? "is-active" : ""} aria-pressed={locale === "en"} onClick={()=>setLocale("en")}>EN</button><span>/</span><button type="button" className={locale === "zh" ? "is-active" : ""} aria-pressed={locale === "zh"} onClick={()=>setLocale("zh")}>中文</button></div>;
}
