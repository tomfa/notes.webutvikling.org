import { z, defineCollection } from "astro:content";

const post = defineCollection({
	schema: {
		title: z.string().max(60),
		description: z.string().min(50).max(160).optional(),
		pubDate: z.any().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]),
	},
});

export const collections = { post };
