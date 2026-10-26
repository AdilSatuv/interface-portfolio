# AdilSatuv — multi-page portfolio

Nine statically generated HTML pages: `/`, `/projects/`, five `/projects/{id}/` cases, `/approach/`, and `/contact/`. Next.js App Router static export, React, SCSS Modules and Framer Motion. The background is white; the shared workspace navigation and project explorer are retained.

## Navigation and architecture

Navigation uses ordinary `<a>` links so changing page requests a separate HTML document. Every page renders its content and navigation on the server; reading cases and moving between pages works without JavaScript. Interactive filtering and video require JavaScript. `SiteShell` shares navigation and the page frame; `ProjectCase` renders per-project content from `content/case-studies.js`; `Work` owns catalogue selection; `VideoPreview` assigns media src only after explicit activation. Legacy root hashes redirect to the corresponding pages with `location.replace`.

Each page has its own title, description and canonical URL. The sitemap lists all nine pages. All five project websites remain separate. These are fictional, AI-assisted learning projects, with no invented clients or commercial outcomes. Private repository access remains unchanged.

## Run and validate

`npm ci`, `npm run dev`. Production: `npm run build` exports `out/`. `npm test` checks content and local assets. `npm run test:e2e` checks document navigation, navigation without JavaScript, all nine routes, page titles/canonicals, accessibility, four viewport widths, video playback, legacy hashes and 404 handling. CI uses Chromium desktop/mobile emulation, Firefox and Linux WebKit. Actual phones and VoiceOver/TalkBack remain untested.

`node scripts/check-budgets.mjs` checks every generated page against JS and HTML gzip limits, plus global raster limits. No video URL is assigned before explicit activation. Recordings and local font licenses are retained from the existing project.

The home page now shows five visual project cards and capability examples. ORBIT has a static illustration linking to its separate Three.js demo; no WebGL engine is imported into the portfolio. The other four projects retain their recorded scenarios.

