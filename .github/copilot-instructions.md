# Development Instructions

This is a Next.js portfolio website project with TypeScript, Tailwind CSS, and Framer Motion.

## Project Overview

- **Type**: Premium Developer Portfolio Website
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + Lenis
- **Status**: Production Ready

## Key Features

✨ Smooth scroll animations with Lenis
🎬 Framer Motion section reveals and interactions
🌌 Glassmorphism + neon tech aesthetic
📱 Mobile-first responsive design
⚡ High performance with code splitting
🎯 SEO optimized with meta tags
♿ Accessible components

## Quick Start for Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open http://localhost:3000
4. Edit files in `src/components/` for changes
5. Changes hot reload automatically

## Project Structure

- `src/app/` - Next.js pages and layouts
- `src/components/` - Reusable React components
  - `sections/` - Main page sections (Hero, About, Skills, etc.)
- `src/hooks/` - Custom React hooks
- `public/` - Static assets

## Component Architecture

- **Layout** (`layout.tsx`) - Root layout with SmoothScroll wrapper
- **Page** (`page.tsx`) - Main page assembling all sections
- **Navigation** - Fixed header with responsive menu
- **Sections** - Hero, About, Skills, Experience, Projects, Contact

## Customization Guide

### Change Colors
Edit `tailwind.config.ts` for neon colors and theme

### Update Content
- Profile: Edit `Hero.tsx`, `About.tsx`
- Skills: Update skill arrays in `Skills.tsx`
- Experience: Modify `experienceData` in `Experience.tsx`
- Projects: Edit `projects` array in `Projects.tsx`

### Replace Placeholder Images
Update image URLs from `via.placeholder.com` to actual URLs

## Animation System

- **ScrollReveal**: Fade and slide animations on scroll
- **Framer Motion**: Used for all interactive animations
- **Lenis**: Smooth scrolling library

## Performance Tips

- Images auto-optimize via Next.js Image component
- Tailwind CSS: Only included styles are bundled
- Code splitting: Each component is code-split
- Smooth scroll powered by GPU acceleration

## Build & Deployment

```bash
npm run build      # Creates optimized production build
npm start          # Runs production server locally
npm run lint       # Check code quality
```

Deploy to Vercel with one button or use `vercel` CLI.

## Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

## Browser Support

Modern browsers with ES2017+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

- **Port 3000 in use?** Use `npm run dev -- -p 3001`
- **Build errors?** Delete `.next` folder and retry
- **Styling issues?** Check Tailwind CSS 3 compatibility

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lenis](https://lenis.darkroom.engineering)
