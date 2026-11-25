# Piano Nuggets — Roadmap and Open Decisions

## 1. Phased roadmap

### Phase 0 — Documentation and decisions
- Establish brand and product documentation.
- Confirm outstanding business details.
- Review and approve the technical direction.
- Keep the repository free of unapproved application implementation.

### Phase 1 — Public website and enrolment enquiries
- Responsive public website.
- Home, Piano Lessons, Pricing, How It Works, About and Contact content.
- Piano/keyboard programme only.
- Individual and group lesson information.
- Studio, home and online delivery information.
- Online enrolment enquiry form.
- WhatsApp enquiry route once the official number is supplied.
- Secure enquiry handling and notification.
- SEO, accessibility, privacy and performance basics.
- Preview deployment and owner review.

### Phase 2 — Operational tools (future consideration)
Potential features, subject to a separate scope:
- Admin access to manage enquiries.
- Student records and parent/guardian contacts.
- Lesson scheduling and instructor allocation.
- Attendance and lesson history.
- Student progress notes.
- Payment tracking.

Do not build Phase 2 features during Phase 1 without explicit approval.

### Phase 3 — Programme expansion (future consideration)
Potential future courses discussed:
- Music Production.
- Studio Sound Engineering.
- Music Theory & Composition.

These are not launch offerings. Each requires its own curriculum, pricing, delivery model and owner approval.

## 2. Launch-critical open decisions

The following details must be confirmed before public launch:

| Decision | Current status | Implementation guidance |
|---|---|---|
| Official WhatsApp number | TBC | Keep configurable; do not invent |
| Public contact email | TBC | Use only a confirmed address |
| Instructor identity/team | TBC | Avoid named profiles until confirmed |
| Instructor biographies and credentials | TBC | Do not fabricate |
| Exact studio address / public location wording | TBC | Do not publish an assumed address |
| Enquiry recipient and notification route | TBC | Confirm before enabling form submission |
| Privacy notice and retention period | TBC | Review before collecting live data |
| Supabase project and approval | TBC | Do not assume an existing project is authorised for this product |
| Domain and DNS configuration | TBC | Verify before deployment |
| Lesson availability / timetable | TBC | Do not imply real-time availability |

## 3. Decisions already established

- Brand name: Piano Nuggets.
- Tagline: Every Note Counts. Every Musician Matters.
- Brand tone: happy, welcoming, energetic, inclusive and professional.
- Brand colours: white, black and light orange, with warm cream as support.
- Audience: all ages, not exclusively children.
- Initial public offering: piano and keyboard lessons only.
- Curriculum areas: practical piano/keyboard, music theory, harmony and piano technique.
- Individual tuition: R350 per 60-minute lesson.
- Individual packages: 4 lessons for R1,400 per four-week month; 8 lessons for R2,800 per four-week month.
- Maximum individual frequency: twice weekly.
- Studio group: 4–6 students, R1,500 for the whole group per 60-minute session.
- Online group: R350 per student per 60-minute lesson.
- Registration: R250 once-off.
- Optional learning material pack: R850 once-off.
- Home lessons: available on request, with additional location-dependent travel/deployment charges.
- Online: reliable internet and a piano/keyboard required; Zoom preferred, other platforms acceptable with suitable audio quality.
- Students may enquire/register online or via WhatsApp.
- A form submission is an enquiry, not a confirmed booking.

## 4. Owner approval checkpoints

Before implementation:
- Confirm the technical stack and data handling approach.
- Confirm any changes to the documented pricing or lesson rules.

Before production:
- Approve all public copy and imagery.
- Supply verified contact details and location wording.
- Approve the privacy notice and enquiry data flow.
- Test the enrolment process end to end.
- Confirm the production domain and deployment configuration.

## 5. Change control

When a business decision changes:
1. Update the relevant document first.
2. Update any dependent documents.
3. Keep pricing and public copy consistent.
4. Record material changes in the pull request or commit message.
5. Do not silently reinterpret an unresolved item as approved.
