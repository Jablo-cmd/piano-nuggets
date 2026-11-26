# Piano Nuggets — Technical Plan

## 1. Status

This is a proposed implementation direction, not a final technology approval. The repository is currently documentation-first. Inspect the repository and confirm the actual setup before adding application code.

## 2. Proposed stack

- **Framework:** Next.js (App Router).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **UI primitives:** a custom Piano Nuggets design system (shadcn/ui was proposed but not needed).
- **Icons:** Lucide.
- **Validation:** Zod (client-side only for now).
- **Fonts:** Outfit (headings), Fraunces italic (accent words), DM Sans (body), via `next/font`.
- **Motion:** CSS only (a small IntersectionObserver reveal and hover transitions); no looping animations; reduced-motion honoured. Framer Motion was proposed but is not used.
- **Data and form storage:** none. Supabase is not used and is not approved.
- **Hosting:** Vercel.
- **Version control:** GitHub repository `Jablo-cmd/piano-nuggets`.

Do not add dependencies simply because they are listed here. Choose a lean implementation and document any material deviations.

### As built (26 Nov 2026)

Phase one is live on Vercel (project `piano-nuggets`, production branch `main`). Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS 3, Lucide, Zod. There is no backend, database, analytics or email service. The enrolment form is a validated interface only: `src/lib/submitEnquiry.ts` is deliberately not connected, nothing is transmitted, and `NEXT_PUBLIC_ENQUIRIES_ENABLED` stays off. Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`) are set in `next.config.mjs`; a Content-Security-Policy has not been added. Public contact details come from `NEXT_PUBLIC_*` variables set in Vercel (see `.env.example`).

## 3. Hosting and domains

Production hostname (confirmed and connected to the Vercel project):

`piano-nuggets.aurisnexus.co.za`

- DNS is a CNAME to the target Vercel provides, managed at the registrar/DNS host of `aurisnexus.co.za` (external nameservers).
- `pianonuggets.aurisnexus.co.za` (no hyphen) is added as a **308 redirect** to the production hostname. It only resolves once its own DNS CNAME is created.
- `piano-nuggets.vercel.app` remains available as a Vercel-assigned address.
- The canonical URL, sitemap and robots.txt are driven by `NEXT_PUBLIC_SITE_URL`, set in Vercel (Production) to `https://piano-nuggets.aurisnexus.co.za`. It is a build-time value: changing it requires a redeploy.

A standalone `pianonuggets.co.za` domain may be considered later, subject to availability, registration and DNS configuration.

## 4. Initial architecture

The first release should be a lightweight public website with:
- Public pages and reusable content sections.
- Reusable pricing and lesson-format components.
- A validated enrolment enquiry form.
- A secure server-side submission path.
- Optional Supabase persistence if approved.
- A notification mechanism using a confirmed recipient.
- Centralised configuration for contact details, WhatsApp number, studio location and other launch-specific values.

Avoid building student authentication, complex roles, dashboards or scheduling infrastructure in the first phase.

## 5. Data handling

Enrolment enquiries contain personal information, including information about minors. Treat this as sensitive operational data.

Requirements:
- Never expose service-role keys or secrets to the browser.
- Validate submissions on the server.
- Apply spam/rate-limit protections.
- Restrict access to enquiry records.
- Use least-privilege database policies.
- Avoid collecting unnecessary information.
- Do not log full form payloads or sensitive personal details in production logs.
- Provide a clear privacy notice and retention process before launch.

If Supabase is selected, document the schema, Row Level Security policies, migrations and backup approach before storing real enquiries. Public visitors must not be able to read enquiry records.

### Supabase assessment

Supabase has **not** been approved. Enquiries in phase one are low-volume and need only secure delivery to a confirmed recipient, so a server-side route that validates the submission and sends a notification (for example by email) may be sufficient and avoids storing personal data of minors in a new database. Supabase becomes worthwhile only if the owner needs a durable, queryable record of enquiries (or phase two admin tooling). Decide this with the owner before implementation; if chosen, follow the safeguards above. Status: **TBC**.

## 6. SEO and discoverability

See also [Content and SEO](CONTENT_AND_SEO.md).

- Unique page titles and meta descriptions.
- Canonical URLs once the production domain is selected.
- Open Graph and social metadata.
- XML sitemap and robots configuration.
- Semantic headings and internal links.
- Descriptive image alt text.
- Local business/service structured data only when the business identity, address and relevant details are confirmed.
- Do not invent a street address, rating, review count, opening hours or service area.

## 7. Quality requirements

- Responsive across common screen sizes.
- Accessible keyboard operation and focus states.
- Proper form labels, validation and error summaries.
- Sufficient colour contrast.
- Optimised image formats and sizes.
- Good Core Web Vitals.
- No broken links or dead calls to action.
- No secrets committed to Git.
- Build, lint and type checks should pass before deployment.

## 8. Environment configuration

Use environment variables for secrets and deployment-specific values. Maintain an `.env.example` with variable names and safe example placeholders only. Never commit real API keys, service-role keys, email credentials or tokens.

Exact variable names should be chosen during implementation and documented.

## 9. Deployment approach

1. Inspect repository and branch state.
2. Confirm implementation choices and environment requirements.
3. Build the public website and enquiry flow.
4. Test form validation, delivery, privacy and responsive behaviour.
5. Deploy to a preview environment.
6. Verify domain and production environment configuration.
7. Obtain owner approval of public copy, prices, contact details and form behaviour.
8. Deploy production only after all launch-critical decisions are resolved.
