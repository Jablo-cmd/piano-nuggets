# Piano Nuggets — Technical Plan

## 1. Status

This is a proposed implementation direction, not a final technology approval. The repository is currently documentation-first. Inspect the repository and confirm the actual setup before adding application code.

## 2. Proposed stack

- **Framework:** Next.js (App Router).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **UI primitives:** shadcn/ui where useful, with a distinct Piano Nuggets design system.
- **Icons:** Lucide.
- **Motion:** Framer Motion only for subtle, purposeful interactions; honour reduced-motion preferences.
- **Data and form storage:** Supabase may be used for secure enquiry storage if approved and configured.
- **Hosting:** Vercel.
- **Version control:** GitHub repository `Jablo-cmd/piano-nuggets`.

Do not add dependencies simply because they are listed here. Choose a lean implementation and document any material deviations.

## 3. Hosting and domains

Initial intended hostname:

`pianonuggets.aurisnexus.co.za`

A standalone `pianonuggets.co.za` domain may be considered later, subject to availability, registration and DNS configuration.

Do not assume that either domain is already connected to Vercel. Domain, DNS, environment and deployment configuration must be verified before launch.

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

## 6. SEO and discoverability

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
