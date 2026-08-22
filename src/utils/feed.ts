import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteMeta from "@/site-config";
import { getPublicSlug, isVisible, sortMDByDate } from "./post";

async function getFeedItems() {
	const posts = await getCollection("post");
	const links = await getCollection("link");
	return sortMDByDate([...links, ...posts].filter(isVisible)).map((item) => ({
		title: item.data.title,
		description: item.data.description,
		pubDate: item.data.pubDate,
		link: getPublicSlug(item),
	}));
}

export async function rssFeed(context: APIContext) {
	return rss({
		title: siteMeta.title,
		description: siteMeta.description,
		site: context.site!,
		items: await getFeedItems(),
	});
}

function escapeXml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function absoluteUrl(site: URL, path: string) {
	const base = site.href.endsWith("/") ? site.href : `${site.href}/`;
	return new URL(path.replace(/^\//, ""), base).href;
}

export async function atomFeed(context: APIContext) {
	const site = context.site!;
	const items = await getFeedItems();
	const updated = items.find((item) => item.pubDate)?.pubDate ?? new Date(0);

	const entries = items
		.map((item) => {
			const url = absoluteUrl(site, item.link);
			const timestamp = (item.pubDate ?? new Date(0)).toISOString();
			const summary = item.description
				? `\n    <summary>${escapeXml(item.description)}</summary>`
				: "";
			return `  <entry>
    <title>${escapeXml(item.title)}</title>
    <link href="${escapeXml(url)}"/>
    <id>${escapeXml(url)}</id>
    <updated>${timestamp}</updated>
    <published>${timestamp}</published>${summary}
  </entry>`;
		})
		.join("\n");

	const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(siteMeta.title)}</title>
  <subtitle>${escapeXml(siteMeta.description)}</subtitle>
  <link href="${escapeXml(absoluteUrl(site, "atom"))}" rel="self" type="application/atom+xml"/>
  <link href="${escapeXml(absoluteUrl(site, ""))}"/>
  <id>${escapeXml(absoluteUrl(site, ""))}</id>
  <updated>${updated.toISOString()}</updated>
${entries}
</feed>
`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	});
}
