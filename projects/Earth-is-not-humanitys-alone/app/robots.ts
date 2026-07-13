import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://www.ruiyuanbai.com/art/Earth-is-not-humanitys-alone/demo/sitemap.xml" }; }
