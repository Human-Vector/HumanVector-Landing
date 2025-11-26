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
**Session Goal:** Initialize project and set up foundation
- Status: In Progress
- Next: Configure Supabase, create components

---

## 🏗️ Stack & Setup
**Framework:** Vite + React 18
**Backend:** Supabase (forms, data)
**Styling:** Custom CSS (from Figma design tokens)
**Deployment:** Vercel
**Repository:** [GitHub - to be connected]

**Dev Server:** http://localhost:5173

---

## 📐 Page Structure
**From Figma:** Human Vector Landing Page (node-id: 75-21)

### Sections (to be built):
- [ ] Hero (with video background)
- [ ] Features/Benefits
- [ ] Contact Form
- [ ] Footer

### Key Components:
- `ContactForm` - Main form → Supabase
- `Hero` - Video background, main CTA
- [More as designed]

---

## 📁 Key Files
> Auto-update: Add files as they're created

```
/
├── src/
│   ├── App.jsx           # ✓ Main app component
│   ├── main.jsx          # ✓ Entry point
│   ├── components/       # ✓ Created, empty
│   └── lib/              # ✓ Created, empty
├── public/               # ✓ Created, empty
├── index.html            # ✓ HTML entry
├── vite.config.js        # ✓ Vite configuration
├── package.json          # ✓ Dependencies
├── .env.example          # ✓ Environment template
└── .gitignore            # ✓ Git ignore rules
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
**Colors:** [Extract from Figma]
**Typography:** [Extract from Figma]
**Spacing:** [Define as used]

---

## ✅ Features Completed
> Auto-update: Add as features are done

- [ ] Project initialization
- [ ] Page structure
- [ ] Contact form
- [ ] Supabase integration
- [ ] Styling/responsive
- [ ] Vercel deployment

---

## 🧠 Decisions Log
> Auto-update: Add every time we make a choice

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2025-11-26 | Created context file | Efficient session restarts |
| 2025-11-26 | Vite + React stack | Fast builds, minimal bundle, no SSR needed |
| 2025-11-26 | Skip Tailwind | Complete design system exists in Figma |
| 2025-11-26 | Custom CSS approach | Will extract design tokens from Figma MCP |

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

**Latest session (2025-11-26):**
- Created context file
- Next: Initialize project, connect to Figma design
