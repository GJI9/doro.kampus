# CLAUDE.md — Doro Kampus Website

Marketing/landing site for **Doro Kampus** (dorokampus.com), an integrated app for
Indonesian university students. This file is the working guide for this repo.

## Stack & how it runs

- **Plain static HTML site.** No build step, no framework, no package manager, no server.
- jQuery + a bundled template's vendor plugins (owl carousel, stellarnav, wow.js, stellar
  parallax, venobox, etc.) under `assets/js/`. Styles in `style.css` + `assets/css/`.
- Deployed via **GitHub Pages** — the repo root is served as-is. `CNAME` → `dorokampus.com`.
- To preview locally: open the `.html` file directly, or `python3 -m http.server` from the
  repo root and visit `http://localhost:8000`. There is nothing to build or install.

## Live pages (the only ones that matter)

Linked from the site and maintained:

- `index.html` — homepage (hero, features, about, process, vision, FAQ, security, contact, pilot form)
- `terms.html` — Terms of Service
- `privacy.html` — Privacy Policy
- `guideline.html` — Community Guidelines
- `delete-account.html` — Account deletion instructions

**Ignore** `index-2.html`…`index-5.html`, `blog.html`, `shop.html`, `single-blog.html`,
`single-shop.html`. These are leftover template pages, not linked from the live site. Do not
edit or translate them unless explicitly asked.

## Language / i18n

The site's source language is **Indonesian (id)**, hardcoded in the HTML. English is added as
a **client-side toggle** — no page duplication, no build step (chosen for low maintenance).

How it works (`assets/js/i18n.js`):

- Indonesian text stays in the HTML as the default. Only **English** strings live in the JS
  dictionary (`translations.en`), keyed by the element's `data-i18n` key.
- Translatable elements carry `data-i18n="section.key"`. The engine swaps `innerHTML`
  between the captured Indonesian original and the English string.
- Attributes: `data-i18n-placeholder`, `data-i18n-alt`, `data-i18n-aria` for placeholder /
  alt / aria-label. Special keys `__title` and `__meta_description` update `<title>` and the
  meta description.
- Choice persists in `localStorage["doro_lang"]`; on first visit an `en-*` browser gets EN,
  otherwise ID. `document.documentElement.lang` is kept in sync.
- The **ID | EN toggle** lives in the nav (`.doro-lang-switch`), styled by an inline
  `<style>` block in each page's `<head>`.

### Rules when editing content

- **Every user-visible string added to a live page must be bilingual.** Put the Indonesian in
  the HTML, add a `data-i18n` key, and add the matching English to `translations.en` in
  `assets/js/i18n.js`. Reuse existing keys for repeated text (nav, legal link labels, badges).
- Keys are namespaced by section, e.g. `hero.title`, `feat.timetable.desc`, `faq.q1`.
- For elements with nested markup (icons, `<span>`, `<b>`), include that markup in the English
  value too — the engine replaces the whole `innerHTML`.
- Don't translate proper nouns, physical addresses, emails, phone numbers, brand names
  (Doro, InfoHub, Timetable), or the PSE registration number.
- Each live page loads `assets/js/i18n.js` (deferred, after `main.js`) and includes the nav
  toggle + the `.doro-lang-switch` style block.

## Conventions

- Indentation is **tabs** in the HTML files. Match the surrounding style.
- Keep third-party `assets/js/vendor/*` and `*.min.js` untouched.
- No secrets in the repo. The pilot form posts to WhatsApp via a `wa.me` link (see the inline
  `sendToWhatsApp` script in `index.html`); keep its alert/message strings bilingual.
