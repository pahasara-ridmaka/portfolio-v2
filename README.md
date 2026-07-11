# Portfolio v2

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This project presents Pahasara Ridmaka's profile, featured projects, and certifications in a modern single-page layout with section-based navigation.

## Features

- Hero section with quick contact actions
- Personal profile and technology stack section
- Project showcase with interactive modal previews
- Certification gallery with carousel and full-screen preview
- Sticky navigation with smooth scrolling
- Responsive design optimized for desktop and mobile

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```text
app/                    # App Router pages, layout, and global styles
components/             # Shared UI components (navbar, footer)
sections/               # Page sections (hero, whoami, projects, certifications)
public/                 # Static assets (images, icons, resume)
```

## Content Updates

Main portfolio data (projects and certifications) is currently defined in:

- `app/page.tsx`

Section implementations are located in:

- `sections/hero/HeroSection.tsx`
- `sections/whoami/WhoamiSection.tsx`
- `sections/projects/ProjectSection.tsx`
- `sections/certifications/CertificationSection.tsx`

## Deployment

This project can be deployed to platforms that support Next.js, such as Vercel.

Live site: https://www.pahasara.me/
