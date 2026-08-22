type SiteMeta = {
	title: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	ogType?: "website" | "article";
	publishDate?: Date;
	markdownUrl?: string;
};

export type { SiteMeta };
