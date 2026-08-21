import type { CollectionEntry } from "astro:content";
import { getLinkTypeFromUrl, getSpotifyData } from "./urls";

export type Entry = CollectionEntry<"post"> | CollectionEntry<"link">;
export type PreviewKind = "video" | "audio" | "article" | "post";

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

export function isVisible(entry: Entry) {
	return !entry.data.archived && (!entry.data.draft || import.meta.env.DEV);
}

export function getPostCategory(entry: Entry) {
	return entry.data.category;
}

export function isNotesEntry(entry: Entry) {
	return getPostCategory(entry) === "statement";
}

export function isBooksEntry(entry: Entry) {
	return getPostCategory(entry) === "book";
}

export function isScribblesEntry(entry: Entry) {
	const category = getPostCategory(entry);
	return category !== "statement" && category !== "book";
}

export function getPublicSlug(entry: Entry) {
	return DATE_PREFIX.test(entry.id) ? entry.id.substring(11) : entry.id;
}

const OG_DESCRIPTION_MAX = 160;

export function getOgDescription(entry: Entry): string | undefined {
	const fromFrontmatter = entry.data.description?.trim();
	if (fromFrontmatter) {
		return fromFrontmatter;
	}
	return excerptFromBody(entry.body);
}

export function getOgImageSrc(entry: Entry): string | undefined {
	if ("heroImage" in entry.data) {
		return entry.data.heroImage;
	}
	return undefined;
}

function excerptFromBody(body: string | undefined): string | undefined {
	if (!body?.trim()) {
		return undefined;
	}
	const text = body
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`([^`]+)`/g, "$1")
		.replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
		.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/<[^>]+>/g, " ")
		.replace(/^#{1,6}\s+/gm, "")
		.replace(/^>\s+/gm, "")
		.replace(/[*_~]/g, "")
		.replace(/\s+/g, " ")
		.trim();
	if (!text) {
		return undefined;
	}
	if (text.length <= OG_DESCRIPTION_MAX) {
		return text;
	}
	const sliced = text.slice(0, OG_DESCRIPTION_MAX);
	const lastSpace = sliced.lastIndexOf(" ");
	const clipped = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
	return `${clipped.trimEnd()}…`;
}

function matchesRelatedRef(entry: Entry, ref: string) {
	const normalized = ref.replace(/^\//, "");
	return entry.id === normalized || getPublicSlug(entry) === normalized;
}

export function getRelatedEntries(entry: Entry, catalog: Entry[]) {
	return entry.data.related.flatMap((ref) => {
		const match = catalog.find((candidate) => matchesRelatedRef(candidate, ref));
		if (!match) {
			throw new Error(`Unknown related slug "${ref}" in ${entry.id}`);
		}
		if (!isVisible(match) || match.id === entry.id) {
			return [];
		}
		return [match];
	});
}

export function hasBody(entry: Entry) {
	return Boolean(entry.body?.trim());
}

export function getEntryUrl(entry: Entry): string | undefined {
	return "url" in entry.data ? entry.data.url : undefined;
}

export function getPreviewKind(entry: Entry): PreviewKind {
	const url = getEntryUrl(entry);
	if (!url) {
		return "post";
	}
	const explicitType = "type" in entry.data ? entry.data.type : undefined;
	const inferredType = getLinkTypeFromUrl(url);
	if (explicitType === "video" || inferredType === "video") {
		return "video";
	}
	if (explicitType === "audio" || inferredType === "audio" || getSpotifyData(url)) {
		return "audio";
	}
	return "article";
}

export function sortMDByDate(posts: Entry[] = []) {
	return posts.sort(
		(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
	);
}

export function getUniqueTags(posts: Entry[] = []) {
	const uniqueTags = new Set<string>();
	posts.forEach((post) => {
		post.data.tags.map((tag) => uniqueTags.add(tag.toLowerCase()));
	});
	return [...uniqueTags];
}

export function getUniqueCategories(posts: Entry[] = []) {
	const uniqueCategories = new Set<string>();
	posts.forEach((post) => {
		uniqueCategories.add(getPostCategory(post).toLowerCase());
	});
	return [...uniqueCategories];
}

export function getUniqueTagsWithCount(posts: Entry[] = []): {
	[key: string]: number;
} {
	return posts.reduce((prev, post) => {
		const runningTags: { [key: string]: number } = { ...prev };
		post.data.tags.forEach(function (tag) {
			runningTags[tag] = (runningTags[tag] || 0) + 1;
		});
		return runningTags;
	}, {});
}

export function getUniqueCategoriesWithCount(posts: Entry[] = []): {
	[key: string]: number;
} {
	return posts.reduce((prev, post) => {
		const category = getPostCategory(post);
		const runningCategories: { [key: string]: number } = { ...prev };
		runningCategories[category] = (runningCategories[category] || 0) + 1;
		return runningCategories;
	}, {});
}
