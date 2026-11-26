/** Single source for FAQ content (shown on the pages and emitted as FAQPage structured data). Facts come from the programme documents. */
export type Faq = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "lessons",
    title: "About the lessons",
    items: [
      { q: "What do Piano Nuggets lessons cover?", a: "Lessons combine four connected learning areas: practical piano and keyboard playing, music theory, harmony and piano technique. The aim is musical understanding, practical ability and confidence." },
      { q: "Who can take lessons?", a: "Children, teenagers and adults, from complete beginners to learners who already have some experience. Piano Nuggets is not only for children." },
      { q: "How long is a lesson?", a: "Every lesson is 60 minutes." },
      { q: "Do you teach instruments other than piano and keyboard?", a: "No. At launch, Piano Nuggets offers piano and keyboard lessons only." },
      { q: "How often can I have lessons?", a: "Individual lessons are available once or twice a week. Twice a week is the maximum." },
    ],
  },
  {
    id: "formats",
    title: "Where and how you learn",
    items: [
      { q: "Where do lessons take place?", a: "At the Fresh Wind Music studio, at your home, or online. Public studio location details are still to be confirmed." },
      { q: "Can an instructor come to my home?", a: "Home lessons are available on request, subject to location. Additional travel charges depend on where you live, so please ask for a quotation." },
      { q: "Are lessons individual or in a group?", a: "Both. Individual lessons are one-to-one. Studio group lessons are for 4 to 6 students, and group lessons are also available online. Group placement is arranged after we speak with you." },
      { q: "What do I need for online lessons?", a: "Reliable internet, a piano or keyboard, and good enough audio for your instructor to hear the notes you play. A full-size piano or electronic keyboard is recommended, although any usable keyboard can be used. Zoom is preferred; another platform can be used if the sound quality is suitable." },
    ],
  },
  {
    id: "pricing",
    title: "Prices and fees",
    items: [
      { q: "How much does an individual lesson cost?", a: "An individual lesson is R350 per 60-minute lesson. Monthly packages use a four-week month: once weekly (4 lessons) is R1,400 and twice weekly (8 lessons) is R2,800." },
      { q: "Is the R1,500 studio group price per student?", a: "No. R1,500 is the total for the whole group of 4 to 6 students for one 60-minute session. It is not a per-student fee." },
      { q: "How much are online group lessons?", a: "Online group lessons are R350 per student for each 60-minute lesson." },
      { q: "Is there a registration fee?", a: "Yes. Registration is a once-off fee of R250." },
      { q: "Do I have to buy the instructional material pack?", a: "No. The pack is optional and costs R850 once-off. It covers theory, harmony, technique and course resources, and buying it is your choice." },
      { q: "Is the price in rand?", a: "Yes. All prices are in South African rand (ZAR)." },
    ],
  },
  {
    id: "enrolment",
    title: "Enrolling",
    items: [
      { q: "Does sending an enquiry book my lesson?", a: "No. An enquiry is not a confirmed booking or a guaranteed place. Our team contacts you to discuss suitability, location, format, group placement and schedule, and confirms the next steps directly with you." },
      { q: "How do I enquire right now?", a: "Message us on WhatsApp or send an email using the details on the Contact page. The online enrolment form is a preview and does not send anything yet." },
      { q: "Who enrols a child?", a: "A parent or legal guardian should submit or oversee the enquiry for any learner under 18, and guardian contact details are needed. Adult learners are their own primary contact." },
      { q: "Do you promise exam results or a learning timeline?", a: "No. Everyone starts from where they are, and Piano Nuggets does not promise particular grades, exam results or timelines." },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
