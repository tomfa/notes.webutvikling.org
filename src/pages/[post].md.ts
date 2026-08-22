import type { APIRoute, GetStaticPaths } from "astro";
import { getVisibleEntries } from "../utils/catalog";
import { markdownResponse } from "../utils/llms";
import { getPublicSlug, type Entry } from "../utils/post";

interface Props {
	entry: Entry;
}

export const getStaticPaths = (async () => {
	const entries = await getVisibleEntries();
	return entries.map((entry) => ({
		params: { post: getPublicSlug(entry) },
		props: { entry },
	}));
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = ({ props, site }) => {
	return markdownResponse(props.entry, site!);
};
