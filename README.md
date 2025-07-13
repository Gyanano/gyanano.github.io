# Gyanano's Personal Website

A modern, responsive personal website built with Next.js, featuring smooth animations, frosted glass effects, and optimized for GitHub Pages deployment.

## Features

- 🎨 **Modern Design**: Frosted glass effects and gradient backgrounds
- ⚡ **Smooth Animations**: GSAP ScrollTrigger and Framer Motion animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🚀 **Fast Performance**: Static site generation with Next.js
- 📝 **Blog Ready**: Article pages with clean typography
- 🎯 **SEO Optimized**: Meta tags and structured data
- 🔧 **Easy Deployment**: Automated GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger, Framer Motion
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: ESLint, Prettier (optional)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gyanano_website.git
   cd gyanano_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. The GitHub Action will automatically build and deploy your site
4. Your site will be available at `https://yourusername.github.io/gyanano_website`

### Media Management

Store your media files in the following directories:
- `public/media/images/` - For images (JPG, PNG, SVG, WebP)
- `public/media/videos/` - For videos (MP4, WebM)
- `public/media/documents/` - For documents (PDF, DOC)

## Customization

### Personal Information

Update the following files with your information:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section and skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information

### Styling

- Colors and gradients: `src/app/globals.css`
- Component styles: Individual component files
- Tailwind configuration: `tailwind.config.js`

### Content

- Add articles: Create new folders in `src/app/articles/`
- Update navigation: Modify layout files
- Add new pages: Create new route folders in `src/app/`

## Project Structure

```
gyanano_website/
├── public/
│   ├── media/          # Media files storage
│   └── grid.svg        # Background pattern
├── src/
│   ├── app/
│   │   ├── articles/   # Blog articles
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   └── components/     # React components
├── .github/
│   └── workflows/      # GitHub Actions
└── next.config.ts      # Next.js configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on GitHub or contact [hello@gyanano.dev](mailto:hello@gyanano.dev).