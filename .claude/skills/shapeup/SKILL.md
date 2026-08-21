---
name: shapeup
description: Spell-check a Post or Link and add dressed frontmatter if missing. Use when the user says shapeup, shape up, spell-check a post or link, or dress missing frontmatter on a file under src/content/post/ or src/content/link/.
---

# Shapeup

Read `CONTEXT.md` at the repo root first. Use those terms. Do not rewrite, grill, deslop, or create a new file. Do not run `write-post` or `write-link`.

## Target

The file the user passed, or the open file. Path decides the kind:

- `src/content/post/` → Post
- `src/content/link/` → Link

If neither, ask once and stop.

## Fix spell check

Fix spelling in the body and in existing frontmatter strings. Do not rewrite sentences, restructure, or change meaning. Keep the author's dialect (`realise` vs `realize`).

## Add frontmatter if missing

If frontmatter is missing, add it. If fields are missing, fill only those. Never overwrite a field that is already set. Infer values from the file. Propose them in the file, not gated.

### Post

Same way as write-post. Schema and example: [../write-post/REFERENCE.md](../write-post/REFERENCE.md).

- Title (max 60), `pubDate`, Category, description (50–260), 1–5 tags, Unsplash *page* URL hero, witty `imageAlt` that credits the photographer.
- Pick the hero from the Claim. Put it in.
- `pubDate` matches the folder date.
- `draft: true` unless the user said to publish.
- Do not add `author`.

### Link

Same dressing as write-link.

- Need `url`. If it is not in the file, ask once and stop.
- Title (max 60), `pubDate`, `type` (`article` \| `video` \| `lib`), `url`, tags (1–5), description (50–320), Category (same enum as a Post; default `scribble`).
- `pubDate` matches the folder date.
- `draft: true` unless the user said to publish.
- Do not add `heroImage` or `author`. Leave any existing body in place.

## Checklist

- [ ] Kind is Post or Link from the path
- [ ] Spelling fixed; body otherwise untouched
- [ ] Existing frontmatter fields left alone
- [ ] Missing frontmatter dressed
- [ ] Folder date and `pubDate` match
- [ ] `draft: true` unless told to publish
