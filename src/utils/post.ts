import type { CollectionEntry } from "astro:content";
import { getLinkTypeFromUrl, getSpotifyData } from "./urls";

export type Entry = CollectionEntry<"post"> | CollectionEntry<"link">;
export type PreviewKind = "video" | "audio" | "article" | "post";

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

export function isVisible(entry: Entry) {
	return !entry.data.archived && (!entry.data.draft || import.meta.env.DEV);
}

export function getPublicSlug(entry: Entry) {
	return DATE_PREFIX.test(entry.slug) ? entry.slug.substring(11) : entry.slug;
}

function matchesRelatedRef(entry: Entry, ref: string) {
	const normalized = ref.replace(/^\//, "");
	return entry.slug === normalized || getPublicSlug(entry) === normalized;
}

export function getRelatedEntries(entry: Entry, catalog: Entry[]) {
	return entry.data.related.flatMap((ref) => {
		const match = catalog.find((candidate) => matchesRelatedRef(candidate, ref));
		if (!match) {
			throw new Error(`Unknown related slug "${ref}" in ${entry.slug}`);
		}
		if (!isVisible(match) || match.slug === entry.slug) {
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
		uniqueCategories.add(post.data.category.toLowerCase());
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
		const runningCategories: { [key: string]: number } = { ...prev };
		runningCategories[post.data.category] = (runningCategories[post.data.category] || 0) + 1;
		return runningCategories;
	}, {});
}
