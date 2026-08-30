<div align="center">

# Portfolio v2

### _A modern personal portfolio featuring projects, MDX blog, and live GitHub stats_

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer)](https://www.framer.com/motion/)

---

</div>

🚀 A modern personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS, featuring project showcases, an MDX-driven blog, and a live GitHub contribution heatmap.

## ✨ Core Features

- **Dynamic Landing Page:** Responsive interface with smooth animations and layout transitions
- **Project Showcase:** Detailed case studies with dedicated individual project pages
- **MDX Blog Engine:** Fast, markdown-powered articles powered by `next-mdx-remote` and `gray-matter`
- **Interactive About Section:** Comprehensive view of background, experience, and technical skill sets
- **Live GitHub Heatmap:** Real-time contribution calendar integrated via GitHub GraphQL API
- **Optimized Performance:** App Router architecture with structured SEO metadata and clean layouts

## 🧰 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI & Styling:** React 19, Tailwind CSS 4
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Content / CMS:** `gray-matter`, `next-mdx-remote` (MDX)
- **Data Integration:** GitHub GraphQL API

## 📦 Project Structure

- `app/` — Routes, layouts, metadata, and API endpoints (including GitHub contributions)
- `components/` — Shared structural UI components and modular page sections
- `content/blog/` — MDX articles and blog post source files
- `lib/` — Data loading utilities for projects and MDX blog posts
- `public/` — Static media, custom graphics, and downloadable assets

## 🔑 Environment Variables

To enable the live GitHub contribution heatmap, create a `.env.local` file in the root directory:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

The route handler at `app/api/github-contributions/route.ts` consumes this token to query GitHub's GraphQL API.

## 📝 Content Management

- **Projects:** Configured statically in `lib/projects.ts`
- **Blog Loaders:** Post parsers and metadata helpers configured in `lib/blog.ts`
- **Articles:** Add new `.mdx` files with frontmatter directly to `content/blog/`

## 🌐 Live Demo & Deployment

- **Live URL:** [https://www.pahasara.me/](https://www.pahasara.me/)
- **Deployment:** Fully optimized and continuously deployed on [Vercel](https://vercel.com/)
