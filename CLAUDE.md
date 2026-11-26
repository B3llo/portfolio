# Portfolio — Project Context

## Stack

- Astro 5 static site, Tailwind CSS 3, and pnpm. No client-side UI framework.
- `src/pages/index.astro` fetches the repository feed once for the terminal and project list, and composes the English-language homepage; keep the public section IDs stable (`work`, `career`, `certs`, `about`, `stack`, `contact`).
- `src/layouts/Base.astro` owns metadata, person structured data, and early theme initialization. `src/components/Header.astro` owns the accessible theme toggle. Dark is the default; `ops-theme` persists a manual choice.
- `src/styles/global.css` owns the visual tokens and responsive layout. Newsreader, IBM Plex Mono, and Space Grotesk are self-hosted. The optional terminal in About (`src/components/PortfolioTerminal.astro`) runs only a fixed set of portfolio commands. It clones predefined output markup and does not interpret commands as JavaScript or run an operating-system shell.
- `src/data/portfolio.ts` owns profile, socials, technologies, experience, certifications, and fallback projects. Career outcomes sit next to the corresponding entries in the timeline. `src/data/project-notes.ts` adds editorial descriptions to matching repositories without changing the feed order.
- `src/data/github.ts` fetches the six most recent public repos at build time, sorted by creation date. Unavailable or empty responses fall back to the local list; the section copy reflects the source.
- `src/components/SignalRail.astro` connects the page headings to a shared scroll indicator and syncs the header’s active section. The content and navigation do not depend on the script; reduced motion disables continuous drawing.
- The old Angular v1 is archived in `legacy-angular/` (tag `v1-angular-final`).

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```
