declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"post": {
"2013-12-03-alfred-for-windows/index.md": {
  id: "2013-12-03-alfred-for-windows/index.md",
  slug: "2013-12-03-alfred-for-windows",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2013-12-03-chrome-addon-statistics/index.md": {
  id: "2013-12-03-chrome-addon-statistics/index.md",
  slug: "2013-12-03-chrome-addon-statistics",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2013-12-03-humorteste-sosiale-medier/index.md": {
  id: "2013-12-03-humorteste-sosiale-medier/index.md",
  slug: "2013-12-03-humorteste-sosiale-medier",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2013-12-04-sftp-in-finder/index.md": {
  id: "2013-12-04-sftp-in-finder/index.md",
  slug: "2013-12-04-sftp-in-finder",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-02-03-cron-tabs/index.md": {
  id: "2014-02-03-cron-tabs/index.md",
  slug: "2014-02-03-cron-tabs",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-02-03-git-replace-master-branch/index.md": {
  id: "2014-02-03-git-replace-master-branch/index.md",
  slug: "2014-02-03-git-replace-master-branch",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-02-04-icons/index.md": {
  id: "2014-02-04-icons/index.md",
  slug: "2014-02-04-icons",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-02-04-track-custom-events-with-google-analytics/index.md": {
  id: "2014-02-04-track-custom-events-with-google-analytics/index.md",
  slug: "2014-02-04-track-custom-events-with-google-analytics",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-02-05-facebook-invite-all-friends-to-event/index.md": {
  id: "2014-02-05-facebook-invite-all-friends-to-event/index.md",
  slug: "2014-02-05-facebook-invite-all-friends-to-event",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-02-18-automatic-mysql-and-ftp-backup/index.md": {
  id: "2014-02-18-automatic-mysql-and-ftp-backup/index.md",
  slug: "2014-02-18-automatic-mysql-and-ftp-backup",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-03-03-git-repo-on-ftp-server/index.md": {
  id: "2014-03-03-git-repo-on-ftp-server/index.md",
  slug: "2014-03-03-git-repo-on-ftp-server",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-03-03-mount-ftp-server-in-debian-using-curlftpfs/index.md": {
  id: "2014-03-03-mount-ftp-server-in-debian-using-curlftpfs/index.md",
  slug: "2014-03-03-mount-ftp-server-in-debian-using-curlftpfs",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-04-02-backup/index.md": {
  id: "2014-04-02-backup/index.md",
  slug: "2014-04-02-backup",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-04-06-clean-code-iii-functions/index.md": {
  id: "2014-04-06-clean-code-iii-functions/index.md",
  slug: "2014-04-06-clean-code-iii-functions",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-06-13-7-ineffective-coding-habits/index.md": {
  id: "2014-06-13-7-ineffective-coding-habits/index.md",
  slug: "2014-06-13-7-ineffective-coding-habits",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-09-21-fork-retry-resource-temporarily-unavailable/index.md": {
  id: "2014-09-21-fork-retry-resource-temporarily-unavailable/index.md",
  slug: "2014-09-21-fork-retry-resource-temporarily-unavailable",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-09-21-grunt-dont-worry-about-webkit-moz-when-typing-css/index.md": {
  id: "2014-09-21-grunt-dont-worry-about-webkit-moz-when-typing-css/index.md",
  slug: "2014-09-21-grunt-dont-worry-about-webkit-moz-when-typing-css",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-10-07-building-a-better-bootstrap/index.md": {
  id: "2014-10-07-building-a-better-bootstrap/index.md",
  slug: "2014-10-07-building-a-better-bootstrap",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-12-08-darn-installation-of-python-3-4/index.md": {
  id: "2014-12-08-darn-installation-of-python-3-4/index.md",
  slug: "2014-12-08-darn-installation-of-python-3-4",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-12-08-no-module-named-_sqlite3/index.md": {
  id: "2014-12-08-no-module-named-_sqlite3/index.md",
  slug: "2014-12-08-no-module-named-_sqlite3",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2014-12-28-get-python-virtualenv-pip-without-sudo/index.md": {
  id: "2014-12-28-get-python-virtualenv-pip-without-sudo/index.md",
  slug: "2014-12-28-get-python-virtualenv-pip-without-sudo",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-01-06-nginx-on-webfaction/index.md": {
  id: "2015-01-06-nginx-on-webfaction/index.md",
  slug: "2015-01-06-nginx-on-webfaction",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-01-10-django-autocomplete-in-shell/index.md": {
  id: "2015-01-10-django-autocomplete-in-shell/index.md",
  slug: "2015-01-10-django-autocomplete-in-shell",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-01-10-jquery-confirm-modal-using-bootstrap/index.md": {
  id: "2015-01-10-jquery-confirm-modal-using-bootstrap/index.md",
  slug: "2015-01-10-jquery-confirm-modal-using-bootstrap",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-04-03-fresh-macbook-and-a-set-of-neat-tools/index.md": {
  id: "2015-04-03-fresh-macbook-and-a-set-of-neat-tools/index.md",
  slug: "2015-04-03-fresh-macbook-and-a-set-of-neat-tools",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-05-10-sending-and-receiving-json-over-bluetooth/index.md": {
  id: "2015-05-10-sending-and-receiving-json-over-bluetooth/index.md",
  slug: "2015-05-10-sending-and-receiving-json-over-bluetooth",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-08-26-center-content-in-html-mails-for-owa/index.md": {
  id: "2015-08-26-center-content-in-html-mails-for-owa/index.md",
  slug: "2015-08-26-center-content-in-html-mails-for-owa",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-10-05-create-django-project-and-publish-on-heroku-script/index.md": {
  id: "2015-10-05-create-django-project-and-publish-on-heroku-script/index.md",
  slug: "2015-10-05-create-django-project-and-publish-on-heroku-script",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-10-08-the-easy-way-of-sending-newsletter-emails/index.md": {
  id: "2015-10-08-the-easy-way-of-sending-newsletter-emails/index.md",
  slug: "2015-10-08-the-easy-way-of-sending-newsletter-emails",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-10-18-export-data-from-one-django-to-another-over-ssh/index.md": {
  id: "2015-10-18-export-data-from-one-django-to-another-over-ssh/index.md",
  slug: "2015-10-18-export-data-from-one-django-to-another-over-ssh",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-10-22-creating-a-presentation/index.md": {
  id: "2015-10-22-creating-a-presentation/index.md",
  slug: "2015-10-22-creating-a-presentation",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-10-22-parallax-css-it-please/index.md": {
  id: "2015-10-22-parallax-css-it-please/index.md",
  slug: "2015-10-22-parallax-css-it-please",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-11-04-monitor-driven-development/index.md": {
  id: "2015-11-04-monitor-driven-development/index.md",
  slug: "2015-11-04-monitor-driven-development",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-12-show-environment-variables-in-heroku/index.md": {
  id: "2015-12-12-show-environment-variables-in-heroku/index.md",
  slug: "2015-12-12-show-environment-variables-in-heroku",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-13-add-s3-bucket-using-terraform/index.md": {
  id: "2015-12-13-add-s3-bucket-using-terraform/index.md",
  slug: "2015-12-13-add-s3-bucket-using-terraform",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-13-curl-headers-only/index.md": {
  id: "2015-12-13-curl-headers-only/index.md",
  slug: "2015-12-13-curl-headers-only",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-13-django-on-heroku-with-aws-s3-bucket-for-static-and-media-files/index.md": {
  id: "2015-12-13-django-on-heroku-with-aws-s3-bucket-for-static-and-media-files/index.md",
  slug: "2015-12-13-django-on-heroku-with-aws-s3-bucket-for-static-and-media-files",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-13-django-rewrite-redirect-to-new-urls/index.md": {
  id: "2015-12-13-django-rewrite-redirect-to-new-urls/index.md",
  slug: "2015-12-13-django-rewrite-redirect-to-new-urls",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-21-add-s3-bucket-using-awscli-example/index.md": {
  id: "2015-12-21-add-s3-bucket-using-awscli-example/index.md",
  slug: "2015-12-21-add-s3-bucket-using-awscli-example",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-12-27-sending-sms-from-python-via-your-phone/index.md": {
  id: "2015-12-27-sending-sms-from-python-via-your-phone/index.md",
  slug: "2015-12-27-sending-sms-from-python-via-your-phone",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-01-04-chromes-awesome-developer-tools/index.md": {
  id: "2016-01-04-chromes-awesome-developer-tools/index.md",
  slug: "2016-01-04-chromes-awesome-developer-tools",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-01-04-profiling-javascript-in-chrome-developer-tools/index.md": {
  id: "2016-01-04-profiling-javascript-in-chrome-developer-tools/index.md",
  slug: "2016-01-04-profiling-javascript-in-chrome-developer-tools",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-03-18-aws-rules-of-thumb-notes/index.md": {
  id: "2016-03-18-aws-rules-of-thumb-notes/index.md",
  slug: "2016-03-18-aws-rules-of-thumb-notes",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-04-21-sexy-webdeveloper-links/index.md": {
  id: "2016-04-21-sexy-webdeveloper-links/index.md",
  slug: "2016-04-21-sexy-webdeveloper-links",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-05-09-grep-middle-of-file-unix/index.md": {
  id: "2016-05-09-grep-middle-of-file-unix/index.md",
  slug: "2016-05-09-grep-middle-of-file-unix",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-05-25-how-to-add-hubot-to-slack/index.md": {
  id: "2016-05-25-how-to-add-hubot-to-slack/index.md",
  slug: "2016-05-25-how-to-add-hubot-to-slack",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-04-react-intro-notes/index.md": {
  id: "2016-07-04-react-intro-notes/index.md",
  slug: "2016-07-04-react-intro-notes",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-13-set-index-html-as-default-file-on-s3-bucket/index.md": {
  id: "2016-07-13-set-index-html-as-default-file-on-s3-bucket/index.md",
  slug: "2016-07-13-set-index-html-as-default-file-on-s3-bucket",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-19-d3-article-combo-ideas/index.md": {
  id: "2016-07-19-d3-article-combo-ideas/index.md",
  slug: "2016-07-19-d3-article-combo-ideas",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-20-converting-svg-to-png-with-javascript-cross-browser/index.md": {
  id: "2016-07-20-converting-svg-to-png-with-javascript-cross-browser/index.md",
  slug: "2016-07-20-converting-svg-to-png-with-javascript-cross-browser",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-20-es6-notes/index.md": {
  id: "2016-07-20-es6-notes/index.md",
  slug: "2016-07-20-es6-notes",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-20-javascripts-var-let-and-const/index.md": {
  id: "2016-07-20-javascripts-var-let-and-const/index.md",
  slug: "2016-07-20-javascripts-var-let-and-const",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-29-git-cheatsheet/index.md": {
  id: "2016-07-29-git-cheatsheet/index.md",
  slug: "2016-07-29-git-cheatsheet",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-07-31-porting-a-react-app-to-phonegap/index.md": {
  id: "2016-07-31-porting-a-react-app-to-phonegap/index.md",
  slug: "2016-07-31-porting-a-react-app-to-phonegap",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-08-02-adding-freshdesk-to-slack/index.md": {
  id: "2016-08-02-adding-freshdesk-to-slack/index.md",
  slug: "2016-08-02-adding-freshdesk-to-slack",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-08-02-startup-workflow-toolkit/index.md": {
  id: "2016-08-02-startup-workflow-toolkit/index.md",
  slug: "2016-08-02-startup-workflow-toolkit",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-08-11-aws-codepipeline/index.md": {
  id: "2016-08-11-aws-codepipeline/index.md",
  slug: "2016-08-11-aws-codepipeline",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-08-12-s3-bucket-cloudfront-using-terraform/index.md": {
  id: "2016-08-12-s3-bucket-cloudfront-using-terraform/index.md",
  slug: "2016-08-12-s3-bucket-cloudfront-using-terraform",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-03-aws-send-ec2-logs-to-slack/index.md": {
  id: "2016-09-03-aws-send-ec2-logs-to-slack/index.md",
  slug: "2016-09-03-aws-send-ec2-logs-to-slack",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-03-send-aws-cloudwatch-alarms-to-slack/index.md": {
  id: "2016-09-03-send-aws-cloudwatch-alarms-to-slack/index.md",
  slug: "2016-09-03-send-aws-cloudwatch-alarms-to-slack",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-06-aws-elastic-beanstalk/index.md": {
  id: "2016-09-06-aws-elastic-beanstalk/index.md",
  slug: "2016-09-06-aws-elastic-beanstalk",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-07-create-elastic-beanstalk-app-with-java-8/index.md": {
  id: "2016-09-07-create-elastic-beanstalk-app-with-java-8/index.md",
  slug: "2016-09-07-create-elastic-beanstalk-app-with-java-8",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-14-build-screen-bootup/index.md": {
  id: "2016-09-14-build-screen-bootup/index.md",
  slug: "2016-09-14-build-screen-bootup",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-django-with-aws-s3-media-files-on-heroku/index.md": {
  id: "2016-09-20-django-with-aws-s3-media-files-on-heroku/index.md",
  slug: "2016-09-20-django-with-aws-s3-media-files-on-heroku",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-elasticsearch-notes/index.md": {
  id: "2016-09-20-elasticsearch-notes/index.md",
  slug: "2016-09-20-elasticsearch-notes",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-gradient-background-thing/index.md": {
  id: "2016-09-20-gradient-background-thing/index.md",
  slug: "2016-09-20-gradient-background-thing",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-java-jersey-jwt-authentication-for-rest-services/index.md": {
  id: "2016-09-20-java-jersey-jwt-authentication-for-rest-services/index.md",
  slug: "2016-09-20-java-jersey-jwt-authentication-for-rest-services",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-minimizing-webpack-builds/index.md": {
  id: "2016-09-20-minimizing-webpack-builds/index.md",
  slug: "2016-09-20-minimizing-webpack-builds",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-the-list-of-learn-things/index.md": {
  id: "2016-09-20-the-list-of-learn-things/index.md",
  slug: "2016-09-20-the-list-of-learn-things",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-20-using-aws-route-53-and-ses-to-handle-dns-and-e-mail/index.md": {
  id: "2016-09-20-using-aws-route-53-and-ses-to-handle-dns-and-e-mail/index.md",
  slug: "2016-09-20-using-aws-route-53-and-ses-to-handle-dns-and-e-mail",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-23-howto-aws-cloudfront-with-ssl-and-your-domain/index.md": {
  id: "2016-09-23-howto-aws-cloudfront-with-ssl-and-your-domain/index.md",
  slug: "2016-09-23-howto-aws-cloudfront-with-ssl-and-your-domain",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-25-graphql/index.md": {
  id: "2016-09-25-graphql/index.md",
  slug: "2016-09-25-graphql",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-09-26-animations-in-react/index.md": {
  id: "2016-09-26-animations-in-react/index.md",
  slug: "2016-09-26-animations-in-react",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-10-13-why-is-javascript-so-popular/index.md": {
  id: "2016-10-13-why-is-javascript-so-popular/index.md",
  slug: "2016-10-13-why-is-javascript-so-popular",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-10-15-elastic-beanstalk-in-a-vpc/index.md": {
  id: "2016-10-15-elastic-beanstalk-in-a-vpc/index.md",
  slug: "2016-10-15-elastic-beanstalk-in-a-vpc",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-10-16-elastic-beanstalk-with-terraform/index.md": {
  id: "2016-10-16-elastic-beanstalk-with-terraform/index.md",
  slug: "2016-10-16-elastic-beanstalk-with-terraform",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-10-18-the-consequenses-of-being-a-mouth-breather/index.md": {
  id: "2016-10-18-the-consequenses-of-being-a-mouth-breather/index.md",
  slug: "2016-10-18-the-consequenses-of-being-a-mouth-breather",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-10-23-custom-slack-slash-commands-on-heroku/index.md": {
  id: "2016-10-23-custom-slack-slash-commands-on-heroku/index.md",
  slug: "2016-10-23-custom-slack-slash-commands-on-heroku",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-10-26-priser-p-betalingslsninger/index.md": {
  id: "2016-10-26-priser-p-betalingslsninger/index.md",
  slug: "2016-10-26-priser-p-betalingslsninger",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-11-09-getting-started-with-hubot-slack/index.md": {
  id: "2016-11-09-getting-started-with-hubot-slack/index.md",
  slug: "2016-11-09-getting-started-with-hubot-slack",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-11-17-aws-s3-and-cloudfront-workshop/index.md": {
  id: "2016-11-17-aws-s3-and-cloudfront-workshop/index.md",
  slug: "2016-11-17-aws-s3-and-cloudfront-workshop",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-11-29-access-google-analytics-api-with-oauth-token/index.md": {
  id: "2016-11-29-access-google-analytics-api-with-oauth-token/index.md",
  slug: "2016-11-29-access-google-analytics-api-with-oauth-token",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-11-29-how-to-add-web-app-manifest/index.md": {
  id: "2016-11-29-how-to-add-web-app-manifest/index.md",
  slug: "2016-11-29-how-to-add-web-app-manifest",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-12-01-cloud-benchmark/index.md": {
  id: "2016-12-01-cloud-benchmark/index.md",
  slug: "2016-12-01-cloud-benchmark",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-01-14-what-skills-does-an-it-consultant-need/index.md": {
  id: "2017-01-14-what-skills-does-an-it-consultant-need/index.md",
  slug: "2017-01-14-what-skills-does-an-it-consultant-need",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-03-26-adding-a-service-worker/index.md": {
  id: "2017-03-26-adding-a-service-worker/index.md",
  slug: "2017-03-26-adding-a-service-worker",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-03-29-semantic-vs-content-independent-css/index.md": {
  id: "2017-03-29-semantic-vs-content-independent-css/index.md",
  slug: "2017-03-29-semantic-vs-content-independent-css",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-03-30-on-the-topic-of-css-systems/index.md": {
  id: "2017-03-30-on-the-topic-of-css-systems/index.md",
  slug: "2017-03-30-on-the-topic-of-css-systems",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-03-31-prettier-javascript/index.md": {
  id: "2017-03-31-prettier-javascript/index.md",
  slug: "2017-03-31-prettier-javascript",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-04-02-creating-a-google-chrome-extension/index.md": {
  id: "2017-04-02-creating-a-google-chrome-extension/index.md",
  slug: "2017-04-02-creating-a-google-chrome-extension",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-10-22-adding-a-python-api-handler-with-serverless/index.md": {
  id: "2017-10-22-adding-a-python-api-handler-with-serverless/index.md",
  slug: "2017-10-22-adding-a-python-api-handler-with-serverless",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2017-10-31-boto3-copying-and-creating-files-cloudfront-invalidations/index.md": {
  id: "2017-10-31-boto3-copying-and-creating-files-cloudfront-invalidations/index.md",
  slug: "2017-10-31-boto3-copying-and-creating-files-cloudfront-invalidations",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-08-26-logic-pro-keyboard-shortcuts/index.md": {
  id: "2018-08-26-logic-pro-keyboard-shortcuts/index.md",
  slug: "2018-08-26-logic-pro-keyboard-shortcuts",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-11-15-quick-http-benchmarking-with-curl/index.md": {
  id: "2018-11-15-quick-http-benchmarking-with-curl/index.md",
  slug: "2018-11-15-quick-http-benchmarking-with-curl",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-11-17-coonsidering-websockets/index.md": {
  id: "2018-11-17-coonsidering-websockets/index.md",
  slug: "2018-11-17-coonsidering-websockets",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2019-08-24-finding-postgres-logs/index.md": {
  id: "2019-08-24-finding-postgres-logs/index.md",
  slug: "2019-08-24-finding-postgres-logs",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-09-why-use-exact-types-in-flow/index.md": {
  id: "2020-05-09-why-use-exact-types-in-flow/index.md",
  slug: "2020-05-09-why-use-exact-types-in-flow",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-16-a-reminder-about-standsups/index.md": {
  id: "2020-05-16-a-reminder-about-standsups/index.md",
  slug: "2020-05-16-a-reminder-about-standsups",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-18-pull-request-mountain-code/index.md": {
  id: "2020-05-18-pull-request-mountain-code/index.md",
  slug: "2020-05-18-pull-request-mountain-code",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-20-gatsby-intro/index.mdx": {
  id: "2020-05-20-gatsby-intro/index.mdx",
  slug: "2020-05-20-gatsby-intro",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-21-default-exports/index.mdx": {
  id: "2020-05-21-default-exports/index.mdx",
  slug: "2020-05-21-default-exports",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-26-ide-shortcuts/index.mdx": {
  id: "2020-05-26-ide-shortcuts/index.mdx",
  slug: "2020-05-26-ide-shortcuts",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-03-post-setup-setup-of-new-mac/index.md": {
  id: "2020-06-03-post-setup-setup-of-new-mac/index.md",
  slug: "2020-06-03-post-setup-setup-of-new-mac",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-19-mp4-to-gif/index.mdx": {
  id: "2020-06-19-mp4-to-gif/index.mdx",
  slug: "2020-06-19-mp4-to-gif",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-21-stop-using-defaultprops/index.md": {
  id: "2020-06-21-stop-using-defaultprops/index.md",
  slug: "2020-06-21-stop-using-defaultprops",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-22-github-clickup-integration/index.md": {
  id: "2020-06-22-github-clickup-integration/index.md",
  slug: "2020-06-22-github-clickup-integration",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-23-git-messages-and-branch-names/index.md": {
  id: "2020-06-23-git-messages-and-branch-names/index.md",
  slug: "2020-06-23-git-messages-and-branch-names",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-28-redux-hooks/index.md": {
  id: "2020-06-28-redux-hooks/index.md",
  slug: "2020-06-28-redux-hooks",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-07-05-react-hooks/index.mdx": {
  id: "2020-07-05-react-hooks/index.mdx",
  slug: "2020-07-05-react-hooks",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-07-05-the-heart-of-agile/index.mdx": {
  id: "2020-07-05-the-heart-of-agile/index.mdx",
  slug: "2020-07-05-the-heart-of-agile",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-07-06-[package]-has-unmet-peer-dependency/index.mdx": {
  id: "2020-07-06-[package]-has-unmet-peer-dependency/index.mdx",
  slug: "2020-07-06-package-has-unmet-peer-dependency",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-07-06-eslint-config/index.mdx": {
  id: "2020-07-06-eslint-config/index.mdx",
  slug: "2020-07-06-eslint-config",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-07-28-why-leaders-eat-last/index.mdx": {
  id: "2020-07-28-why-leaders-eat-last/index.mdx",
  slug: "2020-07-28-why-leaders-eat-last",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-08-15-blitzscaling/index.mdx": {
  id: "2020-08-15-blitzscaling/index.mdx",
  slug: "2020-08-15-blitzscaling",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-08-17-blitzscaling-management/index.mdx": {
  id: "2020-08-17-blitzscaling-management/index.mdx",
  slug: "2020-08-17-blitzscaling-management",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-09-15-passbolt-on-heroku/index.mdx": {
  id: "2020-09-15-passbolt-on-heroku/index.mdx",
  slug: "2020-09-15-passbolt-on-heroku",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-02-18-calendar-api/index.mdx": {
  id: "2021-02-18-calendar-api/index.mdx",
  slug: "2021-02-18-calendar-api",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-19-loading-webfonts/index.mdx": {
  id: "2021-04-19-loading-webfonts/index.mdx",
  slug: "2021-04-19-loading-webfonts",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-21-1password-vs-lastpass-for-teams/index.mdx": {
  id: "2021-04-21-1password-vs-lastpass-for-teams/index.mdx",
  slug: "2021-04-21-1password-vs-lastpass-for-teams",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-23-adding-system-metrics-dashboard-to-logz.io/index.mdx": {
  id: "2021-04-23-adding-system-metrics-dashboard-to-logz.io/index.mdx",
  slug: "2021-04-23-adding-system-metrics-dashboard-to-logzio",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-23-use-git-bisect/index.mdx": {
  id: "2021-04-23-use-git-bisect/index.mdx",
  slug: "2021-04-23-use-git-bisect",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-24-the-effective-engineer/index.mdx": {
  id: "2021-04-24-the-effective-engineer/index.mdx",
  slug: "2021-04-24-the-effective-engineer",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-26-marketing-tips/index.mdx": {
  id: "2021-04-26-marketing-tips/index.mdx",
  slug: "2021-04-26-marketing-tips",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-04-27-make-raspberry-pi-your-status-screen/index.mdx": {
  id: "2021-04-27-make-raspberry-pi-your-status-screen/index.mdx",
  slug: "2021-04-27-make-raspberry-pi-your-status-screen",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-05-01-postgres-table-should-be-lowercased/index.mdx": {
  id: "2021-05-01-postgres-table-should-be-lowercased/index.mdx",
  slug: "2021-05-01-postgres-table-should-be-lowercased",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-05-02-how-will-you-measure-your-life/index.mdx": {
  id: "2021-05-02-how-will-you-measure-your-life/index.mdx",
  slug: "2021-05-02-how-will-you-measure-your-life",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-05-20-nextjs-store-state-in-url-query/index.mdx": {
  id: "2021-05-20-nextjs-store-state-in-url-query/index.mdx",
  slug: "2021-05-20-nextjs-store-state-in-url-query",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-05-21-npm-yarn-merger-script/index.mdx": {
  id: "2021-05-21-npm-yarn-merger-script/index.mdx",
  slug: "2021-05-21-npm-yarn-merger-script",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-05-22-rebrand-the-project/index.mdx": {
  id: "2021-05-22-rebrand-the-project/index.mdx",
  slug: "2021-05-22-rebrand-the-project",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-05-23-set-up-npm-package-deployment/index.mdx": {
  id: "2021-05-23-set-up-npm-package-deployment/index.mdx",
  slug: "2021-05-23-set-up-npm-package-deployment",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-07-03-aurora-serverless-is-not-for-your-hobby-project/index.mdx": {
  id: "2021-07-03-aurora-serverless-is-not-for-your-hobby-project/index.mdx",
  slug: "2021-07-03-aurora-serverless-is-not-for-your-hobby-project",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-07-04-deploying-typescript-graphql-api-to-gcloud-functions/index.mdx": {
  id: "2021-07-04-deploying-typescript-graphql-api-to-gcloud-functions/index.mdx",
  slug: "2021-07-04-deploying-typescript-graphql-api-to-gcloud-functions",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-07-12-no-rules-rules/index.mdx": {
  id: "2021-07-12-no-rules-rules/index.mdx",
  slug: "2021-07-12-no-rules-rules",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-07-21-creating-an-app/index.mdx": {
  id: "2021-07-21-creating-an-app/index.mdx",
  slug: "2021-07-21-creating-an-app",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-10-09-firebase-highscore-this-month/index.mdx": {
  id: "2021-10-09-firebase-highscore-this-month/index.mdx",
  slug: "2021-10-09-firebase-highscore-this-month",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-10-10-firebase-data-modelling/index.mdx": {
  id: "2021-10-10-firebase-data-modelling/index.mdx",
  slug: "2021-10-10-firebase-data-modelling",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-10-14-video-wont-render-on-iphone/index.mdx": {
  id: "2021-10-14-video-wont-render-on-iphone/index.mdx",
  slug: "2021-10-14-video-wont-render-on-iphone",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-10-19-starting-bigquery/index.mdx": {
  id: "2021-10-19-starting-bigquery/index.mdx",
  slug: "2021-10-19-starting-bigquery",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-10-22-postgres-should-get-builtin-connection-pooling/index.mdx": {
  id: "2021-10-22-postgres-should-get-builtin-connection-pooling/index.mdx",
  slug: "2021-10-22-postgres-should-get-builtin-connection-pooling",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-11-22-structured-logs/index.mdx": {
  id: "2021-11-22-structured-logs/index.mdx",
  slug: "2021-11-22-structured-logs",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-12-01-use-plain-text-emails/index.mdx": {
  id: "2021-12-01-use-plain-text-emails/index.mdx",
  slug: "2021-12-01-use-plain-text-emails",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-12-02-my-main-motivation/index.mdx": {
  id: "2021-12-02-my-main-motivation/index.mdx",
  slug: "2021-12-02-my-main-motivation",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-05-07-choosing-an-email-provider/index.mdx": {
  id: "2022-05-07-choosing-an-email-provider/index.mdx",
  slug: "2022-05-07-choosing-an-email-provider",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-09-13-modeling-sales/index.mdx": {
  id: "2022-09-13-modeling-sales/index.mdx",
  slug: "2022-09-13-modeling-sales",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"hello-world.mdx": {
  id: "hello-world.mdx",
  slug: "hello-world",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"second-post.md": {
  id: "second-post.md",
  slug: "second-post",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},

	};

	type ContentConfig = typeof import("./config");
}
