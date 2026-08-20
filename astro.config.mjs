import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://notes.webutvikling.org",
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	integrations: [mdx(), sitemap(), react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
