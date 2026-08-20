import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { getLinkTypeFromUrl } from "./utils/urls";

export const LINK_TYPE = ["lib", "article", "video", "audio"] as const;

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

const related = z.array(z.string()).default([]);

function collectionId({ entry }: { entry: string }) {
	return entry
		.replace(/\\/g, "/")
		.replace(/\/index\.(md|mdx)$/i, "")
		.replace(/\.(md|mdx)$/i, "");
}

const post = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/post",
		generateId: collectionId,
	}),
	schema: z.object({
		draft: z.boolean().default(false),
		archived: z.boolean().default(false),
		title: z.string().max(60),
		description: z.string().min(50).max(160).optional(),
		pubDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		imageAlt: z.string().optional(),
		tags: z.array(z.string()).min(1).max(5),
		category: z.enum(POST_CATEGORY).default("scribble"),
		url: z.string().url().optional(),
		related,
	}),
});

const link = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/link",
		generateId: collectionId,
	}),
	schema: z
		.object({
			draft: z.boolean().default(false),
			archived: z.boolean().default(false),
			url: z.string().url(),
			title: z.string().max(60),
			description: z.string().min(50).max(320),
			pubDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			type: z.enum(LINK_TYPE).optional(),
			related,
		})
		.transform((data) => {
			const type = getLinkTypeFromUrl(data.url) ?? data.type;
			if (!type) {
				throw new Error(`Unable to determine link type from url: ${data.url}`);
			}
			return { ...data, type };
		}),
});

export const collections = { post, link };
