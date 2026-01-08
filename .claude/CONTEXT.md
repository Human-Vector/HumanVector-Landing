# Human Vector Landing - Project Context

> **Auto-Update Instructions:** Update this file after significant changes. Keep concise.

---

## Overview

**Human Vector** is a B2B SaaS landing page for a business scaling solution targeting companies with 40+ employees. The page collects demo requests via a contact form with Telegram notifications.

**Live URL:** Deployed on Vercel (auto-deploy from main)
**Repository:** https://github.com/Human-Vector/HumanVector-Landing
**Figma Source:** Human Vector Landing Page (node-id: 75-21)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vite + React 18 |
| Routing | React Router DOM v7 |
| Backend | Supabase (Edge Functions + PostgreSQL) |
| Styling | CSS Modules + CSS Variables |
| Deployment | Vercel |

**Dev Server:** `npm run dev` → http://localhost:5173

---

## Project Structure

```
├── src/
│   ├── components/          # All UI components (CSS Modules)
│   │   ├── Navigation/      # Header nav + mobile overlay menu
│   │   ├── Hero/            # Hero section with video
│   │   ├── Quote/           # Elon Musk quote section
│   │   ├── AlignVectors/    # 4 feature sections + Oleg quote
│   │   ├── TwoQuotes/       # Sundar Pichai & Jack Ma quotes
│   │   ├── ProvenSolution/  # Dashboard showcase + CTA
│   │   ├── IntegrationSteps/# 4-step integration process
│   │   ├── ChooseScale/     # Comparison table
│   │   ├── ContactForm/     # Demo request form
│   │   ├── SuccessModal/    # Form success confirmation
│   │   ├── FAQ/             # Expandable FAQ items
│   │   ├── Footer/          # Copyright + privacy link
│   │   ├── Button/          # Reusable button component
│   │   ├── StatsCard/       # Stats display cards
│   │   ├── Article/         # Quote article component
│   │   ├── ProblemBlock/    # (Removed from page, files exist)
│   │   ├── ProgressiveImage/ # Progressive loading image component
│   │   └── ScrollToTop.jsx  # Route change scroll handler
│   ├── hooks/
│   │   ├── useScrollToForm.js  # Smooth scroll to contact form
│   │   └── useScrollAnimation.js # Scroll-triggered animations (Intersection Observer)
│   ├── lib/
│   │   └── supabaseClient.js   # Supabase client config
│   ├── pages/
│   │   ├── LandingPage.jsx     # Main landing page
│   │   └── PrivacyPolicy.jsx   # Privacy policy page
│   ├── styles/
│   │   ├── variables.css       # Design tokens
│   │   └── global.css          # Global styles + fonts
│   ├── App.jsx                 # Router configuration
│   └── main.jsx                # Entry point
├── public/
│   ├── images/                 # All static assets by section
│   ├── videos/                 # Hero video (compressed)
│   ├── robots.txt              # Crawler instructions
│   ├── sitemap.xml             # Search engine sitemap
│   ├── llms.txt                # AI/LLM summary
│   └── llms-full.txt           # Detailed AI context
├── supabase-edge-function-notify-telegram.ts  # Telegram webhook code
└── index.html                  # HTML entry + meta tags + structured data
```

---

## Page Sections (in order)

1. **Navigation** - Logo, links (Solution/How It Works/FAQ), CTA button
2. **Hero** - Headline, subheadline, video, stats cards (ENCATA, book)
3. **Quote** - Elon Musk quote with X/Twitter link
4. **AlignVectors** - 4 features with alternating layouts + Oleg Kondrashov quote
5. **TwoQuotes** - Google & Alibaba CEO quotes (dark bg)
6. **ProvenSolution** - Dashboard screenshot + demo CTA
7. **IntegrationSteps** - 4 numbered steps (Request → Pilot → Week 1 → Month 3)
8. **ChooseScale** - Comparison table (Generic HR vs Doing Nothing vs Human Vector)
9. **ContactForm** - Demo booking form with George Kachanouski CTA
10. **FAQ** - 5 expandable questions
11. **Footer** - Copyright, privacy policy link

**Routes:**
- `/` - Landing page
- `/privacy-policy` - Privacy policy

---

## Design System

**CSS Variables:** `src/styles/variables.css`

| Token | Value |
|-------|-------|
| `--colors-accent` | #ed1d2d (red) |
| `--colors-dark` | #1a2b32 |
| `--colors-dark-2` | #48555b |
| `--colors-light-bg` | #f8f6f2 |
| `--colors-white` | #ffffff |
| `--colors-link-color` | #02669f |

**Typography:** Poppins (400/500/600)
**Breakpoints:** Mobile 390px, Tablet 768px, Desktop 1280px

---

## Supabase Configuration

**Project URL:** https://vkjndyldfpulotwyfrss.supabase.co

### Database Schema
```sql
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  messenger_contact TEXT NOT NULL,
  email TEXT NOT NULL,
  team_size TEXT NOT NULL,
  biggest_challenge TEXT,
  device_type TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: Only authenticated users can SELECT
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
```

### Edge Functions
| Function | Purpose |
|----------|---------|
| `submit-form` | Validates & inserts form data (service role) |
| `notify-telegram` | Sends Telegram notification on INSERT |

### Telegram Bot
- **Bot Token:** `8333552160:AAGWpnUGNc_Jo28cn5gx-xqWLVmIXaTHZHo`
- **Chat ID:** `243257249`

### Environment Variables
```env
VITE_SUPABASE_URL=https://vkjndyldfpulotwyfrss.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Form Submission Flow

```
User submits form
    ↓
ContactForm.jsx validates client-side
    ↓
POST to Edge Function: /functions/v1/submit-form
    ↓
Edge Function validates + inserts with service role
    ↓
Database webhook triggers notify-telegram
    ↓
Telegram bot sends notification (CET timezone)
    ↓
SuccessModal shown to user
```

---

## Key External Links

| Purpose | URL |
|---------|-----|
| George LinkedIn | https://www.linkedin.com/in/georgekachanouski/ |
| Oleg LinkedIn | https://www.linkedin.com/in/olegkondrashov/ |
| Book (Amazon) | https://www.amazon.ca/Human-Vector-Pivot-Profitability/dp/1642251534 |
| Demo Calendly | https://calendly.com/georgekachanouski/30min |
| Contact Email | go@human-vector.work |

---

## Key Decisions

| Decision | Reasoning |
|----------|-----------|
| Vite + React | Fast builds, no SSR needed |
| CSS Modules | Scoped styling, no Tailwind (design exists in Figma) |
| Edge Functions for form | Secure server-side validation, RLS bypass |
| Telegram notifications | Real-time lead alerts for sales team |
| Hardcoded Telegram creds | Supabase env vars had issues |

---

## Common Tasks

**Start dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Find component:**
```bash
grep -r "ComponentName" src/
```

**Deploy:** Push to main branch (Vercel auto-deploys)

---

## Performance Optimizations

**Image Format:** All heavy images converted to WebP (85-90% size reduction)
- Avatars, feature images, dashboard screenshots use `.webp`
- Original PNGs kept as local backups (not in production)

**Video Compression:** Hero video compressed from 7.7MB → 1.9MB (75% reduction)

**Progressive Loading:** `ProgressiveImage` component preloads images 500px before viewport
- Uses Intersection Observer with rootMargin
- Smooth fade-in transition on load
- Applied to: AlignVectors features, ProvenSolution dashboard, ContactForm image

**Total asset reduction:** ~17MB → ~2.5MB (85% smaller initial load)

---

## Notes

- ProblemBlock component exists but is removed from LandingPage
- All CTA buttons scroll to #contact-form section
- Navigation links use smooth scroll to section IDs
- Hero video has 8px border radius, `object-fit: cover`
- Contact form image (George pointing) hidden on mobile/tablet

---

## Animations

**Hero Section:** Premium fade-in animations on page load
- Content fades in from below (0.8s, cubic-bezier easing)
- Video fades in from right with 0.2s delay

**Scroll-Triggered Animations:** All sections below Hero animate when entering viewport
- Uses `useScrollAnimation` hook with Intersection Observer
- Premium cubic-bezier easing (`0.22, 1, 0.36, 1`)
- One-time trigger (won't re-animate on scroll back)
- Respects `prefers-reduced-motion` for accessibility

| Section | Animation Type |
|---------|---------------|
| Quote | Fade up |
| AlignVectors | Title + each feature row + article (fade up) |
| TwoQuotes | Each quote block with staggered delay |
| ProvenSolution | Heading (fade up) + dashboard (scale in) + CTA (fade up) |
| IntegrationSteps | Heading + steps container (fade up) |
| ChooseScale | Heading + table (fade up) |
| ContactForm | Content area (fade up) |
| FAQ | FAQ container (fade up) |
| Footer | Simple fade in |

**Animation CSS Classes** (in `global.css`):
- `animate-on-scroll` - Base class (hidden state)
- `animate-fade-up` / `animate-fade-left` / `animate-fade-right` - Direction variants
- `animate-scale-in` / `animate-fade-in` - Other effects
- `animate-delay-100` to `animate-delay-500` - Stagger delays
- `is-visible` - Applied via hook when element enters viewport

---

## Mobile Menu

- Full-screen overlay with dark background (`#1a2b32`)
- Prevents body scroll when open (`overflow: hidden` on body)
- Dynamic `theme-color` meta tag for iOS browser UI
- Extended backdrop (10000px height) covers entire page for iOS liquid glass UI compatibility
- CTA button fixed at bottom of viewport
- Menu links centered vertically
- `viewport-fit=cover` and safe area padding for notched devices

---

## SEO & AI Optimization

### Meta Tags
- Title, description, canonical URL, robots, author, keywords
- OpenGraph and Twitter Card tags for social sharing

### Structured Data (JSON-LD)
4 schemas in `index.html`:
- **Organization** - Company info, founder, contact
- **Book** - "Human Vector: Pivot to Profitability" by Oleg Kondrashov
- **FAQPage** - All 5 FAQ items for rich snippets
- **SoftwareApplication** - Product features and capabilities

### Static Files (`/public`)
| File | Purpose |
|------|---------|
| `robots.txt` | Crawler instructions, sitemap reference |
| `sitemap.xml` | Page index for search engines |
| `llms.txt` | AI/LLM summary (~200 words) |
| `llms-full.txt` | Detailed AI context (~1500 words) |

### Semantic HTML
- `<main>` wrapper around page content
- `<footer>` element for footer
- `<blockquote cite="...">` for quotes
- Proper H1 → H2 → H3 heading hierarchy
