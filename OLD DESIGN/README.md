<div align="center">

<img src="public/favicon.svg" width="80" alt="SPS Logo" />

# Sibam Prasad Sahoo — Personal Portfolio

**AI & ML Engineer · Hackathon Builder · GDG On Campus Founder · ISRO Trainee**

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white&labelColor=20232a)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white&labelColor=1a1a2e)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=0f172a)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=flat-square&logo=framer&logoColor=white&labelColor=1a1a1a)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

> Production-grade personal portfolio website — built with React, Vite, Tailwind CSS v4, and Framer Motion.  
> Fully responsive, dark-first, animation-rich, and deployed to Vercel.

<br/>

[Live Demo](#) &nbsp;·&nbsp; [Report Bug](https://github.com/SIBAM890/My-Portfolio/issues) &nbsp;·&nbsp; [Connect on LinkedIn](https://www.linkedin.com/in/sibam-prasad-sahoo/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

This is the source code for my personal portfolio website — a fully custom-built, production-ready React application. It showcases my projects, technical skills, internship experience, academic achievements, and contact information.

The site is designed with a **dark-first aesthetic**, glassmorphism cards, particle animation, smooth scroll-triggered transitions, and a complete responsive layout — all without any UI component library.

---

## Features

| Category | Details |
|---|---|
| **Theme** | Dark mode default, light mode toggle — class-based via Tailwind v4 `@custom-variant` |
| **Animation** | Framer Motion scroll-triggered fade-ins, staggered children, spring physics |
| **Hero** | Full-viewport particle constellation canvas, typewriter role cycling, orbiting tech icons |
| **Cursor** | Custom glow cursor with lagging aura (desktop only) |
| **Typing Effect** | Character-level typewriter with delete + cycle animation |
| **Skills** | Color-coded pill tags per category, hover glow, animated stagger-in |
| **Projects** | Bento grid layout, glassmorphism cards, glow border on hover, build time badge |
| **Experience** | Vertical timeline with scroll-animated fill line, company color-coded badges |
| **Achievements** | Gradient icon cards with spring animation |
| **Contact** | Minimal dark form with send state feedback, social links |
| **Easter Egg** | Konami code (`↑↑↓↓←→←→BA`) triggers a retro terminal animation |
| **SEO** | Full `<head>` meta tags, Open Graph, semantic HTML5 |
| **Responsive** | Mobile-first layout, responsive grid, hamburger menu |
| **Performance** | Vite build, lazy evaluation, gzip ~115 KB JS bundle |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 (PostCSS plugin) |
| Animations | Framer Motion 12 |
| Icons | React Icons (Feather set) |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| Deployment | Vercel (with `vercel.json` config) |
| Package Manager | npm |
| Version Control | Git + GitHub |

---

## Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg                  # Custom SVG favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky nav, dark toggle, mobile drawer
│   │   ├── Hero.jsx                 # Particle canvas, typewriter, CTA
│   │   ├── About.jsx                # Story, animated counters, code block
│   │   ├── Skills.jsx               # Color-coded skill pills by category
│   │   ├── Projects.jsx             # Bento grid, glassmorphism project cards
│   │   ├── Experience.jsx           # Animated vertical timeline
│   │   ├── Achievements.jsx         # Icon gradient achievement cards
│   │   ├── Contact.jsx              # Dark form + social links
│   │   ├── Footer.jsx               # Copyright + Konami hint
│   │   ├── CustomCursor.jsx         # Glow cursor (desktop only)
│   │   └── KonamiCode.jsx           # Easter egg terminal animation
│   │
│   ├── data/
│   │   └── portfolio.js             # All content — edit ONLY this file
│   │
│   ├── hooks/
│   │   └── useCountUp.jsx           # Animated number counter component
│   │
│   ├── App.jsx                      # Root layout, dark mode state
│   ├── main.jsx                     # React DOM entry point
│   └── index.css                    # Global styles, Tailwind import, custom vars
│
├── index.html                       # HTML shell + meta tags
├── vite.config.js                   # Vite build config
├── tailwind.config.js               # Tailwind v4 config (minimal, v4 handles most)
├── postcss.config.js                # @tailwindcss/postcss plugin
├── vercel.json                      # Vercel SPA rewrite + cache headers
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SIBAM890/My-Portfolio.git
cd My-Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Available Scripts

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Build for production (outputs to /dist)
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Configuration

All portfolio content is centralized in a **single file**:

```
src/data/portfolio.js
```

You never need to touch any component to update your content. The file exports one object with the following shape:

```js
export const portfolioData = {
  about: {
    name: "...",
    title: ["Role 1", "Role 2", "..."],   // Typewriter cycle
    email: "...",
    github: "...",
    linkedin: "...",
    location: "...",
    story: "...",
    stats: [{ label, value, suffix }, ...]
  },

  skills: {
    "Category Name": ["Skill 1", "Skill 2", ...],
    // Add as many categories as needed
  },

  projects: [
    {
      name: "...",
      description: "...",
      tags: ["tech", "stack"],            // Shown as code pills
      categoryTags: ["Production", "AI"], // Shown as colored badges
      github: "https://...",
      featured: true,                     // Shows a Featured badge
      buildTime: "48 Hours"
    }
  ],

  experience: [
    {
      role: "...",
      company: "...",
      duration: "...",
      achievements: ["bullet 1", "bullet 2"]
    }
  ],

  achievements: [
    { title: "...", description: "..." }
  ]
};
```

---

## Deployment

### Vercel (Recommended)

This project includes a `vercel.json` that configures:
- SPA routing rewrites (all paths → `/index.html`)
- Long-term asset caching (`Cache-Control: immutable`)

**Option 1 — Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **New Project** → Import `SIBAM890/My-Portfolio`
3. Leave all settings as default → click **Deploy**

**Option 2 — Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

### Manual / Other Hosts

```bash
npm run build
# Upload the /dist folder to any static host (Netlify, GitHub Pages, Cloudflare Pages, etc.)
```

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background Dark | `#0a0a1a` | Page background (dark mode) |
| Background Light | `#f8fafc` | Page background (light mode) |
| Primary | `#4f8ef7` | Electric blue — buttons, accents, links |
| Accent | `#00d4ff` | Cyan — gradients, highlights |
| Text Dark | `#ffffff` | Body text (dark mode) |
| Text Light | `#0f172a` | Body text (light mode) |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings | Space Grotesk | 600–700 |
| Body | Inter | 300–500 |
| Code / Monospace | JetBrains Mono | 400–500 |

### Animation Principles

- All entry animations use `useInView` with `once: true` — fire once, never repeat
- Spring physics used for pill/card hover (`stiffness: 260, damping: 18`)
- Staggered children for skill pills and project cards (`staggerChildren: 0.06`)
- Reduced motion: Framer Motion automatically respects `prefers-reduced-motion`

---

## Contributing

This is a personal portfolio, but contributions (bug fixes, performance improvements, accessibility enhancements) are welcome.

```bash
# Fork → Clone → Branch
git checkout -b fix/your-fix-name

# Make changes, then
git commit -m "fix: description of change"
git push origin fix/your-fix-name

# Open a Pull Request on GitHub
```

Please keep PRs small and focused. Open an issue first for large changes.

---

## License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

See [LICENSE](LICENSE) for details.

---

## Author

<div align="center">

**Sibam Prasad Sahoo**

BTech AI & ML · Sri Sri University, Cuttack · 2024–2028

[![GitHub](https://img.shields.io/badge/GitHub-SIBAM890-181717?style=flat-square&logo=github)](https://github.com/SIBAM890)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sibam--prasad--sahoo-0077b5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/sibam-prasad-sahoo/)
[![Email](https://img.shields.io/badge/Email-sibam.s24btcseai%40srisriuniversity.edu.in-ea4335?style=flat-square&logo=gmail&logoColor=white)](mailto:sibam.s24btcseai@srisriuniversity.edu.in)

<br/>

_Built with React & obsession — © 2026 Sibam Prasad Sahoo_

</div>
