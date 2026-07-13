"use client";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { useLanguage } from "@/components/ui/LanguageProvider";
export function ExternalLink({ children, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) { const {locale}=useLanguage(); return <a {...props} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span><span className="sr-only">{locale === "en" ? " (external link, opens in a new tab)" : "（外部链接，在新窗口打开）"}</span></a>; }
