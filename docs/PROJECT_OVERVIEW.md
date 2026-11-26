# Piano Nuggets — Project Overview

## 1. What Piano Nuggets is

**Piano Nuggets** is a piano and keyboard education brand supported by **Fresh Wind Music**. Its tagline is:

> **Every Note Counts. Every Musician Matters.**

Piano Nuggets is a separate music-education brand. It may state that it is supported by Fresh Wind Music, but it must keep its own identity and must not look like a recording-studio website.

## 2. Purpose of this repository

This repository holds the documentation foundation, and later the source code, for the Piano Nuggets public website. At present it is **documentation-first**: no website implementation has been started or approved.

## 3. Confirmed facts

| Area | Confirmed position |
|---|---|
| Launch offering | Piano and keyboard lessons only |
| Learning areas | Practical Piano & Keyboard, Music Theory, Harmony, Piano Technique |
| Audience | Children, teenagers and adults; beginners and those with prior experience |
| Lesson length | 60 minutes |
| Delivery | Individual or group; Fresh Wind Music studio, learner's home (extra location-dependent charges), or online (Zoom preferred) |
| Pricing | See [Programme and Pricing](PROGRAMME_AND_PRICING.md) (the only pricing source of truth) |
| Enrolment | Website collects **enquiries**, not automatic bookings; the team contacts the enquirer |
| Phase one | Public marketing and enrolment-enquiry website |
| Production hostname | `piano-nuggets.aurisnexus.co.za` (redirect from `pianonuggets.aurisnexus.co.za`) |

## 4. Proposals and unresolved items

- The technology stack as built is Next.js, TypeScript, Tailwind CSS, Lucide, Zod and Vercel (shadcn/ui and Framer Motion were proposed but not used). See [Technical Plan](TECHNICAL_PLAN.md).
- Supabase is **optional and not approved**; the Technical Plan assesses whether it is needed.
- `pianonuggets.co.za` is a **potential future domain**; registration has not been confirmed.
- Contact details, studio address, instructor details and policies are **TBC**. See [Roadmap and Open Decisions](ROADMAP_AND_OPEN_DECISIONS.md).

## 5. Out of scope in phase one

Student portal, admin dashboard, attendance system, automated scheduling and payment processing. Music production, studio sound engineering and composition are possible future subjects only and must not be advertised as available.

## 6. Document map

| Document | Purpose |
|---|---|
| [README](../README.md) | Project entry point |
| [Brand Guidelines](BRAND_GUIDELINES.md) | Identity, colours, imagery, voice |
| [Product Requirements](PRODUCT_REQUIREMENTS.md) | Site scope, pages, acceptance criteria |
| [Programme and Pricing](PROGRAMME_AND_PRICING.md) | Curriculum areas and approved fees |
| [Operations and Enrolment](OPERATIONS_AND_ENROLMENT.md) | Delivery, enquiry flow, privacy |
| [Technical Plan](TECHNICAL_PLAN.md) | Proposed architecture and hosting |
| [Content and SEO](CONTENT_AND_SEO.md) | Positioning, search intent, content strategy |
| [Roadmap and Open Decisions](ROADMAP_AND_OPEN_DECISIONS.md) | Phases, TBC items, change control |

## 7. Governing rules

1. Documentation is the source of truth; update it before changing dependent work.
2. Never invent contact details, qualifications, addresses, policies or testimonials; use `TBC`.
3. Never commit secrets or private student information. The repository is public.
4. Display prices with their correct billing units at all times.
