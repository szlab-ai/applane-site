# AppLane

Official bilingual product site for **AppLane**, a macOS application-routing utility.

- [English](https://szlab-ai.github.io/applane-site/en/)
- [简体中文](https://szlab-ai.github.io/applane-site/zh/)
- [Privacy Policy](https://szlab-ai.github.io/applane-site/en/privacy/)
- [Support](https://szlab-ai.github.io/applane-site/en/support/)

## Development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run verify
```

The Astro site builds to `dist/` and is configured for the `/applane-site/` GitHub Pages base path. English and Simplified Chinese routes are generated under `/en/` and `/zh/`; the root route selects Chinese for a Chinese browser locale and otherwise uses English.

## Deployment

Pushes to `main` trigger the GitHub Pages workflow. Product screenshots are intentionally deferred until verified AppLane captures are supplied. The first release contains no analytics, cookies, advertising, or third-party runtime scripts.

Contact: **szlab.ai@outlook.com**
