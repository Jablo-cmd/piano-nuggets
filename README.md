# Piano Nuggets

**Every Note Counts. Every Musician Matters.**

Piano Nuggets is a welcoming, professional piano and keyboard education brand supported by Fresh Wind Music. The first release is focused exclusively on piano and keyboard lessons for learners of all ages and experience levels.

## Project status

Documentation-first planning. No application implementation has been specified or approved yet.

## Initial release

The first release is a public-facing website that explains the programme, presents lesson formats and pricing, answers common questions, and allows prospective students or parents/guardians to submit an enrolment enquiry. WhatsApp should be available as an alternative enquiry route once the official number is supplied.

This is not initially a student portal or learning-management system.

## Brand

- **Name:** Piano Nuggets
- **Tagline:** Every Note Counts. Every Musician Matters.
- **Personality:** Happy, welcoming, energetic, inclusive and professional.
- **Audience:** Children, teenagers and adults; beginners through aspiring musicians.
- **Visual direction:** Black and white with golden-oak touches, drawn from the studio photograph: espresso black, warm cream and honey yellow, with an occasional soft rose (see Brand guidelines).
- **Relationship:** A distinct education brand supported by Fresh Wind Music. Do not make Piano Nuggets look like a sub-page of the Fresh Wind recording-studio brand.

## Documentation

- [Project overview](docs/PROJECT_OVERVIEW.md)
- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Brand and design guidelines](docs/BRAND_GUIDELINES.md)
- [Programme, curriculum and pricing](docs/PROGRAMME_AND_PRICING.md)
- [Operations and enrolment](docs/OPERATIONS_AND_ENROLMENT.md)
- [Technical plan](docs/TECHNICAL_PLAN.md)
- [Content and SEO](docs/CONTENT_AND_SEO.md)
- [Roadmap and open decisions](docs/ROADMAP_AND_OPEN_DECISIONS.md)

## Planned hosting

- Production hostname: `piano-nuggets.aurisnexus.co.za` (attached to the Vercel project; DNS is a CNAME managed outside Vercel)
- Redirect hostname: `pianonuggets.aurisnexus.co.za` (308 redirect to the production hostname; needs its own DNS CNAME to resolve)
- Fallback address: `piano-nuggets.vercel.app`
- Potential future domain: `pianonuggets.co.za` (availability and registration to be confirmed)

## Important implementation rule

Treat the documentation as the current source of truth. Where a detail is marked **TBC**, **not yet confirmed**, or **future consideration**, do not invent a value or publish placeholder information as fact. Resolve launch-critical decisions before deployment.

## Development

Phase one public website: Next.js (App Router), TypeScript, Tailwind CSS, Lucide, Zod. No backend, database or analytics is connected.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

Unconfirmed business details (WhatsApp number, email, studio location, Fresh Wind Music URL) are configured through `NEXT_PUBLIC_*` variables; see `.env.example` and `src/config/site.ts`. Prices live only in `src/config/pricing.ts`. The enrolment form is a validated UI preview: `src/lib/submitEnquiry.ts` is deliberately not connected, so no enquiry data is sent, stored or logged.
