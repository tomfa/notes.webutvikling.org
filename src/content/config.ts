import { z, defineCollection } from "astro:content";

const post = defineCollection({
	schema: {
		title: z.string().max(60),
		description: z.string().min(50).max(160).optional(),
		pubDate: z.any().transform((str) => str && new Date(str)),
		heroImage: z.string().optional(),
		imageAlt: z.string().optional(),
		tags: z.array(z.string()).default([]),
	},
	slug(entry) {
		return entry.defaultSlug.split("/")[0]!.substring(11);
	},
});

export const collections = { post };
