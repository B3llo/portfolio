# Portfolio — AI Context

## Stack
- Angular 13 + Tailwind CSS 3 + Angular Material 13 + FontAwesome
- SCSS per-component + global `src/styles.scss`
- Single-page app, no routing (one component: `HomeComponent`)

## Files
- `src/app/components/home/home.component.html` — page template (sections reference shared data)
- `src/app/components/home/home.component.ts` — slim shell: scroll state + icon handles, delegates theme to `ThemeService`
- `src/app/components/home/home.component.scss` — component styles only (no global selectors)
- `src/app/models/portfolio.models.ts` — `Experience`, `Certification`, `StaticProject`, `TechGroup` interfaces
- `src/app/data/portfolio.data.ts` — `PROJECTS`, `TECH_GROUPS`, `EXPERIENCES`, `CERTIFICATIONS` constants
- `src/app/services/theme.service.ts` — dark-mode state, localStorage (try/catch) + `prefers-color-scheme` fallback, applies `.dark` via `DOCUMENT`
- `src/app/directives/fade-in.directive.ts` — `appFadeIn`: IntersectionObserver fade-in, unobserves on reveal, `disconnect()` on destroy
- `src/styles.scss` — tailwind base, btn-primary, scrollbar
- No Angular Material: icons are FontAwesome (`fa-icon`), dividers are Tailwind borders. Dead code removed: `home.service.ts` (unused fetch), `emoji`/`repo-name` pipes, `toArray()`.
- `src/index.html` — Google Fonts: Libre Bodoni (italic, name only), Poppins, Roboto Mono
- `tailwind.config.js` — darkMode: "class", custom fonts: bodoni, poppins
- `angular.json` — component style budget: 6kb warning / 10kb error

## Design System
- **Fonts**: Poppins (body/headings), Libre Bodoni italic (navbar logo "Bello")
- **Section kickers**: mono `// about`, `// stack`, `// career`, `// credentials`, `// work`, `// say-hello` in accent color — terminal aesthetic tying sections to the hero prompt
- **Buttons**: `.btn-primary` (solid) + `.btn-ghost` (outline, accent on hover) in `src/styles.scss`
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

## Sections (in order, all `<section>` with aria-label; anchors use `scroll-mt-24` below fixed navbar)
1. Navbar (`<nav aria-label="Primary">`) — fixed, backdrop-blur, border on scroll
2. Hero — single page `h1` (name), "DevOps Engineer" prompt line, bio, CTAs: Know more + Get in touch (`.btn-ghost`)
3. About Me
4. Technologies — grouped grid (Cloud, Containers, IaC, CI/CD, Observability, Languages)
5. Experience — vertical timeline, 4 entries (Körber, Trimble, EZOps, Wing Corp)
6. Certifications — 3 cards (CKA, DVA, CLF)
7. Projects — static cards, repo-card hover
8. Contact — "Say hello" mailto CTA + social icons (all with aria-labels)
9. Footer
- Fixed left sidebar with social icons (desktop only)
- Back-to-top button (appears after scrolling 30px, `scrollToTop()` in `HomeComponent`)
- Skip-link (`#main`) + `:focus-visible` accent ring + `::selection` accent + `prefers-reduced-motion` disables fade/ripple/blink animations

## Owner Info (from resume)
- **Name**: Gabriel Felipe Bello
- **Role**: DevOps Engineer / Cloud Operations Development Specialist
- **Current employer**: Körber Supply Chain (Mar 2024 – present)
- **Skills**: AWS, Azure, GCP, OCI, Kubernetes, Terraform, Docker, Ansible, CI/CD, TypeScript, Bash
- **Certs**: CKA (Linux Foundation), AWS Developer Associate, AWS Cloud Practitioner
- **GitHub**: B3llo | **LinkedIn**: gabriel-felipe-bello | **Email**: gfbello.x@gmail.com
