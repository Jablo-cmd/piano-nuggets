# Piano Nuggets — Content and SEO

Status: planning guidance. Nothing here is a ranking promise. Facts, prices and policies must come from the other documents; anything unknown is `TBC`.

## 1. Brand positioning

Piano Nuggets is a welcoming, professional piano and keyboard programme for learners of all ages, supported by Fresh Wind Music. Positioning themes (see [Brand Guidelines](BRAND_GUIDELINES.md)):

- Every learner has a place to start.
- Practical playing alongside the theory, harmony and technique behind it.
- Enjoyable music learning at any age.

Avoid superlatives ("best", "number one"), guaranteed outcomes, unsupported qualification or exam claims, and invented testimonials or statistics.

## 2. Target audiences

| Audience | Needs | Content emphasis |
|---|---|---|
| Parents/guardians of children and teenagers | Trust, clarity on format, price and process | How It Works, pricing units, minors/privacy notes |
| Adult beginners and returners | Reassurance that it is never too late; flexible formats | Adult-friendly copy and imagery, online option |
| Learners with some experience | Structured progress in theory, harmony, technique | Learning-areas page |
| Church and gospel-music learners | Practical playing skills for worship settings | Future content (section 9) |

## 3. Search intent (South Africa)

Likely intents, to be validated with keyword research before finalising copy (use the SEO tools available at implementation time; do not treat these as measured volumes):

- **Commercial/local:** piano lessons, keyboard lessons, piano lessons for adults/kids/beginners, piano teacher near me, home piano lessons, online piano lessons South Africa.
- **Informational:** how to start learning piano, beginner keyboard lessons, music theory for beginners, what is harmony, piano technique basics.
- **Transactional:** piano lesson prices, enrol for piano lessons.

Use natural language in headings and body copy. No keyword stuffing.

## 4. Page titles and meta descriptions

Guidance: titles roughly 50–60 characters, descriptions roughly 140–160, unique per page, accurate to the page. Drafts (subject to owner approval and keyword validation):

| Page | Title | Meta description draft |
|---|---|---|
| Home | Piano Nuggets — Piano & Keyboard Lessons | Friendly piano and keyboard lessons for children, teenagers and adults. Studio, home and online options. Supported by Fresh Wind Music. |
| Piano Lessons | Piano & Keyboard Lessons for All Ages \| Piano Nuggets | Learn practical piano, music theory, harmony and technique in individual or group lessons. |
| Pricing | Piano Lesson Prices \| Piano Nuggets | See clear lesson fees, what each price covers and how it is billed. Prices in rand. |
| How It Works | How Piano Lessons Work \| Piano Nuggets | Studio, home or online lessons, and how enrolment works from enquiry to first lesson. |
| About | About Us | Our approach to welcoming, practical piano learning, supported by Fresh Wind Music. |
| Contact | Contact Us | Get in touch about piano and keyboard lessons. |
| Enrol Now | Enrol for Piano Lessons \| Piano Nuggets | Send an enrolment enquiry; our team will contact you to arrange lessons. |

Do not state "book now" or imply instant booking; the site collects enquiries.

## 5. Local SEO considerations

- The studio address is **4 Lang Street, Rosettenville** (confirmed by the owner). Postcode and opening hours are still TBC; do not invent them.
- Describe delivery honestly: studio (location TBC), home lessons by location, online nationwide-capable. Do not claim a service area until the owner defines it.
- Create a Google Business Profile only after name, address/service-area rules and contact details are confirmed; keep NAP (name, address, phone) consistent everywhere.
- No fabricated reviews, ratings or opening hours.

## 6. Structured data

Add only for facts that are confirmed and visible on the page:

- `Organization` / `LocalBusiness` (or `MusicSchool`): only once identity, address and contact are confirmed.
- `Course` or `Service` for piano lessons, with `Offer` entries matching published prices and units exactly (group R1,500 is per group; online R350 per student).
- `FAQPage` only if FAQs are visible on the page.
- `BreadcrumbList` for navigation.
- No `AggregateRating` or `Review` without genuine, consented reviews.

Validate with Google's Rich Results Test before launch.

## 7. Images and accessibility

- Follow the representation guidance in [Brand Guidelines](BRAND_GUIDELINES.md); avoid obviously AI-looking or over-staged imagery.
- Informative images get meaningful alt text; decorative images get empty alt.
- Use modern formats (AVIF/WebP), responsive sizes, explicit dimensions and lazy loading below the fold; prioritise the hero image.
- Descriptive file names. Obtain consent before using any identifiable learner image.
- Maintain contrast, semantic headings, visible focus and labelled forms.

## 8. Internal linking

- Home → Piano Lessons, Pricing, Enrol Now.
- Piano Lessons → Pricing, How It Works, Enrol Now.
- Pricing → How It Works (delivery and home-lesson charges), Enrol Now.
- How It Works → Pricing, Contact, Enrol Now.
- About → Piano Lessons, Contact.
- Contact ↔ Enrol Now.
- Use descriptive anchor text (not "click here"). Ensure an XML sitemap, robots configuration and canonical URLs once the production domain is chosen.

## 9. Fresh Wind Music cross-promotion

- Add a "Music Lessons" navigation item and a homepage promotional section on the Fresh Wind Music site linking to Piano Nuggets.
- Link back from Piano Nuggets About/footer to Fresh Wind Music as the supporting organisation.
- Keep the brands visually distinct; do not blur them.
- Exact Fresh Wind Music URL and wording: TBC.

## 10. Future content strategy

Only publish content the team can stand behind; no unsupported claims. Ideas for later phases:

- **Beginner piano education:** first steps at the keyboard, posture and hand position, reading notes, simple scales, practice routines, choosing a keyboard or piano for home or online lessons.
- **Theory and harmony primers:** plain-language explanations of intervals, chords and progressions.
- **Parent guides:** supporting a child's practice, what to expect in the first month.
- **Adult learners:** starting or returning to piano.
- **Gospel-music learners:** introductory chords and progressions for worship settings, with respect for the community and without implying services not offered.

Content must stay consistent with the launch offering; future courses (music production, sound engineering, composition) are not to be advertised as available.

## 11. Measurement

Plan analytics that respect privacy (POPIA): track enquiry-form completions and page performance without recording form contents. Review Search Console after launch. Tooling choice: TBC.


## 12. Implementation status (26 Nov 2026)

Implemented in code:

- **Titles and descriptions:** unique per page, titles under about 65 characters and descriptions 120 to 160 characters (see the pages' `metadata`). The site name is appended by the title template; the home page uses an absolute title.
- **Structured data (JSON-LD):** a site-wide `Organization`/`EducationalOrganization` + `WebSite` graph (logo, slogan, parent organisation Fresh Wind Music, and only the contact points that are configured); `WebPage` + `BreadcrumbList` on every inner page; `FAQPage` on the FAQ page and on each landing page, matching the visible questions exactly; and a `Service` with an `OfferCatalog` on the pricing page whose seven offers carry the exact prices and units (including the whole-group versus per-student distinction). No address, rating, review or opening hours markup, because none are confirmed. Helpers live in `src/config/seo.ts`.
- **Search-intent landing pages:** `/beginner-piano-lessons`, `/adult-piano-lessons`, `/kids-and-teens-piano-lessons`, `/online-piano-lessons`, plus `/faq`. Content comes only from confirmed facts (`src/config/landing.ts`, `src/config/faq.ts`). Each is linked from the footer, the Piano Lessons page and related-lesson cards, so there are no orphan pages.
- **Crawling:** `sitemap.xml` lists only indexable pages; `/enrol` and `/privacy` are included. `robots.txt` allows all and points to the sitemap. A web manifest is provided. `hreflang` (`en-ZA`) is declared on the home page.
- **Social sharing:** one 1200x630 image with full Open Graph and Twitter tags on every page.
- **IndexNow:** the key file is hosted at the site root so Bing and other IndexNow engines can be notified of new or changed pages (Google does not use IndexNow).

Not done, and why:

- **Location claims and local business markup:** the studio address and service area are unconfirmed, so no `LocalBusiness` markup, no Google Business Profile guidance beyond section 5, and no "in <city>" copy.
- **Keyword volume validation:** not run (limited tool credits). Before expanding content, check demand in Google Search Console or a keyword tool.
- **Reviews and testimonials:** none exist yet; add only genuine, consented ones.

Owner actions to complete the set-up:

1. Add the site as a Search Console property (URL-prefix `https://piano-nuggets.aurisnexus.co.za`, or the DNS record method on `aurisnexus.co.za`), submit `/sitemap.xml`, and use URL Inspection to request indexing of the home and landing pages.
2. Add the site to Bing Webmaster Tools and import from Search Console.
3. Once the studio address is confirmed, create the Google Business Profile and add `LocalBusiness`/`MusicSchool` markup with the same name, address and phone.
4. Earn links: ask Fresh Wind Music to link to Piano Nuggets (a "Music Lessons" navigation item and a homepage section), per section 9.
5. Measure: after launch, review impressions, queries and click-through in Search Console, and refine titles and descriptions from real data.
