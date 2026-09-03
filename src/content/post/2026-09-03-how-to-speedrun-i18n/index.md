---
title: "How to speedrun i18n"
pubDate: 2026-09-04
category: guide
description: "Good practices when you start out, so adding locales later is mostly strings: one name field, a fuzzy address, inferred enums, one domain, split email."
heroImage: https://unsplash.com/photos/athletes-in-starting-blocks-on-a-race-track-5GwQ16dnThw
tags: [startup, marketing, timezone, email]
imageAlt: "Set the blocks now. The race comes later. Photo by Justin Lagat on Unsplash."
related:
  - 2026-05-28-international-version-before-your-2nd-market
  - 2022-05-07-choosing-an-email-provider
draft: true
---

A second language can wait. Schema, domain, and email are where i18n actually gets expensive. Strings are cheap.

## Name is one field

`firstName` and `lastName` are a US form. Plenty of people have one name. Plenty have the family name first. Plenty have two family names, a patronymic, or a particle you should not split on.

Store `name`. Show it. Sort it as a string. If a bank or a shipping label later needs a legal split, add that field when a real integration asks for it. Splitting on day one means you spend the expansion rewriting every form, invoice, and "Hi {firstName}" email, and you still greet someone wrong.

## Address is fuzzy

Street, number, zip, city, state is another local shape. Some places have no street. Some have no number. Some have no zip. The ones that look like yours still order the lines differently.

Give the user Google Places (New), the v2 API, as the address field. Store the place id and the formatted string Google already knows how to render. Keep optional line-two for "c/o" and apartment. You can parse components later if a carrier demands them. You cannot unteach a required zip.

## Currency, language, country, timezone

These are enums. ISO 4217, BCP 47, ISO 3166-1, IANA. Free text becomes "Norway", "NO", "Norge", and a support ticket.

Default them from the browser on first visit: `navigator.language`, `Intl.DateTimeFormat().resolvedOptions().timeZone`, and whatever you can honestly infer for country and currency. Then put them on the signup screen so the customer can correct you. After they pick, stop guessing in the background. A Norwegian on holiday in Spain should not wake up to euros and a Spanish UI because the hotel Wi-Fi moved them.

## An international landing page, immediately

Ship one English page that could be true for a customer who is not in your home country. Local proof, local payment, local slang, a BankID-only signup: that is a Norway site with a Translate button.

Ads, inbound, and "we might try Poland" all get cheaper if the public page is already the international one. You can still mention where you are. Do not make the pitch depend on it.

## One domain

`example.no` and `example.se` feel like commitment. They are a second cookie jar, a second certificate, a second sitemap, and a login that fails when someone hits the wrong TLD. SEO splits. Teams start shipping features to one hostname and forgetting the other.

Use one domain. If you need a locale in the URL later, put it in the path. Subdomains are already more than you want. Country domains wait until you have a legal reason, not a marketing hunch.

## Marketing email and transactional email are two products

A password reset has to arrive, in the language the user picked, from a domain with a clean reputation. A newsletter is a campaign you target, with unsubscribe, and it can be late.

Share a provider and a sending domain and you will learn this the hard way: a promo gets marked spam, and the invoice mail dies with it. Locale makes it worse. Transactional follows the user. Marketing follows the campaign. Different lists, different templates, different unsubscribes.

## Customizing emails

Copy in a React file means every German tweak is a pull request. Put variables in templates you can edit without a deploy: an ESP for marketing, a template API for transactional if you can stand it.

Each locale is a variant of that template, not a fork of the app. Subject, preview, body. When a native speaker says the reset mail sounds like a robot, they edit the template. They do not wait for the next release.

## Whatever i18n library makes it work

i18next, next-intl, Lingui, FormatJS. Pick the one your framework already documents and that extracts catalogs. Switching libraries later is a weekend. Migrating `firstName` is a quarter.

Put the default string in the component. `t("Save")` next to the button, not key `btn.save.primary.unlabeled` in a 2,000-line JSON file two folders away. Extraction builds the catalogs. A central file becomes a merge-conflict graveyard, and nobody knows which keys are dead.

## AI for the catalogs, a skill for the mechanics

Machine-translate the catalogs when you add a locale. That finds missing keys and layout that breaks at German length. Pay a human for anything a customer pays you in.

The Cursor job is mechanical: add the default in the component, extract, fill the other locale files, do not invent keys. A small skill that does that will outrun any debate about which library is "the i18n one."
