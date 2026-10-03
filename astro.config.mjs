import { defineConfig } from 'astro/config';

const base = process.env.PUBLIC_BASE_PATH;

export default defineConfig({
  site: 'https://ministry-transformation.github.io',
  ...(base ? { base } : {}),
  output: 'static',
  trailingSlash: 'always',
});
