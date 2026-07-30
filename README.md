# KaFCy DESIGN&BUILD — Landing Page

A React + Vite + Tailwind landing page for KaFCy DESIGN&BUILD, a Katy,
TX design-build contractor. Business name, phone, email, address, and
service area are the real published details from kafcy.com — trust-bar
stats and project descriptions are still illustrative placeholder copy
and should be swapped for real numbers and project photos before launch. Ok

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to any static
host (Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Things to customize before launch

- **Colors / fonts** — defined once in `tailwind.config.js` under
  `theme.extend.colors` and `fontFamily`.

## Adding a logo

Drop a `.png` / `.jpg` / `.jpeg` / `.svg` / `.webp` file into `src/assets/logo/`
and it replaces the text wordmark in the header automatically — no code
changes needed. If more than one file is present, the first by filename
wins. With no logo file present, the header falls back to the plain text
wordmark ("KaFCy DESIGN&BUILD"). A transparent background works best
against the header's cream background.

## Adding a hero photo

Drop a `.jpg` / `.jpeg` / `.png` / `.webp` file into `src/assets/hero/` and
it becomes the Hero section's full-bleed background automatically — no code
changes needed. If more than one image is added, the first by filename
wins, so a single well-named file (e.g. `hero.jpg`) is simplest. With no
image present, the section falls back to a plain espresso background.

## Adding project photos

Each project in `Projects.jsx` has a `slug` (e.g. `thien-hau-temple`)
that maps to a folder under `src/assets/projects/`:

```
src/assets/projects/
  thien-hau-temple/
  g-style-building/
  nguyen-office-warehouse/
  hon-tam-plaza/
```

Drop `.jpg` / `.jpeg` / `.png` / `.webp` files straight into the matching
folder — no code changes needed. Files are picked up automatically and
sorted by filename, so name them `01.jpg`, `02.jpg`, `03.jpg` to control
the order they appear in. A project with zero images falls back to the
hatched icon placeholder; one image shows with no arrows; two or more
show left/right arrows and a "2 / 4" counter so visitors can click
through them (`ProjectCard.jsx`).

To add a fifth project, add a new folder plus a matching entry (`slug`,
`icon`, `category`, `title`) to the `projects` array in `Projects.jsx`.

## Wiring the contact form

`Contact.jsx` has no backend to POST to on GitHub Pages, so submitting the
form builds a `mailto:` link (name, phone, email, project type, and
message pre-filled into the subject/body) and hands it to the browser via
`window.location.href`. This opens the visitor's own email client with a
draft addressed to `paul.nguyen@kafcy.com` — they still have to hit send
on their end, which is why the confirmation copy says "opened" rather than
"received".

To change the recipient address, edit `RECIPIENT` at the top of
`Contact.jsx`.

Tradeoffs to know about:
- Depends on the visitor having a mail client configured (desktop mailto
  links are unreliable on some mobile browsers/webviews).
- No submissions dashboard or delivery guarantee — if that matters more
  than avoiding a third-party signup, a service like
  [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io)
  (`fetch`-POST to their API, no backend needed) is a safer bet for a
  business that depends on leads landing reliably.

## Project structure

```
src/
  components/
    Nav.jsx          Header with logo and phone/CTA
    Hero.jsx          Headline over a full-bleed background photo
    About.jsx           Company origin story
    Services.jsx          Service offering cards (6 disciplines)
    Reviews.jsx             Client reviews placeholder (none yet)
    Projects.jsx              Selected work / portfolio grid
    Contact.jsx              Quote request form + contact info
    Footer.jsx
  App.jsx
  index.css
  main.jsx
```
