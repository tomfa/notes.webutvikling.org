const SPOTIFY_TYPES = ["episode", "track", "album", "playlist", "show", "artist"] as const;
export type SpotifyType = (typeof SPOTIFY_TYPES)[number];

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
		return { id: obj.href, provider };
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
