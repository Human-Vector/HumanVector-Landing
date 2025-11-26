# Human Vector Landing - Project Context

> **🤖 CLAUDE AUTO-UPDATE INSTRUCTIONS:**
> Update this file automatically after ANY significant action:
> - Creating/modifying key files
> - Making architectural decisions
> - Completing features
> - Changing dependencies
> - Deployment/config changes
>
> **Update without asking.** Keep it concise. Remove outdated info.

---

## 📍 Current Focus
**Session Goal:** Build TwoQuotes section with responsive design
- Status: ✅ Completed
- Next: Build remaining sections (Contact Form, Footer)

---

## 🏗️ Stack & Setup
**Framework:** Vite + React 18
**Backend:** Supabase (forms, data)
**Styling:** Custom CSS (from Figma design tokens)
**Deployment:** Vercel
**Repository:** https://github.com/Human-Vector/HumanVector-Landing

**Dev Server:** http://localhost:5173

---

## 📐 Page Structure
**From Figma:** Human Vector Landing Page (node-id: 75-21)

### Sections:
- [x] **Hero Section** - Desktop + Mobile responsive
  - Navigation with logo, links, CTA (full-screen overlay on mobile)
  - Headline, subheadline, CTA buttons
  - Hero video (autoplay, loop, muted)
  - Stats cards (ENCATA logo, book)
- [x] **Quote Section** - Desktop + Mobile responsive
  - Quote icon (desktop only)
  - Quote text with attribution
  - Author image, name with verified badge
  - Link to X/Twitter post
- [x] **AlignVectors Section** - Desktop + Mobile responsive
  - Main heading with two-tone color
  - 4 feature sections with alternating layouts (text/image)
  - Quote callout box with light background
  - Bullet points with mixed font weights for emphasis
  - Responsive: desktop (text-image rows) / mobile (vertical stack, image first)
- [x] **TwoQuotes Section** - Desktop + Mobile responsive
  - Dark background with 2 CEO quotes (Sundar Pichai, Jack Ma)
  - Photo + quote + attribution with company icons
  - Desktop: Photo left, quote/attribution right
  - Mobile: Photo + attribution row on top, quote text below
  - Poppins Italic 32px desktop / 24px mobile
- [ ] Contact Form
- [ ] Footer

### Reusable Components Created:
- `Button` - Primary/secondary variants, responsive
- `StatsCard` - Icon + text stats display, improved layout
- `Navigation` - Desktop nav + mobile overlay menu with animations
- `Hero` - Complete hero section with video
- `Quote` - Quote section with author info and link
- `AlignVectors` - Features section with alternating layouts and quote callout
- `TwoQuotes` - CEO quotes section with dark background

---

## 📁 Key Files

```
/
├── src/
│   ├── styles/
│   │   ├── variables.css      # ✓ Design tokens (colors, spacing, typography)
│   │   └── global.css         # ✓ Global styles, resets, font imports
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── StatsCard/
│   │   │   ├── StatsCard.jsx
│   │   │   └── StatsCard.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Quote/
│   │   │   ├── Quote.jsx
│   │   │   └── Quote.module.css
│   │   ├── AlignVectors/
│   │   │   ├── AlignVectors.jsx
│   │   │   └── AlignVectors.module.css
│   │   └── TwoQuotes/
│   │       ├── TwoQuotes.jsx
│   │       └── TwoQuotes.module.css
│   ├── App.jsx              # ✓ Main app component
│   ├── App.css              # ✓ App-level styles
│   └── main.jsx             # ✓ Entry point
├── public/
│   ├── videos/
│   │   └── hero-video.webm  # ✓ Hero video
│   └── images/
│       ├── hero/            # ✓ Hero section images (logo, ENCATA, book, avatar)
│       ├── quote/           # ✓ Quote section images and icons
│       ├── align-vectors/   # ✓ AlignVectors section feature images (4 screenshots)
│       └── quotes/          # ✓ TwoQuotes section CEO photos
├── index.html               # ✓ HTML entry
├── vite.config.js           # ✓ Vite configuration
├── package.json             # ✓ Dependencies
└── .gitignore               # ✓ Git ignore rules
```

---

## 🗄️ Supabase Schema
**Tables:** [Auto-update when created]

```sql
-- Example: form_submissions table
-- [Add schema when created]
```

**Environment Variables:**
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## 🎨 Design System
**Implementation:** CSS Variables in `src/styles/variables.css`

**Colors:**
- Primary: `--colors-accent` (#ed1d2d)
- Dark: `--colors-dark` (#1a2b32)
- Dark-2: `--colors-dark-2` (#48555b)
- Light BG: `--colors-light-bg` (#f8f6f2)
- White: `--colors-white` (#ffffff)
- Link: `--colors-link-color` (#02669f)

**Typography:**
- Font: Poppins (Regular 400, Medium 500, SemiBold 600)
- Sizes: 14px, 16px, 24px, 28px, 32px, 48px, 56px
- Line Heights: 1.2 (tight), 1.25 (snug), 1.3 (normal), 1.4 (relaxed), 1.5 (loose)

**Spacing Scale:**
- 4, 6, 8, 12, 16, 18, 24, 32, 40, 48, 56, 64, 72, 80, 104, 120px

---

## ✅ Features Completed

- [x] Project initialization
- [x] **Design system** - CSS variables with Figma tokens
- [x] **Hero Section** - Desktop + Mobile responsive
  - Navigation with full-screen overlay menu (mobile)
  - Hamburger to X animation
  - Hero headline and subheadline
  - CTA buttons with hover states
  - Hero video (autoplay, loop, muted, poster fallback)
  - Stats cards with ENCATA logo and book
  - Improved card layouts and image quality
- [x] **Reusable components** - Button, StatsCard, Navigation, Quote, AlignVectors, TwoQuotes
- [x] **CSS Modules** - Scoped styling for all components
- [x] **Quote section** - Desktop + Mobile responsive
  - Elon Musk quote with attribution
  - Author image with verified badge
  - Link to X/Twitter post with external link icon
  - Quote icon on desktop, hidden on mobile
- [x] **AlignVectors section** - Desktop + Mobile responsive
  - 4 feature sections with alternating image-text layouts
  - Quote callout box with light background
  - Mixed font weights for emphasis in bullet points
  - Responsive layouts: desktop rows / mobile vertical stacks
  - Inter font for quote text
- [x] **TwoQuotes section** - Desktop + Mobile responsive
  - Dark background with 2 CEO quotes
  - Sundar Pichai (Google) and Jack Ma (Alibaba)
  - Photos with company icons and attributions
  - Desktop: horizontal layout / Mobile: vertical with photo-attribution row
  - Italic quotes with semibold attributions
- [ ] Contact form
- [ ] Footer
- [ ] Final deployment

---

## 🧠 Decisions Log
> Auto-update: Add every time we make a choice

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2025-11-26 | Created context file | Efficient session restarts |
| 2025-11-26 | Vite + React stack | Fast builds, minimal bundle, no SSR needed |
| 2025-11-26 | Skip Tailwind | Complete design system exists in Figma |
| 2025-11-26 | CSS Modules + CSS Variables | Fast, scoped styling with design tokens |
| 2025-11-26 | Component-first architecture | Reusable Button, StatsCard for scalability |
| 2025-11-26 | Mobile-first responsive | Match Figma mobile (390px) and desktop (1280px) designs |
| 2025-11-26 | Video hero instead of static image | Better engagement, shows product in action |
| 2025-11-26 | Full-screen mobile menu overlay | Better UX than dropdown, more immersive |

---

## 🔍 Quick Reference
**Find component by name:** `grep -r "ComponentName" .`
**Find text from page:** `grep -r "specific text" .`
**See recent changes:** `git log --oneline -10`

---

## 🚀 Deployment
**Vercel Project:** [URL when deployed]
**Live URL:** [URL when deployed]
**Last Deploy:** [Auto-update on deploy]

---

## 📝 Session Notes
> Auto-update: Quick notes for next session

**Session 2025-11-26 PM (TwoQuotes - Latest):**
- ✅ Built TwoQuotes section (node-id: 113-218 desktop, 131-858 mobile)
  - Fetched designs from Figma for desktop and mobile versions
  - Downloaded 2 CEO photos (Sundar Pichai, Jack Ma)
  - Extracted company SVG logos (Google, Alibaba) to separate files in /public/images/quotes/
  - Created TwoQuotes component with CSS Modules
  - Dark background section with 2 CEO quotes (Sundar Pichai, Jack Ma)
  - Desktop layout: Photo (144x144px) left, quote + attribution right
  - Mobile layout: Photo (96x96px) + attribution in top row, quote text below
  - Quote text: Poppins Italic 32px desktop / 24px mobile, line-height 1.5/1.4
  - Attribution: Poppins SemiBold 16px with company icons
  - Jack Ma quote: Shorter width (605px max) vs Sundar's (797px default)
  - Responsive padding: 56px vertical desktop / 32px mobile
  - 48px gap between two quote blocks
  - Integrated into App.jsx
- **Next:** Build Contact Form and Footer sections

**Session 2025-11-26 PM (AlignVectors):**
- ✅ Built AlignVectors section (node-id: 113-191 desktop, 126-803 mobile)
  - Fetched designs from Figma for desktop and mobile versions
  - Downloaded 4 feature images (employee tracking, work schedule, payroll, suggestions)
  - Created AlignVectors component with CSS Modules
  - Implemented responsive design with correct layouts
  - Desktop: Feature 1 & 3 (text left, image right), Feature 2 & 4 (image left, text right)
  - Mobile: Vertical stack with image-first layout, 40px section padding, 32px gap
  - Main heading: 48px desktop / 28px mobile, two-tone color (dark + gray)
  - Feature headings: 28px desktop / 20px mobile
  - Quote callout box: light-bg background, 40px padding desktop / 16px mobile
  - Quote text: Poppins SemiBold 32px, line-height 1.5 (corrected from Inter)
  - Mixed font weights in bullet points for emphasis (regular, medium, semibold)
  - Fixed bullet list markers: Changed from none to disc outside
  - Enhanced image quality with CSS optimization properties
  - Re-extracted feature-2 image from Figma for better quality
  - Integrated into App.jsx
- ✅ Tablet spacing optimization
  - Reduced spacing between Hero video and Quote section by 56px on tablet (768px-1024px)
  - Hero bottom padding: 104px desktop → 48px tablet → 40px mobile
- **Next:** Build Contact Form and Footer sections

**Session 2025-11-26 PM (Quote section):**
- ✅ Built Quote section (node-id: 113-172 desktop, 121-617 mobile)
  - Fetched designs from Figma
  - Downloaded author image (Elon Musk)
  - Extracted actual SVG icons from Figma (quote-icon, verified-badge, external-link)
  - Built Quote component with CSS Modules
  - Implemented responsive design with Hero-matching padding structure
  - Outer section: 56px vertical padding desktop, 40px mobile
  - Container: 24px horizontal padding desktop, 18px mobile
  - Quote box: 40px vertical, 64px horizontal padding desktop
  - Quote icon visible on desktop only
  - Font sizes: 32px desktop / 24px mobile for quote text
  - Author image: 80px desktop / 64px mobile
  - Post link text aligned to bottom of icon
  - Integrated into App.jsx
- ✅ Book cover image optimization
  - Replaced high-res source image with properly-sized Figma export (76×114px desktop, 52×78px mobile)
  - Added 1.5x zoom hover effect with zoom-in cursor
  - Improved image quality at display size
- ✅ Fixed horizontal scroll on desktop (1024px+)
  - Added overflow: hidden to Hero section
  - Resolved issue with absolutely positioned video extending beyond container
- **Next:** Build Features, Form, and Footer sections

**Session 2025-11-26 PM (Earlier):**
- ✅ Replaced hero-main.png with hero-video.webm (autoplay, loop, muted)
- ✅ Downloaded and integrated ENCATA logo from Figma (node-id: 118:596)
- ✅ Fixed mobile menu to full-screen overlay with animations
  - Hamburger transforms to X icon
  - Dark backdrop with blur effect
  - Smooth fade-in transition
- ✅ Improved StatsCard layout and styling
  - Better spacing, shadows, border radius
  - Enhanced image quality rendering
  - Stacked text hierarchy
- ✅ Mobile-specific improvements (node-id: 116:61)
  - Cards vertical layout (image top, text below)
  - Cards and video fill full container width
  - Equal height cards using CSS Grid (165px fixed height)
  - Proper spacing (6px gap) matching design
- ✅ Tablet navigation optimization
  - Reduced header link gap to 32px for better spacing
- **Next:** Build Quote, Features, Form, and Footer sections

**Earlier session (2025-11-26 AM):**
- ✅ Extracted design tokens from Figma (colors, spacing, typography)
- ✅ Created CSS Variables system in `styles/variables.css`
- ✅ Built reusable components: Button, StatsCard, Navigation, Hero
- ✅ Implemented Hero section (desktop + mobile responsive)
- ✅ CSS Modules for scoped styling
- ✅ Dev server running at http://localhost:5173
