import type { APIContext } from "astro";
import siteMeta from "@/site-config";
import { absoluteUrl, getVisibleEntries } from "./catalog";
import { getEntryUrl, getPublicSlug, type Entry } from "./post";

export function getMarkdownPath(entry: Entry) {
	return `/${getPublicSlug(entry)}.md`;
}

function isoDate(date: Date) {
	return date.toISOString().slice(0, 10);
}

function stripLeadingMdxImports(body: string) {
	const lines = body.split("\n");
	let i = 0;
	while (i < lines.length) {
		const line = lines[i] ?? "";
		if (line.trim() === "" || /^import\s.+from\s['"].+['"]/.test(line)) {
			i += 1;
			continue;
		}
		break;
	}
	return lines.slice(i).join("\n");
}

function simplifyEmbeds(body: string) {
	return body
		.replace(/<YouTube\s+id="([^"]+)"\s*\/>/g, (_, id: string) => `[Video](${id})`)
		.replace(
			/<Gist\s+[^>]*\bid="([^"]+)"[^>]*\/>/g,
			(_, id: string) => `[Gist](https://gist.github.com/${id})`,
		);
}

function oneLine(value: string) {
	return value.replace(/\s+/g, " ").trim();
}

export function entryToMarkdown(entry: Entry, site: URL) {
	const canonical = absoluteUrl(site, getPublicSlug(entry));
	const lines = [`# ${entry.data.title}`, ""];

	if (entry.data.pubDate) {
		lines.push(`- Published: ${isoDate(entry.data.pubDate)}`);
	}
	lines.push(`- URL: ${canonical}`);
	if (entry.data.tags.length > 0) {
		lines.push(`- Tags: ${entry.data.tags.join(", ")}`);
	}
	const source = getEntryUrl(entry);
	if (source) {
		lines.push(`- Source: ${source}`);
	}
	lines.push("");

	if (entry.data.description) {
		lines.push(entry.data.description);
		lines.push("");
	}

	const body = simplifyEmbeds(stripLeadingMdxImports(entry.body ?? "")).trim();
	if (body) {
		lines.push(body);
		lines.push("");
	}

	return lines.join("\n");
}

function fileList(entries: Entry[], site: URL) {
	return entries
		.map((entry) => {
			const href = absoluteUrl(site, getMarkdownPath(entry));
			const note = entry.data.description ? `: ${oneLine(entry.data.description)}` : "";
			return `- [${entry.data.title}](${href})${note}`;
		})
		.join("\n");
}

export async function llmsTxt(context: APIContext) {
	const site = context.site!;
	const entries = await getVisibleEntries();
	const posts = entries.filter((entry) => entry.collection === "post");
	const links = entries.filter((entry) => entry.collection === "link");

	const text = [
		`# ${siteMeta.title}`,
		"",
		`> ${siteMeta.description}`,
		"",
		"Each note has a corresponding html article at the same path without the appended .md.",
		"",
		"## Posts",
		"",
		fileList(posts, site),
		"",
		"## Links",
		"",
		fileList(links, site),
		"",
	].join("\n");

	return new Response(text, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}

export function markdownResponse(entry: Entry, site: URL) {
	return new Response(entryToMarkdown(entry, site), {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
}
