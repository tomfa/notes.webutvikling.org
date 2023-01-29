declare module "astro:content" {
	export { z } from "astro/zod";
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseCollectionConfig<S extends import("astro/zod").ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>["id"];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import("astro/zod").infer<import("astro/zod").ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import("astro/zod").ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof (typeof entryMap)[C]>(
		collection: C,
		entryKey: E
	): Promise<(typeof entryMap)[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof (typeof entryMap)[C]
	>(
		collection: C,
		filter?: (data: (typeof entryMap)[C][E]) => boolean
	): Promise<((typeof entryMap)[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import("astro/zod").infer<
		import("astro/zod").ZodObject<Required<ContentConfig["collections"][C]>["schema"]>
	>;

	type Render = {
		render(): Promise<{
			Content: import("astro").MarkdownInstance<{}>["Content"];
			headings: import("astro").MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		article: {
			"2023-01-14-state-of-js-2022/index.md": {
				id: "2023-01-14-state-of-js-2022/index.md";
				slug: "2023-01-14-state-of-js-2022";
				body: string;
				collection: "article";
				data: any;
			};
		};
		post: {
			"2013-12-03-alfred-for-windows/index.md": {
				id: "2013-12-03-alfred-for-windows/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2013-12-03-chrome-addon-statistics/index.md": {
				id: "2013-12-03-chrome-addon-statistics/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2013-12-03-humorteste-sosiale-medier/index.md": {
				id: "2013-12-03-humorteste-sosiale-medier/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2013-12-04-sftp-in-finder/index.md": {
				id: "2013-12-04-sftp-in-finder/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-02-03-cron-tabs/index.md": {
				id: "2014-02-03-cron-tabs/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-02-03-git-replace-master-branch/index.md": {
				id: "2014-02-03-git-replace-master-branch/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-02-04-icons/index.md": {
				id: "2014-02-04-icons/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-02-04-track-custom-events-with-google-analytics/index.md": {
				id: "2014-02-04-track-custom-events-with-google-analytics/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-02-05-facebook-invite-all-friends-to-event/index.md": {
				id: "2014-02-05-facebook-invite-all-friends-to-event/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-02-18-automatic-mysql-and-ftp-backup/index.md": {
				id: "2014-02-18-automatic-mysql-and-ftp-backup/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-03-03-git-repo-on-ftp-server/index.md": {
				id: "2014-03-03-git-repo-on-ftp-server/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-03-03-mount-ftp-server-in-debian-using-curlftpfs/index.md": {
				id: "2014-03-03-mount-ftp-server-in-debian-using-curlftpfs/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-04-02-backup/index.md": {
				id: "2014-04-02-backup/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-04-06-clean-code-iii-functions/index.mdx": {
				id: "2014-04-06-clean-code-iii-functions/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-06-13-7-ineffective-coding-habits/index.mdx": {
				id: "2014-06-13-7-ineffective-coding-habits/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-09-21-fork-retry-resource-temporarily-unavailable/index.md": {
				id: "2014-09-21-fork-retry-resource-temporarily-unavailable/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-09-21-grunt-dont-worry-about-webkit-moz-when-typing-css/index.md": {
				id: "2014-09-21-grunt-dont-worry-about-webkit-moz-when-typing-css/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-10-07-building-a-better-bootstrap/index.mdx": {
				id: "2014-10-07-building-a-better-bootstrap/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-12-08-darn-installation-of-python-3-4/index.md": {
				id: "2014-12-08-darn-installation-of-python-3-4/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-12-08-no-module-named-_sqlite3/index.md": {
				id: "2014-12-08-no-module-named-_sqlite3/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2014-12-28-get-python-virtualenv-pip-without-sudo/index.md": {
				id: "2014-12-28-get-python-virtualenv-pip-without-sudo/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-01-06-nginx-on-webfaction/index.md": {
				id: "2015-01-06-nginx-on-webfaction/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-01-10-django-autocomplete-in-shell/index.md": {
				id: "2015-01-10-django-autocomplete-in-shell/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-01-10-jquery-confirm-modal-using-bootstrap/index.md": {
				id: "2015-01-10-jquery-confirm-modal-using-bootstrap/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-04-03-fresh-macbook-and-a-set-of-neat-tools/index.md": {
				id: "2015-04-03-fresh-macbook-and-a-set-of-neat-tools/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-05-10-sending-and-receiving-json-over-bluetooth/index.md": {
				id: "2015-05-10-sending-and-receiving-json-over-bluetooth/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-08-26-center-content-in-html-mails-for-owa/index.md": {
				id: "2015-08-26-center-content-in-html-mails-for-owa/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-10-05-create-django-project-and-publish-on-heroku-script/index.md": {
				id: "2015-10-05-create-django-project-and-publish-on-heroku-script/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-10-08-the-easy-way-of-sending-newsletter-emails/index.md": {
				id: "2015-10-08-the-easy-way-of-sending-newsletter-emails/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-10-18-export-data-from-one-django-to-another-over-ssh/index.md": {
				id: "2015-10-18-export-data-from-one-django-to-another-over-ssh/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-10-22-creating-a-presentation/index.md": {
				id: "2015-10-22-creating-a-presentation/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-10-22-parallax-css-it-please/index.md": {
				id: "2015-10-22-parallax-css-it-please/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-11-04-monitor-driven-development/index.md": {
				id: "2015-11-04-monitor-driven-development/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-12-show-environment-variables-in-heroku/index.md": {
				id: "2015-12-12-show-environment-variables-in-heroku/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-13-add-s3-bucket-using-terraform/index.mdx": {
				id: "2015-12-13-add-s3-bucket-using-terraform/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-13-curl-headers-only/index.md": {
				id: "2015-12-13-curl-headers-only/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-13-django-on-heroku-with-aws-s3-bucket-for-static-and-media-files/index.md": {
				id: "2015-12-13-django-on-heroku-with-aws-s3-bucket-for-static-and-media-files/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-13-django-rewrite-redirect-to-new-urls/index.md": {
				id: "2015-12-13-django-rewrite-redirect-to-new-urls/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-21-add-s3-bucket-using-awscli-example/index.md": {
				id: "2015-12-21-add-s3-bucket-using-awscli-example/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2015-12-27-sending-sms-from-python-via-your-phone/index.md": {
				id: "2015-12-27-sending-sms-from-python-via-your-phone/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-01-04-chromes-awesome-developer-tools/index.mdx": {
				id: "2016-01-04-chromes-awesome-developer-tools/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-01-04-profiling-javascript-in-chrome-developer-tools/index.md": {
				id: "2016-01-04-profiling-javascript-in-chrome-developer-tools/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-03-18-aws-rules-of-thumb-notes/index.md": {
				id: "2016-03-18-aws-rules-of-thumb-notes/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-04-21-sexy-webdeveloper-links/index.md": {
				id: "2016-04-21-sexy-webdeveloper-links/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-05-09-grep-middle-of-file-unix/index.md": {
				id: "2016-05-09-grep-middle-of-file-unix/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-05-25-how-to-add-hubot-to-slack/index.md": {
				id: "2016-05-25-how-to-add-hubot-to-slack/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-04-react-intro-notes/index.md": {
				id: "2016-07-04-react-intro-notes/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-13-set-index-html-as-default-file-on-s3-bucket/index.md": {
				id: "2016-07-13-set-index-html-as-default-file-on-s3-bucket/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-19-d3-article-combo-ideas/index.mdx": {
				id: "2016-07-19-d3-article-combo-ideas/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-20-converting-svg-to-png-with-javascript-cross-browser/index.md": {
				id: "2016-07-20-converting-svg-to-png-with-javascript-cross-browser/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-20-es6-notes/index.md": {
				id: "2016-07-20-es6-notes/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-20-javascripts-var-let-and-const/index.md": {
				id: "2016-07-20-javascripts-var-let-and-const/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-29-git-cheatsheet/index.md": {
				id: "2016-07-29-git-cheatsheet/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-07-31-porting-a-react-app-to-phonegap/index.md": {
				id: "2016-07-31-porting-a-react-app-to-phonegap/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-08-02-adding-freshdesk-to-slack/index.md": {
				id: "2016-08-02-adding-freshdesk-to-slack/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-08-02-startup-workflow-toolkit/index.md": {
				id: "2016-08-02-startup-workflow-toolkit/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-08-11-aws-codepipeline/index.md": {
				id: "2016-08-11-aws-codepipeline/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-08-12-s3-bucket-cloudfront-using-terraform/index.mdx": {
				id: "2016-08-12-s3-bucket-cloudfront-using-terraform/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-03-aws-send-ec2-logs-to-slack/index.md": {
				id: "2016-09-03-aws-send-ec2-logs-to-slack/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-03-send-aws-cloudwatch-alarms-to-slack/index.md": {
				id: "2016-09-03-send-aws-cloudwatch-alarms-to-slack/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-06-aws-elastic-beanstalk/index.md": {
				id: "2016-09-06-aws-elastic-beanstalk/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-07-create-elastic-beanstalk-app-with-java-8/index.md": {
				id: "2016-09-07-create-elastic-beanstalk-app-with-java-8/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-14-build-screen-bootup/index.md": {
				id: "2016-09-14-build-screen-bootup/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-django-with-aws-s3-media-files-on-heroku/index.md": {
				id: "2016-09-20-django-with-aws-s3-media-files-on-heroku/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-elasticsearch-notes/index.md": {
				id: "2016-09-20-elasticsearch-notes/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-gradient-background-thing/index.md": {
				id: "2016-09-20-gradient-background-thing/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-java-jersey-jwt-authentication-for-rest-services/index.md": {
				id: "2016-09-20-java-jersey-jwt-authentication-for-rest-services/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-minimizing-webpack-builds/index.md": {
				id: "2016-09-20-minimizing-webpack-builds/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-the-list-of-learn-things/index.md": {
				id: "2016-09-20-the-list-of-learn-things/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-20-using-aws-route-53-and-ses-to-handle-dns-and-e-mail/index.md": {
				id: "2016-09-20-using-aws-route-53-and-ses-to-handle-dns-and-e-mail/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-23-howto-aws-cloudfront-with-ssl-and-your-domain/index.md": {
				id: "2016-09-23-howto-aws-cloudfront-with-ssl-and-your-domain/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-25-graphql/index.mdx": {
				id: "2016-09-25-graphql/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-09-26-animations-in-react/index.md": {
				id: "2016-09-26-animations-in-react/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-10-13-why-is-javascript-so-popular/index.md": {
				id: "2016-10-13-why-is-javascript-so-popular/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-10-15-elastic-beanstalk-in-a-vpc/index.md": {
				id: "2016-10-15-elastic-beanstalk-in-a-vpc/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-10-16-elastic-beanstalk-with-terraform/index.md": {
				id: "2016-10-16-elastic-beanstalk-with-terraform/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-10-18-the-consequenses-of-being-a-mouth-breather/index.md": {
				id: "2016-10-18-the-consequenses-of-being-a-mouth-breather/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-10-23-custom-slack-slash-commands-on-heroku/index.md": {
				id: "2016-10-23-custom-slack-slash-commands-on-heroku/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-10-26-priser-p-betalingslsninger/index.md": {
				id: "2016-10-26-priser-p-betalingslsninger/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-11-09-getting-started-with-hubot-slack/index.md": {
				id: "2016-11-09-getting-started-with-hubot-slack/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-11-17-aws-s3-and-cloudfront-workshop/index.md": {
				id: "2016-11-17-aws-s3-and-cloudfront-workshop/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-11-29-access-google-analytics-api-with-oauth-token/index.md": {
				id: "2016-11-29-access-google-analytics-api-with-oauth-token/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-11-29-how-to-add-web-app-manifest/index.md": {
				id: "2016-11-29-how-to-add-web-app-manifest/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2016-12-01-cloud-benchmark/index.md": {
				id: "2016-12-01-cloud-benchmark/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-01-14-what-skills-does-an-it-consultant-need/index.md": {
				id: "2017-01-14-what-skills-does-an-it-consultant-need/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-03-26-adding-a-service-worker/index.md": {
				id: "2017-03-26-adding-a-service-worker/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-03-29-semantic-vs-content-independent-css/index.md": {
				id: "2017-03-29-semantic-vs-content-independent-css/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-03-30-on-the-topic-of-css-systems/index.md": {
				id: "2017-03-30-on-the-topic-of-css-systems/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-03-31-prettier-javascript/index.mdx": {
				id: "2017-03-31-prettier-javascript/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-04-02-creating-a-google-chrome-extension/index.md": {
				id: "2017-04-02-creating-a-google-chrome-extension/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-10-22-adding-a-python-api-handler-with-serverless/index.md": {
				id: "2017-10-22-adding-a-python-api-handler-with-serverless/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2017-10-31-boto3-copying-and-creating-files-cloudfront-invalidations/index.md": {
				id: "2017-10-31-boto3-copying-and-creating-files-cloudfront-invalidations/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2018-08-26-logic-pro-keyboard-shortcuts/index.md": {
				id: "2018-08-26-logic-pro-keyboard-shortcuts/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2018-11-15-quick-http-benchmarking-with-curl/index.md": {
				id: "2018-11-15-quick-http-benchmarking-with-curl/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2018-11-17-coonsidering-websockets/index.md": {
				id: "2018-11-17-coonsidering-websockets/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2019-08-24-finding-postgres-logs/index.md": {
				id: "2019-08-24-finding-postgres-logs/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-05-09-why-use-exact-types-in-flow/index.md": {
				id: "2020-05-09-why-use-exact-types-in-flow/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-05-16-a-reminder-about-standsups/index.md": {
				id: "2020-05-16-a-reminder-about-standsups/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-05-18-pull-request-mountain-code/index.md": {
				id: "2020-05-18-pull-request-mountain-code/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-05-20-gatsby-intro/index.mdx": {
				id: "2020-05-20-gatsby-intro/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-05-21-default-exports/index.mdx": {
				id: "2020-05-21-default-exports/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-05-26-ide-shortcuts/index.mdx": {
				id: "2020-05-26-ide-shortcuts/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-06-03-post-setup-setup-of-new-mac/index.md": {
				id: "2020-06-03-post-setup-setup-of-new-mac/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-06-19-mp4-to-gifs/index.mdx": {
				id: "2020-06-19-mp4-to-gifs/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-06-21-stop-using-defaultprops/index.md": {
				id: "2020-06-21-stop-using-defaultprops/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-06-22-github-clickup-integration/index.md": {
				id: "2020-06-22-github-clickup-integration/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-06-23-git-messages-and-branch-names/index.md": {
				id: "2020-06-23-git-messages-and-branch-names/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-06-28-redux-hooks/index.md": {
				id: "2020-06-28-redux-hooks/index.md";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-07-05-react-hooks/index.mdx": {
				id: "2020-07-05-react-hooks/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-07-05-the-heart-of-agile/index.mdx": {
				id: "2020-07-05-the-heart-of-agile/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-07-06-[package]-has-unmet-peer-dependency/index.mdx": {
				id: "2020-07-06-[package]-has-unmet-peer-dependency/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-07-06-eslint-config/index.mdx": {
				id: "2020-07-06-eslint-config/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-07-28-why-leaders-eat-last/index.mdx": {
				id: "2020-07-28-why-leaders-eat-last/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-08-15-blitzscaling/index.mdx": {
				id: "2020-08-15-blitzscaling/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-08-17-blitzscaling-management/index.mdx": {
				id: "2020-08-17-blitzscaling-management/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2020-09-15-passbolt-on-heroku/index.mdx": {
				id: "2020-09-15-passbolt-on-heroku/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-02-18-calendar-api/index.mdx": {
				id: "2021-02-18-calendar-api/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-19-loading-webfonts/index.mdx": {
				id: "2021-04-19-loading-webfonts/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-21-1password-vs-lastpass-for-teams/index.mdx": {
				id: "2021-04-21-1password-vs-lastpass-for-teams/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-23-adding-system-metrics-dashboard-to-logz.io/index.mdx": {
				id: "2021-04-23-adding-system-metrics-dashboard-to-logz.io/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-23-use-git-bisect/index.mdx": {
				id: "2021-04-23-use-git-bisect/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-24-the-effective-engineer/index.mdx": {
				id: "2021-04-24-the-effective-engineer/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-26-marketing-tips/index.mdx": {
				id: "2021-04-26-marketing-tips/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-04-27-make-raspberry-pi-your-status-screen/index.mdx": {
				id: "2021-04-27-make-raspberry-pi-your-status-screen/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-05-01-postgres-table-should-be-lowercased/index.mdx": {
				id: "2021-05-01-postgres-table-should-be-lowercased/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-05-02-how-will-you-measure-your-life/index.mdx": {
				id: "2021-05-02-how-will-you-measure-your-life/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-05-20-nextjs-store-state-in-url-query/index.mdx": {
				id: "2021-05-20-nextjs-store-state-in-url-query/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-05-21-npm-yarn-merger-script/index.mdx": {
				id: "2021-05-21-npm-yarn-merger-script/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-05-22-rebrand-the-project/index.mdx": {
				id: "2021-05-22-rebrand-the-project/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-05-23-set-up-npm-package-deployment/index.mdx": {
				id: "2021-05-23-set-up-npm-package-deployment/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-07-03-aurora-serverless-is-not-for-your-hobby-project/index.mdx": {
				id: "2021-07-03-aurora-serverless-is-not-for-your-hobby-project/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-07-04-deploying-typescript-graphql-api-to-gcloud-functions/index.mdx": {
				id: "2021-07-04-deploying-typescript-graphql-api-to-gcloud-functions/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-07-12-no-rules-rules/index.mdx": {
				id: "2021-07-12-no-rules-rules/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-07-21-creating-an-app/index.mdx": {
				id: "2021-07-21-creating-an-app/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-10-09-firebase-highscore-this-month/index.mdx": {
				id: "2021-10-09-firebase-highscore-this-month/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-10-10-firebase-data-modelling/index.mdx": {
				id: "2021-10-10-firebase-data-modelling/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-10-14-video-wont-render-on-iphone/index.mdx": {
				id: "2021-10-14-video-wont-render-on-iphone/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-10-19-starting-bigquery/index.mdx": {
				id: "2021-10-19-starting-bigquery/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-10-22-postgres-should-get-builtin-connection-pooling/index.mdx": {
				id: "2021-10-22-postgres-should-get-builtin-connection-pooling/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-11-22-structured-logs/index.mdx": {
				id: "2021-11-22-structured-logs/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-12-01-use-plain-text-emails/index.mdx": {
				id: "2021-12-01-use-plain-text-emails/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2021-12-02-my-main-motivation/index.mdx": {
				id: "2021-12-02-my-main-motivation/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2022-05-07-choosing-an-email-provider/index.mdx": {
				id: "2022-05-07-choosing-an-email-provider/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
			"2022-09-13-modeling-sales/index.mdx": {
				id: "2022-09-13-modeling-sales/index.mdx";
				slug: string;
				body: string;
				collection: "post";
				data: InferEntrySchema<"post">;
			};
		};
	};

	type ContentConfig = typeof import("./config");
}
