# Portfolio — Mohd Areeb Khan

A single-page developer portfolio styled like a code editor (tabs, line gutter,
status bar). Built with **Vite + React + TypeScript + Tailwind CSS**, deployed
free on **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Editing your details

Most details (name, role, company, location, GitHub) are set directly in
[`vite.config.ts`](vite.config.ts). Only **4 contact links** are env-driven so
they can stay out of the source:

```bash
EMAIL=""        # 👈 add your email here
LINKEDIN_URL="https://www.linkedin.com/in/your-handle/"
LEETCODE_URL="https://leetcode.com/u/your-handle/"
RESUME_URL="https://link-to-your-resume.pdf"
```

`vite.config.ts` loads these from `.env` (local) and injects them; read them via
[`src/config.ts`](src/config.ts):

```ts
import { config } from './config'
config.email // -> value of EMAIL (falls back to a placeholder if unset)
```

> ⚠️ **This is a static site.** Every value is compiled into the public
> JavaScript bundle and is visible to anyone. Only put **public** info here
> — never passwords, tokens, or API keys.

## Deploying (env vars stay out of the repo)

`.env` is **git-ignored** — it never gets pushed. It's only used for local dev.

For the live site, set your values as **GitHub Actions Variables** (the same idea
as Render's env vars, but applied at build time):

1. Repo → **Settings → Secrets and variables → Actions → Variables → New variable**
2. Add the 4 keys: `EMAIL`, `LINKEDIN_URL`, `LEETCODE_URL`, `RESUME_URL`
3. Push to `main`. The workflow
   ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) injects those
   variables into `npm run build`, Vite bakes them into `dist/`, and GitHub Pages
   publishes it.

Anything you don't set falls back to the defaults in
[`vite.config.ts`](vite.config.ts), so the site never ships broken.

> ⚠️ Because this is a static site, the final values are still visible in the
> published JavaScript. Actions Variables keep them out of your **source code**,
> not out of the browser. Never put real secrets here.

## Structure

```
src/
  App.tsx              # editor shell: tabs, gutter, status bar
  config.ts            # reads .env, single source of truth for your details
  components/
    Home.tsx           # hello.html  — intro + code card
    About.tsx          # about.css   — bio, experience, education, skills
    Projects.tsx       # projects.js — curated project cards
    icons.tsx          # social / brand icons
```
