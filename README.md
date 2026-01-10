# ercole.dev

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Live Site](https://img.shields.io/badge/live-www.ercole.dev-success)](https://www.ercole.dev)

Personal portfolio website for **Federico Ercole**, a Senior Software Engineer based in Vienna, Austria. This modern, responsive portfolio showcases professional experience, technical skills, and projects with smooth animations and dark/light theme support.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - Seamless theme switching with `next-themes`
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Modern UI** - Built with TailwindCSS and Lucide React icons
- **Performance Optimized** - Static site generation for fast loading times
- **SEO Friendly** - Optimized metadata and structure

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4.x
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **Deployment:** GitHub Pages

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main page composition
│   └── globals.css      # Global styles
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section with intro
    ├── About.tsx        # About me section
    ├── Experience.tsx   # Work experience timeline
    ├── Skills.tsx       # Technical skills showcase
    ├── Portfolio.tsx    # Projects portfolio
    ├── Contact.tsx      # Contact information
    ├── Footer.tsx       # Footer with links
    ├── ThemeProvider.tsx # Theme context provider
    └── ThemeToggle.tsx  # Dark/light mode toggle
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/sercinci/ercoledev.git
cd ercoledev

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build for Production

```bash
# Create an optimized production build
npm run build

# The static site will be generated in the `out/` directory
```

## 🌐 Deployment

This site is deployed as a static site on **GitHub Pages** at [www.ercole.dev](https://www.ercole.dev).

The build process uses Next.js static export to generate a fully static site that can be served from GitHub Pages. The `CNAME` file ensures the custom domain is properly configured.

### Automatic Deployment

The site uses **GitHub Actions** for continuous deployment. When code is pushed to the `master` branch:

1. The workflow automatically installs dependencies
2. Builds the Next.js static site (`npm run build`)
3. Deploys the `out/` directory to GitHub Pages

**No local builds required** - just push your code and the workflow handles the rest.

### Workflow Configuration

The deployment workflow is defined in `.github/workflows/deploy.yml` and includes:

- Automatic triggering on push to `master`
- Node.js 22 environment setup
- Dependency caching for faster builds
- Artifact upload and deployment to GitHub Pages

### Manual Deployment

You can also trigger the workflow manually from the GitHub Actions tab or build locally:

```bash
npm run build
# The static site will be generated in the `out/` directory
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Federico Ercole**

- Website: [www.ercole.dev](https://www.ercole.dev)
- GitHub: [@sercinci](https://github.com/sercinci)
