# AppLane Product Site Design

Date: 2026-09-13

## Goal

Build and publicly publish the official AppLane product site. The site should give prospective macOS users an accurate, polished overview of AppLane, provide the privacy policy and support contact required for distribution, and establish a repeatable GitHub Pages release workflow.

The project will live at `/Volumes/MacStorage/Code/applane-site` in its own Git repository. The intended public repository is `szlab-ai/applane-site`, with the default GitHub Pages URL `https://szlab-ai.github.io/applane-site/`.

## Audience and primary task

The audience is macOS users who want application-specific proxy routing without enabling a global proxy or TUN mode. The first viewport must answer three questions quickly: what AppLane controls, which Mac it supports, and whether it is available to download.

The primary action before App Store release is learning about the product. The download area will show an honest development status rather than an inactive or invented store link. Once an App Store URL exists, the same component can switch to the official badge and link.

## Scope

The first release contains these routes in English and Simplified Chinese:

- `/en/` and `/zh/`: product home pages;
- `/en/privacy/` and `/zh/privacy/`: public privacy policy;
- `/en/support/` and `/zh/support/`: support and troubleshooting contact;
- `/`: language-aware redirect with English fallback;
- a localized 404 page.

The site includes responsive navigation, language switching, SEO metadata, Open Graph metadata, sitemap generation, favicon and Apple touch icon assets. It does not include accounts, forms, downloads, payments, cookies, advertising, telemetry, or analytics in the first release.

## Product claims

Visible copy must match the current AppLane implementation and verification record:

- application-specific routing with ordered rules;
- SOCKS5, SOCKS4/4A and HTTP CONNECT endpoints;
- proxy chains, connection records and explicit block/system actions;
- local configuration and Keychain credential storage;
- a default empty configuration that does not intercept traffic;
- current DNS, UDP and continuous-disconnection-protection limits stated plainly where relevant.

The site must not claim that AppLane is already on the App Store, that every macOS application is supported, that DNS is fully proxied, that all UDP traffic is supported, or that the known TCP half-close limitation is solved. Screenshots must come from verified AppLane builds and must not show fabricated product state.

## Information architecture

The home page uses a compact narrative structure:

1. A restrained header with AppLane identity, Privacy, Support and language controls.
2. A first viewport with the icon, a direct description, macOS availability, development status and one real product window.
3. A routing explanation that shows applications flowing through rules to direct, blocked, endpoint or chain outcomes.
4. Three focused capability groups: choose applications, express routing policy, inspect outcomes.
5. A privacy section explaining on-device configuration, Keychain credentials and no developer-operated data collection.
6. A compatibility note that links to Support for current protocol and system boundaries.
7. A concise footer with privacy, support, open-source attribution and copyright.

The privacy page adapts the approved AppLane privacy-policy draft. It identifies `szlab.ai@outlook.com` as the monitored contact, distinguishes local app data from traffic handled by user-selected proxies, and explains retention and deletion. The support page provides setup guidance, the information users should include when requesting help, and the same email contact. It does not ask users to send proxy passwords or exported configurations without reviewing them.

## Visual direction

The visual thesis is “traffic lanes on macOS”: a dark graphite canvas with cool blue/cyan route accents, large quiet typography, crisp window imagery and translucent navigation surfaces. Glass treatment uses `backdrop-filter` where supported and a high-contrast opaque fallback. The presentation should feel native to current macOS without copying application chrome into every section.

The AppLane icon from the product repository is the primary brand asset. One or two verified product screenshots provide visual proof. Simple routing lines and nodes may be rendered with semantic HTML/CSS or SVG because they explain product behavior; they are not decorative illustrations.

Motion is limited to subtle reveal and route emphasis, respects `prefers-reduced-motion`, and never blocks reading. Body text remains at least 16px, keyboard focus is visible, navigation landmarks and headings are semantic, and the layout remains usable at 200% text size.

## Architecture

Reuse the reference site's Astro 7, Tailwind CSS 4 and static GitHub Pages architecture. The new project keeps its own content, styles and assets rather than importing Porthole brand code wholesale.

- `src/i18n`: typed English and Chinese copy plus locale URL helpers;
- `src/layouts`: shared metadata, accessibility and global shell;
- `src/components`: header, hero, routing explanation, capabilities, privacy callout and footer;
- `src/pages`: localized home, privacy, support, root redirect and 404;
- `public`: AppLane brand assets and verified screenshots;
- `.github/workflows/deploy.yml`: build and GitHub Pages deployment on `main`;
- `astro.config.mjs`: `https://szlab-ai.github.io/applane-site/` base URL and localized sitemap.

The build is fully static. There is no runtime backend or data store. All external links are explicit, and there are no third-party scripts in the first release.

## Error and fallback behavior

- If JavaScript is unavailable, all content and navigation remain usable; the root route falls back to English with a normal link.
- Missing `backdrop-filter` support uses solid surfaces with equivalent contrast.
- Missing WebP support falls back to JPEG or PNG through `<picture>`.
- The development-status call to action remains text until a verified App Store URL is configured.
- Unknown routes render the localized 404 with a home link.

## Verification

Before publication:

- install from the committed lockfile and complete a clean production build;
- verify all localized routes, internal links, canonical URLs and hreflang pairs;
- verify images and icons load under the `/applane-site/` base path;
- inspect desktop and mobile renderings in both languages, plus keyboard focus and reduced-motion behavior;
- confirm no analytics or unapproved third-party requests appear in the generated HTML;
- check privacy and support copy against the current AppLane source and release documents;
- run a link and asset scan over `dist`;
- commit the exact published source, push `main`, enable GitHub Pages through Actions, and wait for the deployment to succeed before handing off the URL.

## Future changes

After an App Store listing exists, replace the development status with the official store badge and verified listing URL. A custom domain, additional languages, analytics or downloadable builds are separate changes because each affects publishing or privacy behavior.
