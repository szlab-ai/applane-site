# AppLane Site Framework Verification

Date: 2026-09-13

## Scope

This checkpoint covers the static site framework, bilingual copy, privacy and support routes, AppLane brand assets, responsive styling, accessibility foundations, SEO metadata, sitemap generation, and GitHub Pages workflow. Verified product screenshots are deliberately deferred to the next user-authorized step.

## Results

- Astro production build generated 8 HTML pages: root, 404, English and Chinese home, privacy, and support pages.
- `npm run verify` passed after checking required routes, `/applane-site/` base paths, local asset existence, bilingual privacy contacts, and external-script boundaries.
- The output contains the AppLane 1024 px icon, 180 px touch icon, 32 px PNG, and multi-size favicon derived from the approved app icon master.
- Source and public assets contain no Porthole, Telegram, Cloudflare analytics token, or inherited external analytics component.
- The published framework contains no external runtime script, account, form, cookie, advertising, analytics, telemetry, or downloadable application link.
- The root route uses browser language for Chinese and otherwise falls back to English; visible no-script links remain available.
- Navigation uses semantic landmarks, the page provides a skip link, keyboard focus is visible, body copy is at least 16 px, glass has an opaque fallback, and reduced-motion preferences disable smooth scrolling and transitions.
- Product claims were checked against the AppLane implementation status: default empty configuration, supported proxy protocols and chains, current UDP/DNS boundaries, no continuous disconnection protection, and unresolved Network Extension TCP half-close compatibility are stated accurately.

## Dependency security

The retained reference lockfile initially resolved Astro 7.0.6 and reported 7 known vulnerabilities: 1 critical and 6 high. `npm audit fix` upgraded the compatible dependency tree to Astro 7.3.2 and patched transitive packages. A fresh `npm audit --audit-level=moderate` reported `found 0 vulnerabilities`. The site then passed the complete production build and verifier again.

## Deferred work

- Replace the explicit screenshot placeholder with verified AppLane captures after the user resumes that task.
- Visually review those captures at desktop and mobile sizes after integration.
- Create and authenticate the public GitHub repository, push `main`, enable GitHub Pages through Actions, and wait for the deployment to succeed.
- Replace the development status only after a real App Store listing URL exists.
