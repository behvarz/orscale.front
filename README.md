# OrScale Website

This repository now contains two runtimes:

- **Frontend** – the existing Next.js app inside the repository root (UI, pages, animations, translations).
- **Backend** – a lightweight Express server under `backend/` that proxies chatbot traffic to OpenAI so the API key never reaches the browser.

The visual design and user experience stay the same. The chat widget now calls the backend over HTTP, and only the backend reads `OPENAI_API_KEY`.

## Prerequisites

- Node.js 18+ and npm (for both projects)

## Environment variables

### Frontend (`.env.local`)

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```
Set this to the public URL of the backend in every environment.

### Backend (`backend/.env`)

Copy `backend/.env.example` to `backend/.env` and fill in:

```
PORT=4000
OPENAI_API_KEY=sk-your-openai-key
OPENAI_MODEL=gpt-4o-mini
CORS_ORIGINS=http://localhost:3000,https://orscale.com
```
`CORS_ORIGINS` accepts a comma-separated list. Keep `OPENAI_API_KEY` here only.

## Installation

```bash
# from repository root
npm install             # frontend deps
cd backend && npm install  # backend deps
```

## Development workflow

Run the backend first, then the frontend:

```bash
# terminal 1
cd backend
npm run dev

# terminal 2 (repo root)
npm run dev
```

- Frontend dev server: http://localhost:3000
- Backend API: http://localhost:4000 (health check at `/health`, chat endpoint at `/chat`)

## Deployment

1. Deploy `backend/` to your preferred Node host (Render, Fly.io, Azure, etc.). Expose HTTPS and set `OPENAI_API_KEY` plus allowed origins.
2. Set `NEXT_PUBLIC_API_BASE_URL` in the frontend environment to the backend URL and deploy the Next.js app (Vercel, Netlify, etc.).

## Security notes

- The OpenAI key only exists in `backend/.env`; never store it in the frontend.
- The backend validates payloads with Zod, applies CORS, Helmet, and hides implementation errors from the client.

## Available scripts

### Frontend

- `npm run dev` – Next.js dev server
- `npm run build` – production build
- `npm run start` – serve the production build
- `npm run lint` – lint frontend sources

### Backend

- `npm run dev` – start Express with Nodemon
- `npm run start` – start Express without file watching