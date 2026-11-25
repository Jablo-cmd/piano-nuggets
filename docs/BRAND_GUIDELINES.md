# Piano Nuggets — Brand and Design Guidelines

## 1. Brand foundation

**Brand:** Piano Nuggets  
**Tagline:** Every Note Counts. Every Musician Matters.

Piano Nuggets makes learning piano and keyboard feel approachable, rewarding and exciting. It should feel like a place where any learner can begin, grow and feel valued.

## 2. Brand personality

- Happy and welcoming.
- Energetic without being noisy.
- Encouraging and human.
- Inclusive across ages and experience levels.
- Professional and trustworthy.
- Contemporary, clear and approachable.

Avoid a luxury-only, dark, intimidating or overly formal aesthetic. Also avoid making the brand look childish, cartoonish or exclusively designed for young children.

## 3. Colour palette

The identity was refreshed (25 Nov 2026) from the original warm white/black/orange scheme to a cooler, calmer and more youthful palette. It is deliberately balanced: soft neutrals and teal carry most of the surface, with a single warm peach accent for primary actions.

| Role | Colour | Hex | Tailwind token |
|---|---|---|---|
| Primary text and structure | Midnight navy (matches the logo) | `#0B1635` | `brand-ink` |
| Page background | White | `#FFFFFF` | `brand-white` |
| Soft cool background | Mist | `#F1F8FB` | `brand-mist` |
| Brand highlight (shapes, icon tiles, bands) | Aqua | `#9EDCEB` | `brand-teal` |
| Large display accents and underlines only | Logo cyan | `#019FCB` | `brand-cyan` |
| Text and links on light backgrounds | Deep cyan | `#00718F` | `brand-teal-deep` |
| Primary buttons and small warm accents | Peach | `#FFB59A` | `brand-peach` |
| Gentle secondary background | Lilac | `#E7E4FA` | `brand-lilac` |

Usage:
- Midnight ink for text, headings, the footer and secondary buttons. White and mist for most backgrounds; lilac for the occasional alternate section.
- Aqua for decorative shapes, icon tiles, the piano-key strip and the enrolment call-to-action band. Do not use it for body text.
- Deep cyan for links and small emphasis text on white or mist (meets WCAG AA contrast).
- Peach only for the primary action button and tiny accents; keep it rare so it stays a signal.
- Avoid saturated, neon or multi-colour layouts. If more than two non-neutral colours compete in one view, simplify.

The previous palette (white, near-black `#171717`, light orange `#FFB36B`, warm cream `#FFF3E8`) is retired. The name and tagline are unchanged.

## 3a. Logo

The official logo (navy piano-key "P" mark with a blue-to-magenta gradient edge, navy "Piano" and cyan "Nuggets" wordmark, strapline "Learn · Play · Grow") is stored in `public/images/`: `logo-lockup.png` (mark + wordmark, used in the header and footer), `logo-full.png` (with strapline) and `logo-mark.png` (icon only, also the favicon). On dark backgrounds, place the lockup on a white panel; do not recolour it. The strapline "Learn · Play · Grow" is part of the logo artwork; the brand tagline remains "Every Note Counts. Every Musician Matters."

## 4. Typography and layout

- **Headings:** Outfit (geometric sans, close to the logo wordmark), tight tracking, balanced line breaks.
- **Accent words:** Fraunces italic (soft optical axis) with a drawn aqua underline, used on one word or short phrase per heading to add lift. Use sparingly; never more than one accent per heading.
- **Body and UI:** DM Sans.
- Prices use tabular numerals.


- Use a friendly, modern, highly legible typeface.
- Use clear heading hierarchy and comfortable line lengths.
- Prefer generous spacing and uncluttered sections.
- Use rounded corners thoughtfully.
- Buttons and cards may have soft rounded shapes.
- Use subtle transitions and restrained animation.
- Ensure motion does not interfere with reading or accessibility; respect reduced-motion preferences.

## 5. Imagery and representation

**Current photography (25 Nov 2026):** four images supplied by the owner are used on Home, Piano Lessons, How It Works, About and as the social-share image (`public/images/`, referenced from `src/config/images.ts`). They appear to be computer-generated illustrations, not photographs of real learners or instructors, and they show instructors wearing Piano Nuggets-branded shirts and banners in the earlier orange/black colours. Until they are replaced with real photography (or clearly disclosed as illustrative), do not describe the people shown as actual Piano Nuggets instructors or students, and do not use them to imply named staff or qualifications. Consider regenerating or replacing them so the on-image branding matches the current palette.

Photography should feel natural, documentary-style, warm and welcoming.

Show a balanced range of:
- Black African learners and instructors.
- Different ages, genders and levels of experience.
- Children, teenagers and adults.
- Individual lessons and group learning.
- Upright pianos and electronic keyboards.
- Practical playing and music-theory learning.

Avoid:
- Obviously artificial or heavily staged AI-looking images.
- Images that portray only children.
- Cartoon piano characters or childish clip-art.
- Inconsistent instrument details or visibly incorrect hand positions where avoidable.
- Stereotyped or tokenistic representation.

Images must support the message and should not be used as decoration at the expense of performance or accessibility. Provide meaningful alt text for informative images and empty alt text for purely decorative images.

## 6. Piano and music visual language

Subtle piano-key patterns, musical notation and instrument details can reinforce the identity. Use them sparingly and tastefully. Keep layouts modern and clean rather than filling every section with notes, clefs or keyboard graphics.

## 7. Relationship to Fresh Wind Music

Piano Nuggets is a distinct education brand supported by Fresh Wind Music. It may reference Fresh Wind Music as the studio/organisation behind the programme, but it must maintain its own identity.

Do not reuse Fresh Wind Music's navy/cyan palette as Piano Nuggets' primary visual system. Do not make Piano Nuggets look like a recording studio website.

Fresh Wind Music's website should eventually include a clear link to Piano Nuggets, such as a Music Lessons navigation item and a homepage promotional section. The cross-link should not blur the two brands.

## 8. Voice and writing style

Use language that is:
- Warm, confident and encouraging.
- Clear to parents and adult learners.
- Positive without exaggerated claims.
- Professional without sounding corporate or stiff.

Preferred messaging themes:
- Every learner has a place to start.
- Build musical confidence step by step.
- Learn practical playing alongside the musical understanding behind it.
- Music learning can be enjoyable at any age.

Avoid:
- "Only for kids" messaging.
- Guaranteed mastery or unrealistic timelines.
- Unsupported qualification, certification or examination claims.
- Pressure-based sales language.

## 9. Interface quality

- Mobile-first and responsive.
- Strong contrast and readable type.
- Large, clear touch targets.
- Visible focus indicators.
- Accessible form labels and error messages.
- Consistent spacing, radii and button styles.
- Fast-loading, optimised photography.
- Avoid excessive parallax, scroll hijacking or distracting animation.
