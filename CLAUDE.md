# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack for fast iteration
- `npm run build` - Build static site for production (outputs to `out/` directory)
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint with Next.js TypeScript configuration

## Architecture

This is a **static Next.js website** built for GitHub Pages deployment with these key architectural decisions:

### Static Export Configuration
- Uses `output: 'export'` in `next.config.ts` for static site generation
- Configured with `basePath` and `assetPrefix` for GitHub Pages (`/gyanano_website`)
- Images are unoptimized (`unoptimized: true`) for static hosting compatibility

### Animation Libraries
- **Framer Motion**: Used for component-level animations and interactions
- **GSAP with ScrollTrigger**: Used for scroll-based animations (check existing components for patterns)
- Both libraries work together - Framer Motion for UI state changes, GSAP for scroll effects

### Component Structure
- Components use `'use client'` directive when they need client-side interactivity
- Main sections: `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Contact.tsx`
- Frosted glass design pattern using `backdrop-blur-lg bg-white/10 border border-white/20`

### Styling System
- **Tailwind CSS v4** with custom gradient utilities
- Gradient text pattern: `bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent`
- Consistent spacing and responsive design with mobile-first approach

### Content Management
- Articles live in `src/app/articles/` with individual route folders
- Media files organized in `public/media/` with subdirectories for images, videos, documents
- Static assets in `public/` root for favicons, SVGs, etc.

## Development Patterns

### Adding New Components
- Follow existing Framer Motion animation patterns for consistency
- Use the established frosted glass styling for cards and modals
- Implement responsive design with Tailwind's mobile-first breakpoints

### Adding Articles
- Create new folder in `src/app/articles/[article-name]/`
- Add `page.tsx` with article content
- Articles inherit layout from `src/app/articles/layout.tsx`

### Deployment
- Site auto-deploys to GitHub Pages via GitHub Actions
- Build artifacts go to `out/` directory
- Static export means no server-side features (no API routes, ISR, etc.)