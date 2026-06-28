# Art in Layers

One-page product launch site for the Art in Layers museum gift concept.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev -- --port 3000
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy on GitHub Pages

This repository includes a GitHub Actions workflow that deploys `dist` to GitHub Pages on push to `main`.

1. Push to `main`.
2. In GitHub repository settings, open Pages.
3. Set Source to `GitHub Actions`.
4. Wait for the `Deploy to GitHub Pages` workflow to complete.

Site URL:

`https://jaceylynn.github.io/Art-in-Layers/`

Deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`.
