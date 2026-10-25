# RehabAI — Rehabilitation Support & Resource Finder

> **A starting point for finding support—not a diagnosis or a substitute for care.**

RehabAI is a self-guided support and resource-discovery prototype. It brings together an educational section, a brief needs assessment, personal progress goals, and links to official U.S. treatment and health-center directories.

The original interface included sample provider cards with placeholder addresses, phone numbers, ratings, prices, and claims of vetting. Those examples were not verified and are not presented as real services. The resource finder now uses a small, source-linked catalog of official directories and helplines instead.

## Project areas

- **Assessment:** a self-guided questionnaire; responses stay in the browser and are not sent to the resource API.
- **Resources:** filter official national directories and referral services by support area.
- **Progress:** locally managed goals for personal reflection.
- **Education & support:** informational content and pathways to seek help.
- **Crisis support:** direct links to U.S. crisis and treatment-referral services.

## Data and safety

The API is read-only and serves the JSON catalogs in `data/`. It does not store assessment answers, health details, accounts, or location. Resource availability, eligibility, and costs can change; contact the provider or directory to confirm details.

This project is **not clinical care, medical advice, or an emergency service**. If you or someone else is in immediate danger in the United States, call 911. For suicidal crisis or emotional distress, call or text 988. Outside the United States, use the appropriate local emergency and crisis services.

## Run locally

Requires Node.js 20 or newer. Install the existing frontend dependencies once:

```bash
npm ci
```

Start the API in one terminal:

```bash
npm run dev:backend
```

Start Vite in another terminal:

```bash
npm run dev
```

Open the Vite URL printed in the terminal. The Vite development server proxies `/api` requests to the local API on port 4174.

## API

- `GET /api/health`
- `GET /api/resources`
- `GET /api/crisis-resources`

The backend binds to `127.0.0.1` and only permits the local Vite development origins by default. Configure an appropriate backend and origin policy before any production deployment; the included server is intended for local development.

## Verify

```bash
npm run build
npm run lint
npm run test:backend
```
