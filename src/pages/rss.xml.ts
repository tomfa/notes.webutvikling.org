import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteMeta from "@/site-config";
import { sortMDByDate } from "@/utils";

export const get = async () => {
	const posts = await getCollection("post");
	const links = await getCollection("link");
	const content = sortMDByDate([...links, ...posts]);

	return rss({
		title: siteMeta.title,
		description: siteMeta.description,
		site: import.meta.env.SITE,
		items: content.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			pubDate: item.data.pubDate,
			link: item.slug,
		})),
	});
};
