const SPOTIFY_TYPES = ["episode", "track", "album", "playlist", "show", "artist"] as const;
export type SpotifyType = (typeof SPOTIFY_TYPES)[number];

const VIDEO_DOMAINS = ["youtube.com", "youtu.be", "vimeo.com"];
const AUDIO_DOMAINS = ["spotify.com"];
const LIB_DOMAINS = [
	"github.com",
	"gitlab.com",
	"bitbucket.org",
	"codeberg.org",
	"sr.ht",
	"npmjs.com",
	"npmjs.org",
	"pypi.org",
	"crates.io",
	"packagist.org",
	"rubygems.org",
	"nuget.org",
	"hub.docker.com",
	"jsr.io",
	"pkg.go.dev",
	"deno.land",
	"pub.dev",
	"hex.pm",
];

export const getLinkTypeFromUrl = (
	url: string
): "video" | "audio" | "lib" | undefined => {
	const hostname = new URL(url).hostname.replace(/^www\./, "").toLowerCase();
	if (VIDEO_DOMAINS.some((domain) => hostMatches(hostname, domain))) {
		return "video";
	}
	if (AUDIO_DOMAINS.some((domain) => hostMatches(hostname, domain))) {
		return "audio";
	}
	if (LIB_DOMAINS.some((domain) => hostMatches(hostname, domain))) {
		return "lib";
	}
	return undefined;
};

const hostMatches = (hostname: string, domain: string): boolean =>
	hostname === domain || hostname.endsWith(`.${domain}`);

export type SpotifyData = {
	id: string;
	type: SpotifyType;
	startAt?: number;
};

export const getVideoData = (
	url: string
): { id?: string; params?: string; provider: "vimeo" | "youtube" | null } => {
	const provider = getVideoProvider(url);
	if (!provider) {
		return { provider };
	}
	try {
		const obj = new URL(url);
		if (provider === "youtube") {
			return { ...getYoutubeVideoData(obj), provider };
		}
		return { id: getVimeoId(obj), provider };
	} catch (error) {
		// This seems to work, actually
		return { id: url, provider };
	}
};

export const getSpotifyData = (url: string): SpotifyData | null => {
	try {
		const parsed = new URL(url);
		if (!parsed.hostname.includes("spotify")) {
			return null;
		}
		const parts = parsed.pathname.split("/").filter(Boolean);
		const typeIndex = parts.findIndex((part) =>
			SPOTIFY_TYPES.includes(part as SpotifyType)
		);
		const id = parts[typeIndex + 1];
		if (typeIndex === -1 || !id) {
			return null;
		}
		const startAt = parseStartAt(parsed.searchParams.get("t"));
		return {
			id,
			type: parts[typeIndex] as SpotifyType,
			...(startAt !== undefined && { startAt }),
		};
	} catch {
		return null;
	}
};

const parseStartAt = (t: string | null): number | undefined => {
	if (!t) {
		return undefined;
	}
	const value = Number.parseInt(t, 10);
	if (!Number.isFinite(value) || value <= 0) {
		return undefined;
	}
	// Share links sometimes use milliseconds.
	if (value > 86_400) {
		return Math.floor(value / 1000);
	}
	return value;
};

const getVimeoId = (url: URL): string | undefined =>
	url.pathname
		.split("/")
		.filter(Boolean)
		.reverse()
		.find((segment) => /^\d+$/.test(segment));

const getYoutubeVideoData = (url: URL): { id: string; params?: string } => {
	if (url.searchParams.get("t") && !url.searchParams.get("start")) {
		url.searchParams.set("start", url.searchParams.get("t")?.replace("s", "") || "");
		url.searchParams.delete("t");
	}
	return { id: url.href, params: url.searchParams.toString() };
};
function getVideoProvider(url: string) {
	const youtubeHosts = ["youtu.be", "youtube"];
	const vimeoHosts = ["vimeo"];

	if (vimeoHosts.some((host) => url.includes(host))) {
		return "vimeo";
	}
	if (youtubeHosts.some((host) => url.includes(host))) {
		return "youtube";
	}
	return null;
}
