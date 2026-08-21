# Post packaging

Schema lives in `src/content/config.ts`. Trust that over the README.

## Frontmatter

| Field | Required | Rules |
|---|---|---|
| `title` | yes | max 60 chars |
| `pubDate` | yes | `YYYY-MM-DD`, same as the folder date |
| `tags` | yes | 1–5 strings. Lowercase. Prefer tags that already exist. |
| `category` | yes for this skill | `guide` \| `rant` \| `question` \| `scribble` \| `statement` \| `debugging` \| `book` \| `idea` |
| `description` | yes for this skill | 50–260 chars |
| `heroImage` | yes for this skill | Unsplash photo page URL |
| `imageAlt` | yes for this skill | Witty caption + photographer credit |
| `draft` | default on | `true` unless the user said to publish |

Do not add `author`.

```yaml
---
title: "Short punchy title"
pubDate: 2026-08-16
category: statement
description: "One or two sentences that sell the Claim without repeating the title. Fifty to two hundred sixty characters."
heroImage: https://unsplash.com/photos/two-birds-on-a-wire-56kt2kToZV4
tags: [management, trust]
imageAlt: "Screetch! One bird talking to another, who looks away unfathomed. Photo by Jason Hafso on Unsplash."
draft: true
---
```

`heroImage` must be a photo page (`https://unsplash.com/photos/…`) or an `images.unsplash.com` URL — not a downloaded `/images/…` file, unless the user already has one.

## Voice

Read these before writing:

- `src/content/post/2024-06-06-can-we-go-faster/index.mdx`
- `src/content/post/2024-06-10-startup-metrics-that-matter/index.mdx`

Hook, then `##` sections that serve the Claim. Blockquotes and short lists are fine. Do not imitate `2025-06-01-how-to-excel-in-the-age-of-ai` or the 2026 folders — those are dumps.

## Body format

Default `index.md`. Use `index.mdx` only for `astro-embed` YouTube, `Gist`, or JSX.
