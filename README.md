# Agora Commerce Platform

Premium gourmet butcher shop e-commerce platform built with Next.js, NestJS, and PostgreSQL.

## Quick Start

```bash
# Development - Web
npm run dev:web

# Development - API
npm run dev:api

# Build - Web
npm run build:web

# Build - API
npm run build:api
```

## Architecture

- **apps/web**: Next.js 16 storefront with TypeScript
- **apps/api**: NestJS REST API backend
- **packages/shared**: Shared types and utilities

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui
- Backend: NestJS, PostgreSQL, Prisma
- Deployment: Vercel (frontend), TBD (backend)

## Environment Setup

For macOS development environments with TLS issues:
```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 npm install
```

## Project Status

Phase 2: MVP Infrastructure - Initial scaffolding and deployment
