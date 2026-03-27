# Sibam Prasad Sahoo — Portfolio

A stunning production-grade personal portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🚀 Features
- ✨ Dark/Light mode toggle (defaults to dark)
- 🌌 Particle constellation hero animation
- ⌨️ Typewriter role animation
- 🎯 Smooth scroll + section fade-in on viewport entry
- 🖱️ Custom cursor with glow effect
- 🃏 Glassmorphism project cards with hover glow
- 📜 Animated vertical experience timeline
- 👾 Konami code easter egg (`↑↑↓↓←→←→BA`)
- 📱 Fully responsive, mobile-first

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Space Grotesk, Inter, JetBrains Mono

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── CustomCursor.jsx
│   └── KonamiCode.jsx
├── data/
│   └── portfolio.js       ← Update all your content here
├── hooks/
│   └── useCountUp.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select your repo → Deploy ✅

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

## ✏️ Updating Content

All portfolio content lives in `src/data/portfolio.js`. You never need to touch the components to update your info — just edit the data file!

```js
export const portfolioData = {
  about: { name: "...", title: [...], ... },
  skills: { "Languages": [...], ... },
  projects: [...],
  experience: [...],
  achievements: [...]
};
```

## 📄 License
MIT — free to use and modify.

---

> Built with React & obsession 💙
