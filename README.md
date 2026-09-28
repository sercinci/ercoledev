# ercole.dev

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Live Site](https://img.shields.io/badge/live-www.ercole.dev-success)](https://www.ercole.dev)

Personal website for **Federico Ercole**, a Senior Software Engineer based in Vienna, Austria. The site is split into three pages:

- **`/`** is the personal landing: who Federico is, a short story and a clear way into the other two pages.
- **`/services`** is the freelance commissioning page: fixed-price packages, live websites, selected work and project enquiries.
- **`/cv`** is the full CV for recruiters and hiring teams: experience, skills, projects, hackathons and volunteering.

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
│   ├── layout.tsx           # Root layout, site-wide metadata and theme provider
│   ├── page.tsx             # Personal landing (/)
│   ├── services/page.tsx    # Freelance commissioning page (/services)
│   ├── cv/page.tsx          # Full CV (/cv)
│   ├── **/opengraph-image.tsx # Per-page Open Graph cards, generated at build time
│   ├── sitemap.ts / robots.ts
│   └── globals.css
├── components/
│   ├── Header.tsx           # Per-page navigation plus links to the other pages
│   ├── Hero.tsx             # Landing intro and highlights
│   ├── About.tsx            # Landing story
│   ├── Pathways.tsx         # Landing doors to /services and /cv
│   ├── Services.tsx         # Fixed-price packages
│   ├── Websites.tsx         # Live sites clients can open
│   ├── Portfolio.tsx        # Projects (client work or everything)
│   ├── Experience.tsx, Skills.tsx, Volunteering.tsx # CV sections
│   ├── Contact.tsx          # Project enquiry or general contact
│   ├── StructuredData.tsx   # JSON-LD for person, business and offers
│   └── Footer.tsx, ThemeProvider.tsx, ThemeToggle.tsx, VideoModal.tsx
└── lib/                     # Project, website, link and SEO data
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
