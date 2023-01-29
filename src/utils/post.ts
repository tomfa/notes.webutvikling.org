import type { CollectionEntry } from "astro:content";

export type Entry = CollectionEntry<"post"> | CollectionEntry<"link">;

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
