# Kanthimathinathan P - Portfolio

A responsive React, TypeScript and Vite portfolio focused on cybersecurity, Python, AI, cloud computing, automation and software engineering.

## Technology stack

- React 19 and TypeScript
- Vite
- Tailwind CSS tooling and custom CSS design system
- Lucide React icons
- GitHub Pages via GitHub Actions

## Features

- Responsive, accessible single-page portfolio
- Local talking-avatar video with native controls
- Project filtering and expandable project details
- Reduced-motion support and keyboard focus states
- GitHub Pages-ready asset paths

## Projects

The site presents TrustGraph AI, CoHub Help Desk, Owners Hub, AI CCTV Footage Detection, AI Chatbot, a Lovable-inspired UI Generator and an E-commerce Website using only the verified project information supplied.

## Local development

```bash
npm install
npm run dev
```

Build for production with:

```bash
npm run build
```

## GitHub Pages deployment

Push the repository to `https://github.com/kandy-7/Portfolio`. The workflow in `.github/workflows/deploy.yml` builds the Vite app and deploys `dist` to GitHub Pages. The Vite base path is configured as `/Portfolio/`.

## Project structure

```text
src/
  components/
  data/
  assets/images/
  assets/videos/
  App.tsx
  main.tsx
  index.css
```

Contact and social placeholders are intentionally kept in `src/data/profile.ts` until verified details are available.# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
