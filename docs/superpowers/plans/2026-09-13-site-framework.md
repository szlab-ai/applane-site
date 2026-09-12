# AppLane Site Framework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready bilingual AppLane product-site framework without product screenshots, then prepare it for GitHub Pages publication.

**Architecture:** Use the Porthole Astro project as a sanitized structural template, replacing every product-specific component, route, style, asset and metadata item with AppLane content. Generate a fully static `/applane-site/` deployment with English and Simplified Chinese routes, shared typed copy, and no third-party runtime scripts.

**Tech Stack:** Astro 7, Tailwind CSS 4, TypeScript, GitHub Actions, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-09-13-applane-site-design.md`

## Global Constraints

- The repository root is `/Volumes/MacStorage/Code/applane-site` on branch `main`.
- The intended public URL is `https://szlab-ai.github.io/applane-site/`.
- Routes are `/en/`, `/zh/`, localized privacy and support pages, `/`, and `404`.
- The first release contains no accounts, forms, downloads, payments, cookies, advertising, telemetry, analytics, or third-party runtime scripts.
- The site must not claim App Store availability or resolution of the TCP half-close limitation.
- Product screenshots are excluded from this implementation and added only in a later user-authorized task.
- Contact email is `szlab.ai@outlook.com`.

---

### Task 1: Project scaffold and deployment foundation

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

**Interfaces:**
- Consumes: the approved site spec and the reference project's compatible dependency versions.
- Produces: `npm run build`, a static `dist/` tree, and GitHub Pages deployment from `main`.

- [ ] **Step 1: Copy the sanitized Astro project structure**

Run the Sites retained-template setup script with `/Users/sz/Code/porthole-site` as the template source and the repository root as the working directory. Preserve the existing `.git` directory and design documents.

- [ ] **Step 2: Replace project configuration**

Set the package name to `applane-site`; configure Astro with site `https://szlab-ai.github.io`, base `/applane-site/`, trailing slashes, locales `en` and `zh`, and a localized sitemap that excludes the root redirect and 404 page. Keep the existing Astro 7 and Tailwind 4 versions from the lockfile.

- [ ] **Step 3: Replace the deployment workflow and README**

Keep a two-job GitHub Pages workflow using `actions/checkout@v4`, `withastro/action@v3`, and `actions/deploy-pages@v4`. Remove the Cloudflare analytics environment variable. Document routes, local commands, privacy behavior and publication URL.

- [ ] **Step 4: Verify the scaffold**

Run `npm ci` and then `npm run build`. Expected: exit code 0, with static HTML under `dist/en/`, `dist/zh/`, privacy/support routes, sitemap, and 404 output.

- [ ] **Step 5: Commit**

Commit as `chore: scaffold AppLane product site`.

### Task 2: Shared bilingual product experience

**Files:**
- Create or replace: `src/i18n/ui.ts`
- Create or replace: `src/i18n/utils.ts`
- Create or replace: `src/layouts/BaseLayout.astro`
- Create or replace: `src/components/Header.astro`
- Create: `src/components/AppIcon.astro`
- Create: `src/components/Hero.astro`
- Create: `src/components/RouteMap.astro`
- Create: `src/components/Capabilities.astro`
- Create: `src/components/PrivacyCallout.astro`
- Create or replace: `src/components/Footer.astro`
- Create or replace: `src/styles/global.css`
- Create: `public/brand/applane.png`
- Create: `public/brand/apple-touch-icon.png`
- Create: `public/brand/icon-32.png`
- Create: `public/brand/favicon.ico`

**Interfaces:**
- Consumes: locale type `Lang = 'en' | 'zh'` and base-aware route helper from `src/i18n/utils.ts`.
- Produces: shared page shell and components accepting `{ lang: Lang }`.

- [ ] **Step 1: Add typed localized copy**

Define navigation, hero, routing, capability, privacy, status, support and footer strings for both languages in `ui.ts`. Export `Lang`, `ui`, and `getText(lang)` with no fallback to unrelated product copy.

- [ ] **Step 2: Add base-aware locale routing**

Implement helpers that return `/applane-site/{lang}/`, `/privacy/`, and `/support/` paths and compute the alternate language path from the current pathname.

- [ ] **Step 3: Add verified brand assets**

Derive favicon and touch-icon sizes from `/Users/sz/Code/Proxifier/design/AppIcon/AppLane-AppIcon-Master.png`. Preserve transparency and do not modify the source image.

- [ ] **Step 4: Implement the shared shell and sections**

Build semantic header, hero, CSS/SVG route explanation, capability groups, privacy callout and footer. The hero status must say “In development / 开发中” and must not link to an App Store listing. Add an explicit “Product screenshots coming next” frame without simulated app chrome.

- [ ] **Step 5: Apply the visual system**

Use graphite surfaces, blue/cyan route accents, system typography, accessible contrast, visible focus styles, responsive layouts, glass with opaque fallback, and reduced-motion handling. Keep body text at 16px or larger.

- [ ] **Step 6: Verify source boundaries**

Search `src` and `public` for `Porthole`, `Telegram`, `Cloudflare`, analytics tokens and external script tags. Expected: zero matches except none. Run `npm run build` and require exit code 0.

- [ ] **Step 7: Commit**

Commit as `feat: build bilingual AppLane landing experience`.

### Task 3: Home, privacy, support and fallback routes

**Files:**
- Create or replace: `src/pages/en/index.astro`
- Create or replace: `src/pages/zh/index.astro`
- Create or replace: `src/pages/en/privacy.astro`
- Create or replace: `src/pages/zh/privacy.astro`
- Create or replace: `src/pages/en/support.astro`
- Create or replace: `src/pages/zh/support.astro`
- Create or replace: `src/pages/index.astro`
- Create or replace: `src/pages/404.astro`
- Create: `src/components/Prose.astro`
- Create: `public/robots.txt`

**Interfaces:**
- Consumes: `BaseLayout`, all home-page sections and locale route helpers from Task 2.
- Produces: every public route defined by the spec.

- [ ] **Step 1: Assemble localized home pages**

Compose the shared hero, route map, capability groups and privacy callout with language-specific metadata. Add canonical and alternate-language links through `BaseLayout`.

- [ ] **Step 2: Publish the privacy policy**

Adapt the approved AppLane privacy draft into readable English and Chinese pages. Include local configuration, Keychain storage, in-memory connection records, user-selected proxy handling, exports, deletion, no developer collection and `szlab.ai@outlook.com`.

- [ ] **Step 3: Publish support content**

Provide setup guidance, current macOS/protocol boundaries, safe diagnostic information to include in email, and a warning never to send proxy passwords. Link the support email with a plain `mailto:` URL.

- [ ] **Step 4: Implement root and error behavior**

Use a language-aware root redirect with English fallback and visible links for no-script users. Add a localized 404 page with English and Chinese home links. Add a robots file that references the sitemap index at the GitHub Pages URL.

- [ ] **Step 5: Verify generated routes**

Run `npm run build`; require `dist/en/index.html`, `dist/zh/index.html`, both privacy and support outputs, `dist/404.html`, and `dist/sitemap-index.xml`. Scan local `href`, `src`, canonical and hreflang values for the `/applane-site/` base.

- [ ] **Step 6: Commit**

Commit as `feat: add AppLane privacy and support pages`.

### Task 4: Framework quality gate and publication preparation

**Files:**
- Create: `scripts/verify-site.mjs`
- Modify: `package.json`
- Create: `docs/verification/2026-09-13-site-framework.md`

**Interfaces:**
- Consumes: generated `dist/` from Tasks 1–3.
- Produces: `npm run verify`, a human-readable verification record, and a source revision ready to publish.

- [ ] **Step 1: Add deterministic output checks**

Implement `scripts/verify-site.mjs` using Node built-ins. Require all specified HTML files, verify that local absolute URLs begin with `/applane-site/`, ensure every referenced local asset exists under `dist`, reject external scripts and the forbidden terms `Porthole`, `Telegram`, `CLOUDFLARE_WEB_ANALYTICS_TOKEN`, and confirm both privacy pages contain the support email.

- [ ] **Step 2: Add the verification command**

Set `verify` to `npm run build && node scripts/verify-site.mjs` in `package.json`.

- [ ] **Step 3: Run the quality gate**

Run `npm run verify`. Expected: build succeeds and the verifier reports all bilingual routes and assets valid. Inspect the rendered framework at desktop and mobile widths without adding product screenshots.

- [ ] **Step 4: Record evidence and limitations**

Document tested routes, build result, accessibility checks, absence of analytics, and the deliberate screenshot deferral. Record that publishing requires repository creation and authenticated GitHub access.

- [ ] **Step 5: Commit**

Commit as `test: verify AppLane site framework`.

- [ ] **Step 6: Prepare publication**

Create `szlab-ai/applane-site` as a public repository, configure `origin`, push `main`, set Pages source to GitHub Actions, and wait for the workflow and Pages deployment to succeed. If GitHub authentication is unavailable, stop after the local commits and report that single external blocker without changing source.
