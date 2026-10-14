// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), 'SITE_');

if (!SITE_URL && process.env.NODE_ENV === 'production') {
	throw new Error('Set SITE_URL in your build environment or an untracked .env file before building.');
}

// https://astro.build/config
export default defineConfig({
	site: SITE_URL || 'http://localhost:4321',
	integrations: [mdx(), sitemap()],
});
