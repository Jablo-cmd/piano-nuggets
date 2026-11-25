# Piano Nuggets — Product Requirements

## 1. Product summary

Piano Nuggets is a dedicated piano and keyboard education website. Its purpose is to present the teaching programme clearly, build trust with prospective learners and parents, explain available lesson arrangements and fees, and collect enrolment enquiries.

The initial product is a public marketing and enrolment website. It is not a full learning-management system.

## 2. Goals

1. Communicate a friendly, inclusive and credible music-learning experience.
2. Make the piano and keyboard programme understandable to prospective students of different ages.
3. Explain individual and group learning options, including studio, home and online delivery.
4. Publish transparent pricing without confusing per-student fees with whole-group session fees.
5. Allow prospective students or parents/guardians to submit an enrolment enquiry online.
6. Provide a WhatsApp enquiry alternative once the official number is supplied.
7. Establish a foundation that can support additional courses and student-management capabilities later.

## 3. Out of scope for the first release

- Student accounts, dashboards or portals.
- Online lesson scheduling or guaranteed real-time availability.
- Automated payment collection, invoicing or payment reconciliation.
- Attendance registers, assessments, grades or progress tracking.
- Downloadable course libraries or a full LMS.
- Music production, studio sound engineering, or standalone theory/composition courses as advertised programmes.
- Automatic enrolment confirmation.

These may be considered for later phases.

## 4. Intended audience

- Children starting music lessons.
- Teenagers developing practical musical ability.
- Adults learning or returning to piano/keyboard.
- Beginners and learners with some previous experience.
- Parents or guardians enquiring on behalf of minors.

The brand must not be positioned as exclusively a children's music school.

## 5. Initial site structure

Recommended primary navigation:

1. Home
2. Piano Lessons
3. Pricing
4. How It Works
5. About
6. Contact
7. **Enrol Now** (prominent call to action)

The navigation may be simplified on mobile, but enrolment must remain easy to find.

## 6. Page and section requirements

### Home
- Clear headline and tagline.
- Concise explanation of piano and keyboard lessons.
- Welcoming imagery representing different ages.
- Primary Enrol Now action and secondary lesson-information action.
- Short introduction to lesson formats.
- Summary of learning areas.
- Clear route to pricing and contact information.

### Piano Lessons
Explain the programme and its four learning areas:
- Practical Piano & Keyboard.
- Music Theory.
- Harmony.
- Piano Technique.

Explain that lessons are for different ages and experience levels. Do not promise a particular grade, qualification, examination result or completion timeline unless later confirmed.

### Pricing
Show each fee with its correct unit:
- Individual lesson: per 60-minute lesson.
- Individual monthly packages: four-week basis.
- Studio group lesson: fee for the entire group per 60-minute session, for 4–6 students.
- Online group lesson: fee per student per 60-minute lesson.
- Registration fee and optional material pack separately.

Home lessons require a location-based quotation because additional travel/deployment charges apply.

### How It Works
Explain the available delivery modes:
- At the Fresh Wind Music studio (exact public address/location wording TBC).
- At the learner's residence, subject to location and additional charges.
- Online, using Zoom or another mutually agreed platform with suitable sound quality.

Explain the enquiry and follow-up process. A submitted form is an enquiry/registration request, not a confirmed booking.

### About
Introduce the Piano Nuggets teaching philosophy and relationship to Fresh Wind Music. Do not invent instructor biographies, credentials, teaching experience, testimonials or student results. Instructor identity and biography are TBC.

### Contact
Provide confirmed contact details only. WhatsApp number, public email and exact studio location are TBC.

### Enrol Now
Provide an accessible form suitable for a learner or a parent/guardian registering a minor. See [Operations and Enrolment](OPERATIONS_AND_ENROLMENT.md).

## 7. Functional requirements

- Responsive layout for mobile, tablet and desktop.
- Clear navigation and calls to action.
- Online enrolment/enquiry form with client- and server-side validation.
- Secure handling of submitted personal information.
- Clear success and error states.
- Spam protection appropriate to the selected implementation.
- No public exposure of submitted student information.
- WhatsApp link generated only from the verified official number.
- Search-engine metadata, social sharing metadata and sitemap.
- Accessible semantic structure, keyboard navigation, visible focus states, labels and useful validation messages.
- Optimised images and sensible loading performance.

## 8. Enquiry handling

The website must explain what happens after a form is submitted: the Piano Nuggets/Fresh Wind Music team will contact the enquirer to discuss the learner's needs, confirm availability, arrange lesson details and explain payment/next steps.

Do not display a booking confirmation or claim that a place has been reserved automatically.

The receiving email address and operational notification method must be confirmed before launch.

## 9. Content and trust requirements

- Do not fabricate testimonials, reviews, student numbers, awards, accreditations, qualifications or success statistics.
- Do not promise guaranteed musical outcomes.
- Avoid unsupported claims such as "the best" or "number one".
- Use South African Rand (ZAR) and clear R formatting.
- Use plain, welcoming language.
- Keep the distinction between individual and group fees explicit.

## 10. Acceptance criteria

The first release is ready for review when:
- Every public page reflects the approved brand direction.
- Only piano/keyboard lessons are presented as currently available.
- All published prices and units match the pricing document.
- Studio, home and online arrangements are described accurately.
- Enrolment submissions are validated and delivered to a confirmed destination.
- No invented contact details, instructor credentials or address are present.
- Privacy, accessibility, SEO and responsive checks have been completed.
- The owner has reviewed and approved the live content before launch.
