const HERO_IMAGE_WIDTH = 986;
const HERO_IMAGE_HEIGHT = 600;
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export function isRemoteImageSrc(src: string): boolean {
	return /^https?:\/\//i.test(src);
}

export function isUnsplashUrl(src: string): boolean {
	try {
		const { hostname } = new URL(src);
		return hostname === "unsplash.com" || hostname.endsWith(".unsplash.com");
	} catch {
		return false;
	}
}

export function extractUnsplashPhotoId(src: string): string | undefined {
	try {
		const { pathname } = new URL(src);
		const photosMatch = pathname.match(/\/photos\/([^/]+)/);
		if (!photosMatch) {
			return undefined;
		}
		return photosMatch[1].match(/([a-zA-Z0-9_-]{11})$/)?.[1];
	} catch {
		return undefined;
	}
}

function isUnsplashCdnUrl(src: string): boolean {
	try {
		const { hostname } = new URL(src);
		return hostname === "images.unsplash.com" || hostname === "plus.unsplash.com";
	} catch {
		return false;
	}
}

function withImageParams(src: string, width: number, height: number): string {
	const url = new URL(src);
	url.searchParams.set("w", String(width));
	url.searchParams.set("h", String(height));
	url.searchParams.set("fit", "crop");
	url.searchParams.set("auto", "format");
	url.searchParams.set("q", "80");
	url.searchParams.delete("dl");
	return url.toString();
}

function cdnUrlFromResponse(response: Response): string | undefined {
	const location = response.headers.get("location");
	if (location && isUnsplashCdnUrl(location)) {
		return location;
	}
	if (isUnsplashCdnUrl(response.url)) {
		return response.url;
	}
	return undefined;
}

function unsplashDownloadUrl(photoId: string, width: number): string {
	return `https://unsplash.com/photos/${photoId}/download?force=true&w=${width}`;
}

const cdnUrlByPhotoId = new Map<string, string>();

async function lookupUnsplashCdnUrl(photoId: string): Promise<string | undefined> {
	const downloadUrl = `https://unsplash.com/photos/${photoId}/download?force=true`;
	const headers = { Accept: "*/*" };

	try {
		const response = await fetch(downloadUrl, {
			method: "GET",
			redirect: "follow",
			headers,
		});
		const cdnUrl = cdnUrlFromResponse(response);
		void response.body?.cancel();
		return cdnUrl;
	} catch {
		return undefined;
	}
}

async function resolveUnsplashPhotoId(
	photoId: string,
	width: number,
	height: number
): Promise<string> {
	const cached = cdnUrlByPhotoId.get(photoId);
	if (cached) {
		return withImageParams(cached, width, height);
	}

	const cdnUrl = await lookupUnsplashCdnUrl(photoId);
	if (cdnUrl) {
		cdnUrlByPhotoId.set(photoId, cdnUrl);
		return withImageParams(cdnUrl, width, height);
	}

	return unsplashDownloadUrl(photoId, width);
}

async function resolveUnsplashImage(src: string, width: number, height: number): Promise<string> {
	if (!isUnsplashUrl(src)) {
		return src;
	}

	if (isUnsplashCdnUrl(src)) {
		return withImageParams(src, width, height);
	}

	const photoId = extractUnsplashPhotoId(src);
	if (!photoId) {
		return src;
	}

	return resolveUnsplashPhotoId(photoId, width, height);
}

export async function resolveHeroImage(src: string): Promise<string> {
	return resolveUnsplashImage(src, HERO_IMAGE_WIDTH, HERO_IMAGE_HEIGHT);
}

export async function resolveOgImage(src: string): Promise<string> {
	return resolveUnsplashImage(src, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT);
}
