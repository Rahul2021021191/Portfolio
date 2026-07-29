# PRD — Rahul Gupta Portfolio

## Problem Statement
Premium, responsive personal portfolio for Rahul Gupta (Data Analyst | Business Analyst | MIS Executive). Dark glassmorphism theme, blue/purple/cyan gradients, Framer Motion animations, Poppins + Inter fonts. Awwwards-level craft with kinetic hero, smooth momentum scroll, custom cursor.

## Stack
React 19 (CRA/craco) + Tailwind + Framer Motion + Lenis + FastAPI + MongoDB.
Libraries: framer-motion, lenis, react-fast-marquee, react-countup, react-simple-typewriter, react-parallax-tilt, lucide-react.

## Architecture
- Frontend: `src/App.js` (Portfolio + 404 + Lenis/theme/loader), `src/data/portfolio.js` (all editable content), `src/components/portfolio/*` (Navbar, Hero, About, Skills, Experience, Projects, CertsEducation, Achievements, Contact, Footer, CustomCursor, Magnetic, Reveal, AuroraBackground, Loader, Widgets).
- Backend: `POST /api/contact` (validated, saved to Mongo `contact_messages`), `GET /api/contact` (list).
- Resume: static `/public/Rahul_Gupta_Resume.pdf` (generated placeholder).

## Implemented (2026-07-29)
- Kinetic hero (masked line reveal + typewriter + magnetic buttons + parallax + particles/blobs)
- About manifesto (numbered chapters + editorial marquee)
- Skills with animated gradient progress bars, Experience & Education timelines
- Projects (tilt + spotlight images + Live Demo/GitHub), Certifications, Animated counters
- Contact form (client validation + backend persistence + success animation) — VERIFIED
- Dark/Light toggle, sticky navbar + active section, scroll progress, back-to-top, custom cursor, loader, 404, SEO/OG tags, favicon
- Lenis smooth scrolling

## User Personas
- Recruiters/hiring managers evaluating Rahul for Data/Business Analyst & MIS roles.

## Backlog
- P1: Wire real GitHub/LinkedIn/email + real project Live Demo/GitHub URLs (currently placeholders `#`).
- P1: Replace placeholder resume PDF with Rahul's real resume.
- P2: Optional Resend email notification on contact submit.
- P2: Admin view for contact messages.
