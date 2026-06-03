# Antonio Caballero Miró — Portfolio

**🌐 [tonitete.github.io/portfolio](https://tonitete.github.io/portfolio)**

Personal portfolio built with Next.js, showcasing my experience, tech stack and background as a Fullstack Developer.

---

## Features

- **Multilingual** — Spanish (default), English, Catalan
- **Sections:** Home · Experience timeline · Technology stack
- **Animated star field background** with realistic stellar colors and a neutron star pulsar
- **Responsive** — mobile-first layout

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Icons | react-icons, simple-icons |
| Deployment | GitHub Pages via GitHub Actions |

## Project Structure

```
app/
  [lang]/               # Locale-aware routes (es / en / ca)
    components/         # All UI components
    page.tsx            # Main portfolio page
    layout.tsx          # Root layout with star field background
  page.tsx              # Root redirect → /es
dictionaries/
  es.json               # Spanish content (canonical)
  en.json               # English content
  ca.json               # Catalan content
  index.ts              # Dictionary types and loader
public/
  icons/                # Custom brand icons not in simple-icons
```

## Customization

All page content lives in `dictionaries/{locale}.json`. To update:

- **Bio, job experience, tech stack** → edit the JSON files directly
- **Availability status** → change `home.availability.status` to `"open"`, `"passive"`, or `"closed"`
- **Add a language** → add a new JSON file and register it in `dictionaries/index.ts`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/es` automatically.

## Deployment

Deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/nextjs.yml`.

The workflow uses `actions/configure-pages` which injects the correct `basePath` (`/portfolio`) and sets `output: 'export'` for static generation.
