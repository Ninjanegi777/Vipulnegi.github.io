# CLAUDE.md — Vipul Negi portfolio

Read this before changing anything. It is the handoff for continuing this project in a new
Claude account or session.

## What this is

A static, multi-page personal portfolio for **Vipul Negi** (UX / product designer, Onengine.ai, Ireland).
It replaces Vipul's Framer site `vipullnegi.framer.website`. All copy and images were taken from that
site (October 2026) and rewritten lightly for clarity. Plain HTML + one CSS file + one JS file.
**No build step, no framework, no dependencies.** Keep it that way unless Vipul asks otherwise.

## Rules for editing

1. **Pages stay plain HTML.** Content lives directly in the `.html` files so Vipul can edit text directly.
   Don't move content into JS/JSON or introduce React, Tailwind, a bundler or a CMS without asking.
2. **Shared chrome is in `assets/js/main.js`.** The header, footer and the "Let's turn your What ifs…"
   band are rendered from the `SITE` object. Never hard-code a header/footer into a page.
   - Pages in `work/` set `<body data-root="../">` so links resolve. New sub-folder pages need it too.
   - `data-page="..."` marks the current nav item. `data-cta-band="off"` hides the contact band.
3. **Style only through tokens.** Colours, fonts, sizes and radii are CSS variables in `:root` at the
   top of `assets/css/styles.css`. Dark mode redefines the same tokens twice (media query + `[data-theme="dark"]`):
   update both blocks when you change a colour.
4. **Reuse the existing components** before writing new CSS: `.section`, `.section-head`, `.eyebrow`,
   `.btn`, `.btn--primary`, `.tag`, `.work-card`, `.role`, `.t-panel`, `.faq details`, `.timeline`,
   `.cs-section`, `.callout`, `.cards/.card`, `.gallery` (`--1`, `--3`), `.next-project`, `.reveal`.
5. **Every page head** has the same block: viewport meta, the font preload line,
   `styles.css`, and the inline theme script that prevents a dark-mode flash. Copy it from an existing page.
6. **Don't invent facts about Vipul** (jobs, metrics, clients, quotes, personal details). If copy is
   missing, leave a `<!-- TODO(Vipul): ... -->` comment and ask Vipul.
7. Must work at phone width (375px) with no horizontal scroll, in light and dark mode, and with
   keyboard only. Respect `prefers-reduced-motion` (already handled globally).

## Design direction ("VIPUL 95", Nov 2026)

- Windows 95 / 90s homepage look, inspired by footer.design "Better Call Quang": teal desktop, silver
  bevelled windows with navy gradient title bars, chunky display type (Bungee / Bungee Shade), pixel
  labels (VT323), mono body (Space Mono), yellow + magenta accents, hit-counter stats, hazard tape,
  88x31 badges, a pixel cursor, and a taskbar with a working Start menu and clock.
- Fonts are self-hosted in `assets/fonts/` (SIL OFL). No Google Fonts requests.
- Every page except home is wrapped in a window by `wrapInWindow()` in main.js (title bar shows a
  file path). Opt out with `<body data-window="off">`. The ticker text is `SITE.ticker`.
- Reusable surfaces: `.win` (raised), `.sunken`, `.titlebar` + `.ctls`, `.btn`, `.btn--primary` (yellow).
- Night mode redefines the same tokens (media query + `[data-theme="dark"]`): update both.
- Tone of copy: first person, warm, confident, plain English. No buzzword stacking.

## Page map

| Page | Sections |
|---|---|
| `index.html` | Hero + stats · Featured work (3 cards) · What I bring (rotating phrases) · Brands marquee · Testimonials (tabs) · FAQ · contact band |
| `about.html` | Intro · Identity photos · Oscar Wilde quote · Career timeline |
| `contact.html` | Contact links · form (mailto by default, `data-endpoint` for Formspree) |
| `work/lisha.html` | Full case study with sticky table of contents |
| `work/aita.html` | Full case study with sticky table of contents |
| `work/cox-smb.html` | Short overview (no case study existed on the old site) |

## Open items / good next tasks

- [x] Images self-hosted in `assets/img/` (file names = original Framer ids). Pages in `work/` use
      `../assets/img/...`. Never link to `framerusercontent.com` again.
- [x] Optimise images (Nov 2026): resized to ≤1600px and re-compressed, same file names (~31 MB → ~10 MB). Further option: convert to
      WebP at ≤1600px would cut that a lot. Keep file names stable or update every `src`.
- [ ] Make `og:image` URLs absolute once a domain exists (social previews need full URLs).
- [ ] Write the full COX SMB case study (structure: copy `work/lisha.html`).
- [ ] Personal line in `about.html` (TODO).
- [ ] Real Instagram handle in `SITE.instagram`.
- [ ] Hook the contact form to Formspree (needs Vipul's form id).
- [ ] Optional: add `sitemap.xml`, `robots.txt`, an OG share image per page, and a custom domain.

## How to preview

```bash
npx serve .            # or: python -m http.server 5500
```
Open http://localhost:3000 (serve) or http://localhost:5500 (python). Opening `index.html`
directly from disk also works.
