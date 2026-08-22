import { getCollection } from "astro:content";
import { isVisible, sortMDByDate, type Entry } from "./post";

export async function getVisibleEntries(): Promise<Entry[]> {
	const posts = await getCollection("post");
	const links = await getCollection("link");
	return sortMDByDate([...links, ...posts].filter(isVisible));
}

export function absoluteUrl(site: URL, path: string) {
	const base = site.href.endsWith("/") ? site.href : `${site.href}/`;
	return new URL(path.replace(/^\//, ""), base).href;
}
