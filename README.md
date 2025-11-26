# Human Vector Landing Page

Fast, responsive landing page built with Vite + React.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Add your Supabase credentials to .env
# Then start dev server
npm run dev
```

## Stack

- **Vite** - Fast build tool
- **React 18** - UI framework
- **Supabase** - Backend & database
- **Custom CSS** - Design tokens from Figma

## Scripts

- `npm run dev` - Start dev server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Variables

Required in `.env`:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key

## Deployment

Optimized for Vercel - connects automatically to GitHub repo.

## Project Context

See `.claude/CONTEXT.md` for full project documentation.
