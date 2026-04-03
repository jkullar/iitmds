# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Transcript Viewer App (`artifacts/transcript-viewer`)

A React + Vite single-page app for browsing and searching 110 lecture/tutorial video transcripts from a Linear Algebra & Multivariable Calculus course.

### Architecture
- **No backend** — purely frontend, all data bundled as a static JSON file
- **Data source**: `artifacts/transcript-viewer/src/data/transcripts.json` (4.77 MB)
- **Transcript source files**: `transcripts/week1/` through `transcripts/week11/`, `transcripts/refresher/`, `transcripts/special/`
- **Extraction script**: `scripts/src/extract-transcripts.ts` (fetches from YouTube InnerTube API)

### Features
- Sidebar with all 13 weeks, collapsible per-week video lists
- Full-text search across all 109 available transcripts (debounced, highlights matches)
- Clickable timestamps that open YouTube at the exact moment
- Copy full transcript button
- Dark mode toggle
- Responsive (mobile-friendly sidebar drawer)

### Data Shape
```ts
{ weeks: [{ key, label, topic, videos: [{ id, code, title, youtubeUrl, available, segments: [{time, timestamp, text}] }] }], totalVideos, availableVideos }
```

### Status
- 109/110 transcripts available (W5_T6 has transcripts disabled on YouTube)
