Blog for [notes.webutvikling.org](https://notes.webutvikling.org)

## Key Features

- Astro Fast 🚀
- TailwindCSS Utility classes
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- Dark / Light mode, using Tailwind and CSS variables
- [Astro Image Integration](https://docs.astro.build/en/guides/integrations-guide/image/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- Pagination
- [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
- Shiki code syntax styling
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Commands

Replace pnpm with your choice of npm / yarn

| Command        | Action                                                         |
| :------------- | :------------------------------------------------------------- |
| `pnpm install` | Installs dependencies                                          |
| `pnpm dev`     | Starts local dev server at `localhost:3000`                    |
| `pnpm build`   | Build your production site to `./dist/`                        |
| `pnpm preview` | Preview your build locally, before deploying                   |
| `pnpm sync`    | Generate types based on your config in `src/content/config.ts` |

## Deploy

You just push to `main`, and Github CI will pick it up and deploy it to Github Pages.

## Configure

- Edit the config file `src/site.config.ts` for basic site meta data
- Update file `astro.config.ts` site property with your own domain
- Replace & update files within the `/public` folder:
  - favicon.ico & other social icons
  - robots.txt - update the Sitemap url to your own domain
  - manifest.webmanifest
- Modify file `src/styles/global.css` with your own light and dark styles
- Create / edit posts for your blog within `src/content/post/` with .md/mdx file(s). See below for more details.
- Optional:
  - Fonts: This theme sets the body element to the font family `font-mono`, located in the global css file `src/styles/global.css`. You can change fonts by removing the variant `font-mono`, after which TailwindCSS will default to the `font-sans` [font family stack](https://tailwindcss.com/docs/font-family).

## Adding posts

This theme utilises [Content Collections](https://docs.astro.build/en/guides/content-collections/) to organise Markdown and/or MDX files, as well as type-checking frontmatter with a schema -> `src/content/config.ts`.

Adding a post is a simple as adding your .md(x) file(s) to the `src/content/post` folder, the filename of which will be used as the slug/url. The two posts included with this template are there as an example of how to structure your frontmatter. Additionally, the [Astro docs](https://docs.astro.build/en/guides/markdown-content/) has a detailed section on markdown pages.

### Frontmatter


#### Type post

A regular type blog post.

| Property (\* required) | Description                                                                                                                                                                       |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title \*               | Self explanatory. Used as the text link to the post, the h1 on the posts' page, and the pages title property. Has a max length of 60 chars, set in `src/content/config.ts`        |
| pubDate \*             | Again pretty simple. To change the date format/locale, currently **en-GB**, update/pass the **locale** arg to function **getFormattedDate**, found in `src/utils/date.ts`.        |
| category \*            | A category of post                                                                                                                                                                |
| description            | Similar to above, used as the seo description property. Has a min length of 50 and a max length of 160 chars, set in the post schema.                                             |
| tags                   | Tags are optional with any created post. Any new tag(s) will be shown in `yourdomain.com/posts` + `yourdomain.com/tags`, and generate the page(s) `yourdomain.com/tags/[yourTag]` |
| heroImage              | Optional URL of a post hero image                                                                                                                                                 |
| imageAlt               | image description of hero image                                                                                                                                                   |
| draft                  | set to true to hide from production build                                                                                                                                         |


#### Type link

A type of post with no content (only description). Like a link on reddit, but allowing you to write a paragraph.

| Property (\* required) | Description                                                                                                                                                                       |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title \*               | Self explanatory. Used as the text link to the post, the h1 on the posts' page, and the pages title property. Has a max length of 60 chars, set in `src/content/config.ts`        |
| pubDate \*             | Again pretty simple. To change the date format/locale, currently **en-GB**, update/pass the **locale** arg to function **getFormattedDate**, found in `src/utils/date.ts`.        |
| description \*         | Similar to above, used as the seo description property. Has a min length of 50 and a max length of 160 chars, set in the post schema.                                             |
| type \*                | A sort of category, `video`, `lib` or `article`.                                                                                                                                  |
| tags                   | Tags are optional with any created post. Any new tag(s) will be shown in `yourdomain.com/posts` + `yourdomain.com/tags`, and generate the page(s) `yourdomain.com/tags/[yourTag]` |
| heroImage              | Optional URL of a hero image, not visible atm                                                                                                                                     |
| imageAlt               | image description of hero image                                                                                                                                                   |
| draft                  | set to true to hide from production build                                                                                                                                         |

## Analytics

You may want to track the number of visitors you receive to your blog/website in order to understand trends and popular posts/pages you've created. There are a number of providers out there one could use, including web hosts such as [vercel](https://vercel.com/analytics), [netlify](https://www.netlify.com/products/analytics/), and [cloudflare](https://www.cloudflare.com/web-analytics/).

This theme/template doesn't include a specific solution due to there being a number of use cases and/or options which some people may or may not use.

You may be asked to included a snippet inside the **HEAD** tag of your website when setting it up, which can be found in `src/layouts/Base.astro`. Alternatively, you could add the snippet in `src/components/BaseHead.astro`.

Another popular provider is google analytics which you could integrate via the above method, or, for example adding [astro-google-analytics](https://www.npmjs.com/package/astro-google-analytics)

```bash
pnpm install astro-google-analytics
```

Edit `src/layouts/Base.astro`, and add:

```tsx
---
import { GoogleAnalytics } from 'astro-google-analytics';
// ...other imports
---

<head>
  <!-- Replace id with your own Google Analytics ID -->
  <GoogleAnalytics id="G-XXXXXXXXXX" />
</head>
```

## Acknowledgment

This blog is based and extended from the [Cactus theme](https://github.com/chrismwilliams/astro-theme-cactus), which in turn was inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

## License

Licensed under the MIT License, Copyright © 2022
