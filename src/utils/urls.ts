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
