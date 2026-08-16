---
name: write-post
description: Write a new Post for this blog — short grill for the Claim and Prerequisites, then one complete dressed Draft. Use when the user wants to write a new blog post, article, or note, turn a dump into a Post, or add something under src/content/post/.
---

# Write Post

Read `CONTEXT.md` at the repo root first. Use those terms. Do not run `writing-fragments`, `writing-shape`, or `writing-beats`. Do not create a Link.

## Destination

- **New Post:** `src/content/post/YYYY-MM-DD-slug/index.md`. Date is today unless the user says otherwise. Use `.mdx` only if the body needs embeds or JSX.
- **Existing dump:** if the user points at a file, or it has no frontmatter, that folder is source and destination. Read it, grill, rewrite it into a Post.
- **Valid open Post:** leave it alone unless the user asked to write *this*.

## Grill

Lock only the **Claim** and the **Prerequisites**. Two to four questions, each with a recommended answer. Then stop. This is not a multi-round design tree.

If the user says write it anyway, write it.

## Write

Write the whole Post in one go. Title, Category, tags, and hero are proposed *in the file*, not gated.

- One Claim. Cut anything that does not serve it. No target length.
- Voice: first-person, informal, opinionated. Match recent Posts, not the 2025/2026 braindumps. See [REFERENCE.md](REFERENCE.md).
- English.
- **Draft** unless the user said to publish (`draft: true`).
- Dressed frontmatter: title (max 60), `pubDate`, Category, description (50–160), 1–5 tags, Unsplash *page* URL hero, witty `imageAlt` that credits the photographer.
- Pick the hero from the Claim. Put it in. The user can change it after.

Schema, Category enum, and an example: [REFERENCE.md](REFERENCE.md).

## Checklist

- [ ] Claim is one sentence you could point at
- [ ] Prerequisites named; the opening does not teach them
- [ ] Folder date and `pubDate` match
- [ ] Title ≤ 60, description 50–160, tags 1–5, Category from the enum
- [ ] `heroImage` is `https://unsplash.com/photos/…`
- [ ] `draft: true` unless told to publish
