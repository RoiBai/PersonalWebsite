export const demoBasePath = "/art/Earth-is-not-humanitys-alone/demo";

export function withDemoBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${demoBasePath}${path}`;
}
