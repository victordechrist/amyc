# Adaobi Muonago Youth Center (AMYC) - Youth Tech Center Platform

An empowering, high-performance web platform for the **Adaobi Muonago Youth Center (AMYC)**, designed to provide youth with market-driven tech skills, industry certification pathways, hands-on portfolio projects, and structured mentorship.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **`next-themes`**.

---

## Table of Contents

- [Features & Highlights](#features--highlights)
- [Tech Stack Overview](#tech-stack-overview)
- [Getting Started](#getting-started)
- [Content Editing Guide (For Non-Developers)](#content-editing-guide-for-non-developers)
- [Deployment on Vercel](#deployment-on-vercel)
- [Architectural & Design Decisions](#architectural--design-decisions)
- [Future Roadmap](#future-roadmap)

---

## Features & Highlights

- 🎯 **5 Core Skill Pathways**: Software Development, Cybersecurity, Data Analytics & AI, Cloud Computing, and UI/UX Design.
- 📱 **Mobile-First Responsive Design**: Flawlessly optimized across 375px mobile screens up to 1440px desktop screens.
- 🌙 **Dark & Light Mode Support**: Seamless theme switching with class-based `next-themes` and custom design palette.
- ⚡ **Lightning Fast Static Generation**: Next.js Server Components and SSG for instant page load times and zero-JS layout shifts.
- ♿ **Accessible UI Primitives**: Keyboard navigable navigation menus, focus rings, high-contrast text, and ARIA tags.
- 🔄 **Form Stubs & Validation**: Interactive student, mentor, partner, and donor interest forms with client-side validation.

---

## Tech Stack Overview

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [`next-themes`](https://github.com/pacocoursey/next-themes)
- **Code Quality**: ESLint, Prettier, and TypeScript compiler

---

## Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Local Installation & Running

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-org/amyc.git
   cd amyc
   ```

2. **Install dependencies**:

   ```bash
   npm ci
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

- `npm run dev`: Starts the Next.js local development server.
- `npm run build`: Compiles and builds the production Next.js application.
- `npm run start`: Runs the production server locally after `npm run build`.
- `npm run lint`: Runs ESLint to check for code standards and warnings.
- `npm run format`: Automatically formats all code files with Prettier.

---

## Content Editing Guide (For Non-Developers)

All site content (text, statistics, testimonials, track curricula, and program schedules) is stored in structured TypeScript modules in the `lib/data/` directory. Non-developer team members can edit these files directly without touching page layout or JSX code.

### File Mapping Matrix

| Content / Site Section       | File Location              | Description of Editable Data                                                                             |
| :--------------------------- | :------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Skill Pathways & Syllabi** | `lib/data/tracks.ts`       | Track titles, descriptions, target skills, module outlines, project briefs, and certification alignment. |
| **Organization & Team**      | `lib/data/about.ts`        | Mission statement, founding story, core principles, vision, and team member profiles/bios.               |
| **Bootcamps & Cohorts**      | `lib/data/programs.ts`     | Bootcamp descriptions, duration, cohort start dates, schedules, and learning outcomes.                   |
| **Impact & Key Metrics**     | `lib/data/metrics.ts`      | Metrics counter numbers (e.g. Students Trained, Placement Rate, Certifications Earned).                  |
| **Testimonials & Stories**   | `lib/data/testimonials.ts` | Success stories, quotes, student roles, and outcome summaries.                                           |
| **Student Projects**         | `lib/data/showcase.ts`     | Featured student showcase projects, tech tags, descriptions, and demo links.                             |
| **Pathways to Join**         | `lib/data/get-involved.ts` | Information for Students, Mentors, Partners, and Donors, including bullet points and CTAs.               |
| **Learning Resources**       | `lib/data/resources.ts`    | Curated toolkits, starter guides, cheatsheets, and external learning links.                              |

### How to Edit Content Safely

1. Open the target file in `lib/data/` (e.g., `lib/data/tracks.ts`).
2. Update text strings within quotes (e.g., `"New Track Description"`).
3. Ensure quotes and commas surrounding the text remain intact.
4. Run `npm run build` locally or commit changes to preview on Vercel.

---

## Deployment on Vercel

This repository is optimized for zero-manual-config deployment on [Vercel](https://vercel.com).

### Deployment Steps

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Vercel automatically detects Next.js build settings.
4. _(Optional)_ Add the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel project settings (e.g. `https://amyc.vercel.app`).
5. Click **Deploy**. Your site will build and publish automatically.

---

## Architectural & Design Decisions

### 1. Component Library Choice

- **Decision**: Built custom accessible UI primitives in `components/ui/` using Tailwind CSS, `clsx`, `tailwind-merge`, and Lucide React icons following `shadcn/ui` patterns.
- **Rationale**: Keeps total bundle size light, eliminates complex external library dependencies, and guarantees total control over styling, dark mode, and accessibility.

### 2. Content Architecture Format

- **Decision**: Structured, typed TypeScript data files (`lib/data/`) as the primary content layer, alongside support for MDX files in `content/` for long-form articles.
- **Rationale**: Provides instant type safety, IDE autocompletion, zero build-time parsing overhead, and clear file isolation for non-developer content updates.

### 3. Donate Strategy & Route

- **Decision**: `/donate` is configured as a dedicated Next.js route (`app/donate/page.tsx`) that performs a server-side redirect to `/get-involved?role=donor#donate`.
- **Rationale**: Allows external share links or marketing CTAs to point directly to `/donate` while keeping the registration/sponsorship interface unified on the `/get-involved` page.

### 4. Inclusive Youth-Centered Placeholder Content

- **Decision**: All initial placeholder copy (location, cohort schedules, program fees, and contact details) is written with empowering, inclusive, professional language without any generic "lorem ipsum" filler text.
- **Rationale**: Ensures the platform is immediately presentation-ready and usable for stakeholder previews before real program details are finalized.

---

## Future Roadmap

- 📩 **Backend Form Integration**: Connect `ContactForm` and `InterestForm` stubs to email sending services (e.g., Resend or SendGrid API) or Webhook destinations.
- 🔐 **Authentication & Student Portal**: Implement Auth.js / Clerk authentication for student assignment submissions, attendance tracking, and mentor scheduling.
- 📊 **Headless CMS Integration**: Optional integration with Sanity.io or Payload CMS to give non-technical administrators a rich visual editor for `lib/data/` modules.
- 🗄️ **Database Integration**: Connect a PostgreSQL database (via Prisma or Supabase) for applicant pipeline management and real-time impact tracking.
