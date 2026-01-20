# Portfolio Website

A modern, responsive personal portfolio built with **Next.js (App Router)** and **shadcn/ui**, designed to showcase projects, accreditations, and professional experience.

The site focuses on clarity, performance, and maintainability, with a clean UI and minimal dependencies.

---

## Features

- **Hero landing page** with featured projects and accreditations
- **Projects section**
  - Individual project pages
  - Objectives, screenshots (with lightbox), tech stack
  - Optional code snippets
- **Accreditations & certifications** showcase
- **Contact page** with email, phone, and location
- **CV / Diploma pages** with PDF rendering
- **Dark / Light mode** toggle
- **Analytics consent banner** (Rybbit analytics)
- Fully responsive and accessible UI
- Static-first with dynamic routing where appropriate

---

## Tech Stack

### Core

- **Next.js 16+** (App Router)
- **React 19**
- **TypeScript**
- **pnpm**

### UI & Styling

- **Tailwind CSS v4**
- **shadcn/ui**
- **Radix UI primitives**
- **Font Awesome (free)**

### Tooling

- ESLint
- PostCSS
- Framer Motion (animations where appropriate)

---

## Project Structure

.
├── public/ # Static assets (images, PDFs)
│ └── projects/ # Project screenshots
├── src/
│ ├── app/ # Next.js App Router pages
│ │ ├── projects/ # Project list + dynamic project pages
│ │ ├── accreditations/
│ │ ├── contact/
│ │ ├── cv/
│ │ └── diploma/
│ ├── components/ # Reusable UI & feature components
│ ├── data/ # Static data (projects, nav, accreditations)
│ ├── lib/ # Utilities (randomisation, consent logic)
│ └── types/ # Global/shared types
└── README.md

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install dependencies

`powershell`
pnpm install
