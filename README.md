# RAAH Technologies — Website Redesign

A modern React rebuild of [raahtech.com](https://raahtech.com) with improved visuals, dark/light
theming, and performance-first architecture.

## Tech Stack

- **React 19 + TypeScript** on **Vite** — fast builds, lazy-loaded routes
- **Tailwind CSS v4** — brand theme tokens (`#0d0042` primary, `#fd5f0d` accent, `#040014` ink)
- **Framer Motion** — scroll-reveal and interactive animations
- **Poppins** (self-hosted via Fontsource — no Google Fonts CDN round-trip)
- **lucide-react** icons

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Activating the Contact Form

The form runs in demo mode until you connect a backend:

1. Go to [web3forms.com](https://web3forms.com) (free) and enter the inbox that should receive
   submissions (e.g. `info@raahtech.com`).
2. Copy `.env.example` to `.env` and paste the access key into `VITE_WEB3FORMS_KEY`.
3. Rebuild. Submissions now land in the inbox.

## Editing Content

All site copy lives in typed data files — no component digging required:

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Company name, tagline, email, phone, social links, nav items |
| `src/data/services.ts` | The four service offerings and their highlights |
| `src/data/solutions.ts` | Solution areas (IAM, IGA, PAM, CIAM, B2B, AI identity) |
| `src/data/industries.ts` | Industry cards with per-sector challenges |
| `src/data/platforms.ts` | Platform partner cards with categories |

Add or edit an entry in those arrays and every page (cards, footer, filters, search) updates
automatically.

## Theming

- Dark/light toggle in the navbar; preference is stored in `localStorage` and falls back to the
  OS setting (`prefers-color-scheme`). A small inline script in `index.html` applies the theme
  before first paint to avoid flashing.
- Brand colors are defined once in `src/index.css` under `@theme`.

## Deployment

The build outputs a static SPA in `dist/`. SPA rewrites are pre-configured for:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

For other hosts, route all paths to `index.html`.
