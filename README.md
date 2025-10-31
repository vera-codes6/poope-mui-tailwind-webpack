<div align="center">

# Poope React Frontend

Material UI 6 + Tailwind CSS 4 + React 18 + TypeScript + Webpack 5

</div>

## Overview

This is the Poope Coin single-page application built with React and TypeScript. It combines Material UI v6 components and Tailwind CSS v4 utility classes, bundled with Webpack 5. The app supports client-side routing, lazy loading, internationalization, and a themed, responsive UI.

## Tech stack

- React 18, React DOM
- TypeScript 5
- React Router v7 (createBrowserRouter)
- Material UI v6 (MUI Core, X components), Emotion
- Tailwind CSS v4 (PostCSS pipeline)
- Webpack 5, Webpack Dev Server
- ESLint 9 + typescript-eslint, Prettier 3
- i18next + browser language detector
- Keen Slider

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (comes with Node)

## Getting started

Install dependencies:

```powershell
npm install
```

Run the development server (http://localhost:3000):

```powershell
npm run dev
```

Build for production to the `build/` folder:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run start
```

## Available scripts

- `npm run dev` – start Webpack Dev Server with HMR on port 3000
- `npm run build` – production build with code-splitting to `build/`
- `npm run start` – serve the `build/` folder locally
- `npm run lint` – run ESLint with auto-fix
- `npm run format` – run Prettier on `src/**/*.{ts,tsx}`

## Project structure

```
src/
	index.tsx           # App bootstrap, global CSS, providers
	App.tsx             # Root app: theme, dialogs, router
	routes/             # React Router v7 routes config
	layout/             # Layouts (Landing, Main) and layout components
	pages/              # Route-level pages (Landing, Dashboard, Errors, ...)
	views/              # Page sections and feature components
	components/         # Reusable UI components
	theme/              # MUI theme, primitives, and component customizations
	locales/            # i18n setup (i18next)
	hooks/              # Custom React hooks
	utils/              # Utilities
	constants/          # Constants (routes, chart data, etc.)
assets/
public/               # Static assets copied to build root
build/                # Production build output (generated)
```

Path alias: imports starting with `@/` resolve to `src/` (configured in `tsconfig.json` and Webpack `resolve.alias`).

## Styling and theming

- Tailwind CSS v4 is enabled via PostCSS (`postcss.config.js`) and imported in `src/index.css`.
- Material UI v6 theme is configured in `src/theme/AppTheme.tsx` using primitives from `themePrimitives.ts` and component `customizations/`.
- `StyledEngineProvider injectFirst` ensures Tailwind utilities and custom CSS play nicely with MUI styles.

## Routing

Client-side routing uses React Router v7 with `createBrowserRouter`. The dev server is configured with `historyApiFallback: true` and production includes a SPA fallback via `public/staticwebapp.config.json`.

## Internationalization (i18n)

i18next is initialized in `src/locales/i18n.ts` with language detection. To add languages:

1. Add translation JSON files (e.g., `src/locales/langs/en.json`).
2. Import and register them in `i18n.ts` resources.
3. Use the `useTranslation()` hook in components.

## Environment variables

This project uses `dotenv-webpack`. Create a `.env` file at the project root for runtime build-time variables:

```
# .env
VITE_API_BASE_URL=https://api.example.com
SOME_FLAG=true
```

Notes:
- Variables are inlined at build time. Do not commit secrets.
- Access via `process.env.VAR_NAME` in code.

## Webpack configuration

- Entry: `src/index.tsx`
- Output: `build/` with code-split chunks (`[name].chunk.js`)
- Loaders: `ts-loader`, CSS/SCSS + PostCSS, assets, SVG via `@svgr/webpack`
- Dev server: port 3000, HMR, SPA fallback
- Alias: `@` -> `src`

An alternative production config exists (`webpack-build.config.js`) using `MiniCssExtractPlugin` and `HtmlWebpackPlugin`. The default `build` script uses the standard config. You can opt into the alternative config with a custom command if desired.

## Deployment (Azure Static Web Apps)

This repo includes `public/staticwebapp.config.json` to ensure SPA fallback to `index.html` in production. For Azure Static Web Apps:

- App location: `/`
- Output location: `build`
- Build command: `npm run build`

On other static hosts, serve the `build/` folder and ensure a catch-all rewrite to `index.html` for client-side routing.

## Troubleshooting

- Port 3000 already in use: change `devServer.port` in `webpack.config.js`.
- Blank page on refresh in production: ensure SPA fallback is configured (see `staticwebapp.config.json`) or your host’s rewrite rules.
- Asset paths behind a subpath: if deploying under a subpath, review `output.publicPath` and your host’s base path.

## License

No license specified. Add one if needed.

