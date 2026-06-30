# 同道 Bible — Next.js Preview

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
http://localhost:3000/reader
```

## ESV token

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Then put the regenerated ESV token there. Never commit the real token.

## GitHub Pages

This project is configured for the `ov8/tongdao` GitHub Pages path using `basePath: /tongdao` in production.
