# Gyanano Portfolio

A minimalist, dark-themed personal portfolio website showcasing full-stack and embedded systems engineering work.

[中文版](./README_CN.md)

## Features

- **Smooth Page Transitions** - Elegant enter/exit animations using Framer Motion
- **Interactive Particle Background** - Canvas-based particle system that responds to mouse movement
- **Custom Cursor** - Animated cursor with hover effects (desktop only)
- **Responsive Design** - Mobile-friendly layout with adaptive particle count
- **Dark Aesthetic** - Minimalist black/white theme with JetBrains Mono typography

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- React Router (HashRouter)
- Tailwind CSS (CDN)
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gyanano/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── index.html          # HTML entry with Tailwind config
├── index.tsx           # React entry point
├── App.tsx             # Main app component with routing
├── types.ts            # TypeScript type definitions
├── components/
│   ├── BackgroundEffect.tsx   # Particle canvas animation
│   ├── CustomCursor.tsx       # Animated cursor component
│   ├── Navigation.tsx         # Top navigation bar
│   └── SmoothTransition.tsx   # Page transition wrapper
└── pages/
    ├── Home.tsx        # Landing page
    ├── About.tsx       # Profile & skills page
    └── Projects.tsx    # Project showcase page
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero section with animated typography |
| `/about` | Profile - Bio and skills grid |
| `/work` | Projects - Selected work with descriptions |

## License

MIT

## Contact

- GitHub: [@gyanano](https://github.com/gyanano)
- Email: gyanano@foxmail.com
