import type { Metadata } from "next";
import "./globals.css";
import { demoBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ruiyuanbai.com"),
  title: "Earth Is Not Humanity's Alone | Animal Harm Archive",
  description: "A bilingual, source-verified horizontal timeline documenting animals harmed by human actions.",
  alternates: { canonical: demoBasePath },
  openGraph: { title: "Earth Is Not Humanity's Alone", description: "An ongoing, source-verified animal harm archive.", type: "website", locale: "en_US", alternateLocale:["zh_CN"], url: demoBasePath, images: [{ url: `${demoBasePath}/og.png`, width: 1734, height: 907, alt: "Earth Is Not Humanity's Alone — animal harm archive" }] },
  twitter: { card: "summary_large_image", title: "Earth Is Not Humanity's Alone", description: "A bilingual animal harm archive.", images: [`${demoBasePath}/og.png`] },
  icons: { icon: `${demoBasePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
