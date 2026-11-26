# Portfolio — Gabriel F. Bello

An English-language DevOps portfolio built with Astro 5 and Tailwind CSS. The site is static and the content works without client-side JavaScript.

```bash
pnpm install --frozen-lockfile
pnpm dev      # http://localhost:4321
pnpm build    # static output in dist/
pnpm preview  # preview that output locally
```

- Edit profile, experience, certifications, and the fallback repositories in `src/data/portfolio.ts`.
- The projects section reads the six newest public repositories from GitHub at build time. A timeout, unsuccessful response, or empty result uses the local list instead.
- The terminal is optional and opens from the About section. Try `help`. It supports only portfolio commands; the whole site remains navigable without the prompt.
- A short native sticky interval keeps the opening chassis in view for roughly 100–148 px of scroll, then releases it. The sliced surname keeps its gentler pace. Short viewports, reduced motion, and no-JS layouts have no extra scroll distance. The Projects introduction stays in view as repository notes pass it; project and career entries settle into place. Short, time-based easing smooths only the artwork between wheel or touch updates; the page and navigation always track native scroll. With reduced motion the layout is static and the header still indicates the current chapter.
- Motion studies: [Codrops’ Sliced Text Effect](https://github.com/codrops/SlicedTextEffect) for independent type bands and [Sticky Sections](https://github.com/codrops/StickySections) for the relationship between a fixed point and moving content. The SVG, layout, and motion code here are original; no remote animation dependencies.
- Theme and layout tokens live in `src/styles/global.css`. Newsreader, IBM Plex Mono, and Space Grotesk are self-hosted (licenses in `public/fonts/`).

The previous Angular v1 is archived in `legacy-angular/` (see tag `v1-angular-final`).
