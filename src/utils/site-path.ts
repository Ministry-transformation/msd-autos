/** Prefix an internal site path with Astro's configured deployment base. */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL;
  const relativePath = path.replace(/^\/+/, '');
  return relativePath ? `${base}${relativePath}` : base;
}
