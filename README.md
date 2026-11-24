# Vipul Negi — Portfolio website

A hand-built, static version of [vipullnegi.framer.website](https://vipullnegi.framer.website),
redesigned and split into plain HTML pages you can open, edit and host anywhere.
No build step, no framework, no account needed.

## Open it

- **Quickest:** double-click `index.html`. Everything works from your disk.
- **Local server (recommended while editing):**
  ```bash
  npx serve .
  ```
  or, with Python installed:
  ```bash
  python -m http.server 5500
  ```
  then open http://localhost:5500

## What's where

```
vipul-portfolio/
├── index.html          Home: hero, featured work, "What I bring", brands, testimonials, FAQ
├── about.html          About: intro, identity photos, quote, career timeline
├── contact.html        Contact details + message form
├── work/
│   ├── lisha.html      Lisha.ai case study (full)
│   ├── aita.html       AITA case study (full)
│   └── cox-smb.html    COX SMB overview (short: no case study existed yet)
├── assets/
│   ├── css/styles.css  All styling. Colours, fonts and spacing are tokens at the top (:root)
│   ├── js/main.js      Header, footer, menu, dark mode, tabs, lightbox, form. SITE config at the top
│   └── img/            Every image on the site + favicon.svg
├── CLAUDE.md           Instructions for Claude (or any AI assistant) continuing this work
└── README.md           This file
```

## Common edits

| I want to… | Edit |
|---|---|
| Change email, LinkedIn, Instagram, resume link or menu | `SITE` at the top of `assets/js/main.js` (updates every page) |
| Change the brand colour or fonts | `:root` tokens at the top of `assets/css/styles.css` |
| Change hero text or numbers | `index.html`, sections marked `HERO` |
| Add a project | Copy a `<a class="work-card">` block in `index.html`, and copy `work/lisha.html` to a new file |
| Add a job | Copy an `<li>` in the timeline in `about.html` |
| Add a testimonial | Add a `<button role="tab">` and a matching `<article role="tabpanel">` in `index.html` (ids must match) |
| Add an FAQ | Copy a `<details>` block in `index.html` |

## Contact form

By default the form opens the visitor's email app with the message filled in (no server needed).
To receive messages straight to your inbox instead:

1. Create a free form at [formspree.io](https://formspree.io) (or Basin, Getform…).
2. In `contact.html`, set `data-endpoint="https://formspree.io/f/your-id"` on the `<form>`.

## Images

All images live in `assets/img/` (downloaded from the old Framer site, file names unchanged), so the
site no longer depends on Framer. To swap an image, drop the new file into `assets/img/` and change
the `src` in the page.

The `og:image` tags (the picture shown when a link is shared on LinkedIn, WhatsApp, etc.) use relative
paths. Once the site has a domain, change them to full URLs, e.g. `https://yourdomain.com/assets/img/...`.

## Publish it (free options)

- **Netlify Drop:** drag the `vipul-portfolio` folder onto https://app.netlify.com/drop
- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy from `main`
- **Vercel / Cloudflare Pages:** import the repo, no build command, output directory `/`

## Things to check

- `about.html` has a `TODO(Vipul)` for a personal line in your own words.
- `work/cox-smb.html` is an overview; expand it when the case study is ready.
- Hero stats (10+ yrs, $30M+, 40%, 35%) come from your FAQ answers. Adjust if needed.
- Instagram link points to instagram.com. Add your handle in `SITE.instagram`.
