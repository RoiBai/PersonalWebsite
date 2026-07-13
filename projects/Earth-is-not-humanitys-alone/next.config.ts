import type { NextConfig } from "next";

const demoBasePath = "/art/Earth-is-not-humanitys-alone/demo";

const nextConfig: NextConfig = {
  output: "export",
  basePath: demoBasePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
