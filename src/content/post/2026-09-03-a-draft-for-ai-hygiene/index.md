---
title: "A draft for AI hygiene"
pubDate: 2026-09-03
category: idea
description: "Humans own the merge, bots look like bots, agents live in code. Then a small fleet: reviewer, bug hunter, security, developer, community."
heroImage: https://unsplash.com/photos/person-washing-hands-s9CC2SKySJM
tags: [ai, github, security, management]
imageAlt: "Wash your hands before you merge. Photo by National Cancer Institute on Unsplash."
related:
  - 2026-08-15-ai-is-an-intern
---

We require a review to get anything into prod. Agents should not be allowed to bypass that. GitHub's rulesets will not let you say "a human", they will let you say "a member of this Team". So make a `humans` team, put the people in it, and require a review from that team. Agents stay out.

## Do not let AI impersonate anyone

I need to trust that "Tomas" is something Tomas has signed off on. Comments from bots on Slack and GitHub should be marked as bots.

Grok Bot is set up to impersonate me. That is a hygiene failure. A message that looks like it came from me should have come from me.

## Mark the skills agents actually run

Skills are instruction packs. Some of them are for me in the editor. Some of them are for an agent that runs unattended.

Suffix the agent-facing variants with `-agent`. Then it is obvious which playbooks are safe to invoke from infra, and which ones assume a human is holding the mouse.

## Agents are infrastructure

We want infra as code. Stop configuring apps and SaaS products in a UI, which is what I just did with Grok Bot.

The setup I want: API endpoints that invoke skills on an agent cloud. [ADK](https://adk.dev/) is the shape of that, not a product recommendation.

## What to hire them for

Narrow jobs. Always-on. Each one a skill (or a `-agent` skill) behind an endpoint.

1. **QA reviewer.** Looks at incoming PRs and reviews them.
2. **Bug hunter.** Looks at incoming bugs and opens a PR to fix them.
3. **Security officer.** Watches Dependabot (and the rest of the upgrade noise) and tries to fix or bump.
4. **Developer.** Picks GitHub issues with a given tag and opens a PR.
5. **Community manager.**
   - Support articles from what we just shipped
   - Changelog from what we just shipped
   - Slack: answers API questions
   - Intercom: drafts a reply as a note, does not send it

The community manager does not speak as me. The QA reviewer does not approve the merge. The developer still needs a human on `humans`.
