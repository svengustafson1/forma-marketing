# Forma Marketing

Single-page marketing splash site for Forma: adaptive business software that builds itself around each company.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verification

```bash
npm run lint
npm run build
```

## Waitlist

The page posts email-only waitlist requests to `src/app/api/waitlist/route.ts`, backed by Prisma `WaitlistEntry`.

Required env for live waitlist storage:

```bash
DATABASE_URL=postgres://...
```

TODO before production launch: connect waitlist submissions to the final CRM/ops handoff flow once launch operations are finalized.
