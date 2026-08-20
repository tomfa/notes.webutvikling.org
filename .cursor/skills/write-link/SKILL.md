---
name: write-link
description: Write a new Link for this blog from a URL, a title, and an optional paragraph. Use when the user wants to bookmark a URL, create a Link, or add something under src/content/link/.
---

# Write Link

Read `CONTEXT.md` at the repo root first. Use those terms. Do not create a Post.

A Link is a bookmark: URL, short description, no body.

## Inputs

Need **url** and **title**. **Paragraph** is optional.

If url or title is missing, ask once and stop.

## Destination

`src/content/link/YYYY-MM-DD-slug/index.md`. Date is today unless the user says otherwise. Slug from the title. Use `.mdx` only if the file needs embeds or JSX.

## Write

Write the file in one go. No grill.

- **url**: the given URL, valid.
- **title**: as given, max 60. Shorten if needed, do not invent a new one.
- **description**: the paragraph if given, else fetch the URL and write why you'd send someone there. 50–320 chars. First-person, informal, opinionated. Match existing Links.
- **type**: `video` if YouTube/Vimeo, `audio` if Spotify, `lib` if a library or tool homepage, else `article`.
- **tags**: 1–5, lowercase. Prefer tags that already exist.
- **pubDate**: same as the folder date.
- **Draft** unless the user said to publish (`draft: true`).
- No body. No `heroImage`. No `author`. No `category`.

Schema lives in `src/content/config.ts`. Trust that over the README.

```yaml
---
title: "Short punchy title"
pubDate: 2026-08-20
type: article
url: https://example.com/the-thing
tags: [javascript]
description: "Why you'd send someone here, in one or two sentences. Fifty to three hundred twenty characters."
draft: true
---
```

## Checklist

- [ ] Folder date and `pubDate` match
- [ ] Title ≤ 60, description 50–320, tags 1–5
- [ ] `type` is `article`, `video`, `audio`, or `lib`
- [ ] `url` is the given URL
- [ ] File has frontmatter only
- [ ] `draft: true` unless told to publish
