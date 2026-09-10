---
title: "Notes on a public issue tracker"
pubDate: 2026-09-10
category: scribble
description: "A few things I would hide on a public roadmap, and a few I would keep for myself: counts, comments, priority, and the GitHub tag."
heroImage: https://unsplash.com/photos/rows-of-empty-red-theater-seats-in-darkness-sxIgttmk0AY
tags: [startup, github, feedback]
imageAlt: "House lights up, nobody in the seats. Photo by Quentin Baret on Unsplash."
---

You want a page where users suggest features and upvote what is already there. Here's a few thoughts on that.

## Hide the upvote count

"3 votes" on a card in month two looks like nobody uses this. The number is useful to you. Leave it off the page.

Same with comments. Take them. Do not render the thread. An empty comment box looks abandoned. Two people arguing about a feature you will never ship is worse.

## You pick the order

Do not sort by votes. Or 10x your own votes for sorting. The top item is often the one the loudest account wants, or the one that has been sitting there longest. Priority is a knob you turn.

Someone files a suggestion. You look at it. Then you decide whether it joins the list. Otherwise the page fills with duplicates and "please add dark mode" three times.

## Know who voted

Log people in with the same auth as the product. Then a paying customer's +1 can count differently from a throwaway account. You can also tell two votes from the same company.

## Subscribe might beat +1

Let someone subscribe to an issue for notification when it ships. That is a person who wants the thing enough to get an email. I would maybe weight that higher than an upvote.

## One source of truth

Tag issues `public` in GitHub (or whatever you already use) and render those. You have an issue tracker. The public page is a view, not a second backlog.
