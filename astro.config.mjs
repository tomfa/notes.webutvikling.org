import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import embeds from "astro-embed/integration";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://notes.webutvikling.org",
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
		drafts: true,
	},
	integrations: [
    embeds(),
		mdx(),
    sitemap(),
		tailwind({
				applyBaseStyles: false,
		}),
		prefetch(),
		react(),
	],
});
