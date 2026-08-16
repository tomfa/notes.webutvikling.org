const HERO_IMAGE_WIDTH = 986;
const HERO_IMAGE_HEIGHT = 600;

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

function withHeroImageParams(src: string): string {
	const url = new URL(src);
	url.searchParams.set("w", String(HERO_IMAGE_WIDTH));
	url.searchParams.set("h", String(HERO_IMAGE_HEIGHT));
	url.searchParams.set("fit", "crop");
	url.searchParams.set("auto", "format");
	url.searchParams.set("q", "80");
	url.searchParams.delete("dl");
	return url.toString();
}

async function resolveUnsplashPhotoId(photoId: string): Promise<string> {
	const downloadUrl = `https://unsplash.com/photos/${photoId}/download?w=${HERO_IMAGE_WIDTH}`;
	const response = await fetch(downloadUrl, { method: "HEAD", redirect: "manual" });
	const location = response.headers.get("location");

	if (!location || !isUnsplashCdnUrl(location)) {
		throw new Error(
			`Could not resolve Unsplash photo "${photoId}". Use a photo page URL (https://unsplash.com/photos/<id>) or an images.unsplash.com URL.`
		);
	}

	return withHeroImageParams(location);
}

export async function resolveHeroImage(src: string): Promise<string> {
	if (!isUnsplashUrl(src)) {
		return src;
	}

	if (isUnsplashCdnUrl(src)) {
		return withHeroImageParams(src);
	}

	const photoId = extractUnsplashPhotoId(src);
	if (!photoId) {
		throw new Error(
			`Could not find an Unsplash photo id in "${src}". Use a photo page URL (https://unsplash.com/photos/<id>) or an images.unsplash.com URL.`
		);
	}

	return resolveUnsplashPhotoId(photoId);
}
