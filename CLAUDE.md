# Portfolio — AI Context

## Stack
- Angular 13 + Tailwind CSS 3 + Angular Material 13 + FontAwesome
- SCSS per-component + global `src/styles.scss`
- Single-page app, no routing (one component: `HomeComponent`)

## Files
- `src/app/components/home/home.component.html` — entire page template
- `src/app/components/home/home.component.ts` — logic, theme, IntersectionObserver, data
- `src/app/components/home/home.component.scss` — all component styles
- `src/app/components/home/home.service.ts` — GitHub API fetch (B3llo, per_page=6)
- `src/styles.scss` — tailwind base, btn-primary, scrollbar
- `src/index.html` — Google Fonts: Libre Bodoni (italic, name only), Poppins, Roboto Mono
- `tailwind.config.js` — darkMode: "class", custom fonts: bodoni, poppins
- `angular.json` — component style budget: 6kb warning / 10kb error

## Design System
- **Fonts**: Poppins (body/headings), Libre Bodoni italic (navbar logo "Bello")
- **Colors light**: indigo-700 (#4338ca) accents, neutral-50 bg
- **Colors dark**: cyan-400 (#22d3ee) accents, neutral-900 bg
- **Dark mode**: toggled via `isDarkTheme` boolean → `[ngClass]="{dark: isDarkTheme}"` on `<html>`, persisted in localStorage
- **Animations**: fade-in via `.fade-in-section` + IntersectionObserver; ripple dot; blink cursor

## Projects (static, hardcoded in home.component.ts)
- Fimcostes — `https://github.com/B3llo/fimcostes`
- CI/CD AWS Pipeline — `https://github.com/B3llo/aws-cicd`
- Bitbucket Pipelines — `https://github.com/B3llo/bitbucket-pipelines`
- Portfolio — `https://github.com/B3llo/portfolio`
- CKA Training Course — `https://github.com/B3llo/cka-training`
No GitHub API fetch — `HomeService` is unused (can be removed later).

## Sections (in order)
1. Navbar — fixed, backdrop-blur, border on scroll
2. Hero — name, "DevOps Engineer" title with blink cursor, bio
3. About Me
4. Technologies — grouped grid (Cloud, Containers, IaC, CI/CD, Observability, Languages)
5. Experience — vertical timeline, 4 entries (Körber, Trimble, EZOps, Wing Corp)
6. Certifications — 3 cards (CKA, DVA, CLF)
7. Projects — GitHub API (6 repos), skeleton loader, repo-card hover
8. Contact — social icons (GitHub, LinkedIn, Instagram, Email)
9. Footer
- Fixed left sidebar with social icons (desktop only)

## Owner Info (from resume)
- **Name**: Gabriel Felipe Bello
- **Role**: DevOps Engineer / Cloud Operations Development Specialist
- **Current employer**: Körber Supply Chain (Mar 2024 – present)
- **Skills**: AWS, Azure, GCP, OCI, Kubernetes, Terraform, Docker, Ansible, CI/CD, TypeScript, Bash
- **Certs**: CKA (Linux Foundation), AWS Developer Associate, AWS Cloud Practitioner
- **GitHub**: B3llo | **LinkedIn**: gabriel-felipe-bello | **Email**: gfbello.x@gmail.com
