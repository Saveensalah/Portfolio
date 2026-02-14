# Saveen Salah - Premium Developer Portfolio

A modern, high-end developer portfolio website built with Next.js, React, TypeScript, and Framer Motion. Features smooth scroll animations, glassmorphism design, and responsive layout.

## 🎨 Features

- ✨ **Smooth Scroll Animations** - Premium scroll experience with Lenis
- 🎬 **Framer Motion Animations** - Section reveals, hover effects, and transitions
- 🌌 **Glassmorphism + Neon Design** - Modern dark theme with glowing accents
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **High Performance** - Optimized loading and code splitting
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: React Icons
- **Package Manager**: npm

## 📁 Project Structure

```
resume/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navigation.tsx       # Navigation bar
│   │   ├── SmoothScroll.tsx     # Lenis integration
│   │   ├── ScrollReveal.tsx     # Scroll animation wrapper
│   │   ├── RotatingText.tsx     # Animated title
│   │   ├── CountUp.tsx          # Number counter animation
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero section with CTA
│   │       ├── About.tsx        # About section
│   │       ├── Skills.tsx       # Skills with animated bars
│   │       ├── Experience.tsx   # Work experience timeline
│   │       ├── Projects.tsx     # Project showcase
│   │       └── Contact.tsx      # Contact form & links
│   └── hooks/                  # Custom React hooks
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── .eslintrc.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to the project directory**
   ```bash
   cd resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📦 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Production build
npm build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎯 Sections Overview

### 1. Hero Section
- Animated profile image with floating effect
- Rotating title animation
- CTA buttons with hover effects
- Animated gradient background

### 2. About Section
- Professional summary
- Key highlights with icons
- Experience stats cards

### 3. Skills Section
- 4 skill categories (Frontend, Backend, DevOps, CMS)
- Animated skill bars
- Proficiency percentages
- Soft skills showcase

### 4. Experience Section
- Current role at Viral Fever Interactive
- Detailed responsibilities
- Employment timeline
- Interactive cards

### 5. Projects Section
- 3 project showcase cards
- Project images with overlay effects
- Tech stack tags
- GitHub and live demo links

### 6. Contact Section
- Contact information cards
- Contact form (Name, Email, Message)
- Social links (Email, LinkedIn, GitHub)
- Footer with credits

## 🎨 Customization

### Update Personal Information

**Hero Section** (`src/components/sections/Hero.tsx`):
```typescript
// Change name and title
const name = "Your Name"
const roles = ['Your Role 1', 'Your Role 2', ...]
```

**Contact Section** (`src/components/sections/Contact.tsx`):
```typescript
// Update contact info
const contactInfo = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  ...
]
```

### Change Colors

Update in `tailwind.config.ts`:
```typescript
colors: {
  'neon-blue': '#00D9FF',      // Change primary color
  'neon-purple': '#BD00FF',    // Change secondary
  'neon-pink': '#FF006B',      // Change accent
}
```

### Add Projects

Add entries to `projects` array in `src/components/sections/Projects.tsx`:
```typescript
{
  title: 'Project Name',
  description: 'Project description',
  image: 'https://example.com/image.jpg',
  tags: ['React', 'Tailwind'],
  github: 'https://github.com/...',
  live: 'https://...',
}
```

## 🖼️ Image Placeholders

Currently using placeholder images from `via.placeholder.com`. To use real images:

1. Replace URLs in components with actual image paths
2. Ensure images are optimized for web
3. Update `next.config.js` if using external image sources

## ⚡ Performance Optimization

- Lazy loading with Next.js Image component
- Code splitting with dynamic imports
- CSS-in-JS optimization with Tailwind
- Smooth scrolling without page jank
- Optimized animations with GPU acceleration

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`

## 🔧 Environment Variables

No environment variables required for basic setup. For future additions:
- Create `.env.local`
- Add your variables
- Reference with `process.env.NEXT_PUBLIC_*`

## 📚 Dependencies

### Production
- `react` - UI library
- `react-dom` - DOM rendering
- `next` - React framework
- `framer-motion` - Animation library
- `lenis` - Smooth scroll
- `react-icons` - Icon library
- `clsx` - Conditional classes
- `tailwind-merge` - Tailwind utilities

### Development
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `postcss` & `autoprefixer` - CSS processing
- `eslint` - Code linting

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize!

## 📄 License

MIT License - Feel free to use and modify

## 📞 Support

For issues or questions:
- Check the code comments
- Review Next.js documentation
- Explore Framer Motion docs
- Check Tailwind CSS reference

---

**Made with ❤️ by Saveen Salah**

Built with Next.js, React, and Framer Motion for a premium portfolio experience.
