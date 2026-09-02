# danielzn.com

Personal site for Daniel Nadeem, Electrical Engineer at Tesla.

This is a static Astro 7 site. Production hosting is **Cloudflare Pages** (Free). This repository is not the origin server.

Requires **Node.js 22.12+** (`astro@7` will refuse to build on Node 20).

## Build

```bash
npm install
npm run build
```

The static output is written to `dist/`. On Cloudflare Pages, set the build command to `npm run build` and the publish directory to `dist`.

## Local development

```bash
npm run dev
```

## Preview a production build

```bash
npm run preview
```
