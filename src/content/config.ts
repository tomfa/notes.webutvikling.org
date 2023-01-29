import { z, defineCollection } from "astro:content";

export const LINK_TYPE = ["lib", "article", "video"] as const;

export const POST_CATEGORY = [
	"guide",
	"rant",
	"question",
	"scribble",
	"statement",
	"debugging",
	"book",
	"idea",
] as const;
const post = defineCollection({
	schema: {
		title: z.string().max(60),
		description: z.string().min(50).max(160).optional(),
		pubDate: z.any().transform((str) => str && new Date(str)),
		heroImage: z.string().optional(),
		imageAlt: z.string().optional(),
		tags: z.array(z.string()).min(1).max(5),
		category: z.enum(POST_CATEGORY).default("scribble"),
	},
	slug(entry) {
		return entry.defaultSlug.split("/")[0]!.substring(11);
	},
});

const link = defineCollection({
	schema: {
		url: z.string().url(),
		title: z.string().max(60),
		description: z.string().min(50).max(320),
		pubDate: z.any().transform((str) => str && new Date(str)),
		tags: z.array(z.string()).default([]),
		type: z.enum(LINK_TYPE).default("article"),
	},
	slug(entry) {
		return entry.defaultSlug.split("/")[0]!.substring(11);
	},
});

export const collections = { post, link };
