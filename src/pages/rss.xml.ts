import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteMeta from "@/site-config";
import { sortMDByDate, isVisible, getPublicSlug } from "@/utils";

export const GET: APIRoute = async (context) => {
	const posts = await getCollection("post");
	const links = await getCollection("link");
	const content = sortMDByDate([...links, ...posts].filter(isVisible));

	return rss({
		title: siteMeta.title,
		description: siteMeta.description,
		site: context.site!,
		items: content.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			pubDate: item.data.pubDate,
			link: getPublicSlug(item),
		})),
	});
};
