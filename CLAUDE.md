# Portfolio — AI Context

## Stack
- Astro 5 static site + Tailwind CSS 3, package manager `pnpm`
- Zero client-side framework: one inline `<script>` in `src/layouts/Base.astro`
  (reveal-on-scroll, scrollspy, navbar border, back-to-top, theme toggle, mobile nav, footer year)
- Previous Angular v1 archived in `legacy-angular/` (tag `v1-angular-final`)

## Files
- `src/pages/index.astro` — composes all sections
- `src/layouts/Base.astro` — head (SEO, fonts, JSON-LD, theme init), global inline JS/CSS
- `src/components/Header.astro` — status bar (`bello@prod:~$`), scrollspy nav, theme toggle, mobile menu
- `src/components/Hero.astro` — `h1` name, role prompt with block cursor, readout strip, `[view work]` / `[say hello]` bracket buttons
- `src/components/About.astro`, `Stack.astro`, `Experience.astro`, `Certs.astro`, `Projects.astro`, `Contact.astro`, `Footer.astro`, `Socials.astro`, `BackToTop.astro`
- `src/data/portfolio.ts` — profile, socials, tech groups, experiences, certifications, fallback projects
- `src/styles/global.css` — Mono tokens, `.tbtn` bracket buttons, `.tag`, `.sec-label`, reveal, reduced-motion
- `tailwind.config.mjs` — `font-mono: Space Mono`, `font-code: JetBrains Mono`
- `public/favicon.svg` — stone square with green `>_`

## Design System (Mono)
- **Fonts**: Space Mono (everything), JetBrains Mono (code/readouts)
- **Light (default)**: stone `#E7E5E4` bg, `#57534E` body text (`#78716B` reserved for large/secondary — the spec token fails AA on body), neon `#37F712` highlights, blue `#0284C7` links
- **Dark (opt-in `.dark`)**: terminal green-on-black `#0B0E0B`, links `#00A6F4`
- Square corners, compact density, hairline rules, numbered `$` section labels

## Projects (section 04)
- `src/components/Projects.astro` fetches the 6 most recent public repos at **build time**
  from `api.github.com/users/B3llo/repos` (`type=public&sort=created&direction=desc`),
  falling back to the curated `portfolio.ts` list when the API fails or is rate-limited.
- Topics fall back to the repo language; each row shows `★ stargazers_count`.

## Sections (in order)
1. Header — fixed status bar, scrollspy, theme toggle
2. Hero — `whoami`, readout strip (`exp / certs / focus / status`)
3. `01` About, `02` Stack (definition rows), `03` Career (`git log` rows), Certs, `04` Work, `05` Contact
4. Footer — colophon (typefaces, Astro), dynamic year

## Owner Info (from resume)
- **Name**: Gabriel Felipe Bello
- **Role**: DevOps Engineer / Cloud Operations Development Specialist
- **Current employer**: Infios, formerly Körber Supply Chain (Mar 2024 – present)
- **Skills**: AWS, Azure, GCP, OCI, Kubernetes, Terraform, Docker, Ansible, CI/CD, TypeScript, Bash
- **Certs**: CKA (Linux Foundation), AWS Developer Associate, AWS Cloud Practitioner
- **GitHub**: B3llo | **LinkedIn**: gabriel-felipe-bello | **Email**: gfbello.x@gmail.com
