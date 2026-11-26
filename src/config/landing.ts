import type { Faq } from "@/config/faq";

/**
 * Search-intent landing pages. Content is limited to confirmed facts from the programme
 * documents: no invented teaching methods, timelines, qualifications, availability or results.
 */
export type Landing = {
  slug: string;
  path: string;
  navName: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  image: "handsOn" | "theoryOneToOne" | "theoryGroup" | "studioRoom" | null;
  whoTitle: string;
  who: string[];
  learnTitle: string;
  learn: { title: string; text: string }[];
  howTitle: string;
  how: string[];
  priceNote: string;
  faqs: Faq[];
  related: string[];
};

export const landings: Landing[] = [
  {
    slug: "beginner-piano-lessons",
    path: "/beginner-piano-lessons",
    navName: "Beginner piano lessons",
    metaTitle: "Beginner Piano Lessons",
    metaDescription: "Learn piano or keyboard from the start. Practical playing, theory, harmony and technique in 60-minute lessons: individual from R350, studio, home or online.",
    eyebrow: "Beginner piano lessons",
    titleLead: "Never touched a piano?",
    titleAccent: "Start here.",
    intro: "Piano Nuggets welcomes complete beginners. Lessons build practical playing alongside the music theory, harmony and technique behind it, so you understand what you play as you learn to play it.",
    image: "handsOn",
    whoTitle: "Beginners are exactly who these lessons are for",
    who: [
      "Children, teenagers and adults who are starting piano or keyboard for the first time.",
      "Learners who have tried before and want to begin again with confidence.",
      "Parents and guardians looking for a patient, welcoming first step for a child.",
    ],
    learnTitle: "What beginners work on",
    learn: [
      { title: "Playing", text: "Practical piano and keyboard playing from the very first lessons." },
      { title: "Reading and understanding", text: "Music theory: the written language of music and the ideas behind it." },
      { title: "How notes fit together", text: "Harmony: how notes and chords work together." },
      { title: "Comfortable technique", text: "Coordination, control and sound playing habits." },
    ],
    howTitle: "How beginner lessons work",
    how: [
      "Every lesson is 60 minutes, once or twice a week for individual lessons.",
      "Choose individual or group lessons, at the Fresh Wind Music studio, at your home or online.",
      "Tell us your experience and the instrument you have when you enquire, and we will talk through what suits you.",
      "Everyone starts from where they are. We do not promise particular grades, exam results or timelines.",
    ],
    priceNote: "Individual lessons are R350 per 60-minute lesson, with R1,400 (once weekly) and R2,800 (twice weekly) monthly packages on a four-week month. A once-off R250 registration fee applies.",
    faqs: [
      { q: "Do I need any experience to start?", a: "No. Piano Nuggets welcomes complete beginners as well as learners with some experience. The enquiry asks about previous experience so our team can talk through what suits you." },
      { q: "Do I need to own a piano or keyboard?", a: "For online lessons you need a piano or keyboard; a full-size piano or electronic keyboard is recommended, although any usable keyboard can be used. For studio and home lessons, ask us when we speak." },
      { q: "Is an individual or group lesson better for a beginner?", a: "Both are available. Individual lessons are one-to-one; group lessons let you learn alongside others. We discuss which suits you when we contact you." },
      { q: "How long is each lesson and what does it cost?", a: "Each lesson is 60 minutes. An individual lesson is R350, and monthly packages are R1,400 for four lessons or R2,800 for eight, on a four-week month." },
    ],
    related: ["/adult-piano-lessons", "/kids-and-teens-piano-lessons", "/online-piano-lessons"],
  },
  {
    slug: "adult-piano-lessons",
    path: "/adult-piano-lessons",
    navName: "Piano lessons for adults",
    metaTitle: "Piano Lessons for Adults",
    metaDescription: "Piano and keyboard lessons for adults, whether you are starting out or returning. Individual or group, studio, home or online, in 60-minute lessons.",
    eyebrow: "Piano lessons for adults",
    titleLead: "Never too late to",
    titleAccent: "begin, or begin again.",
    intro: "Piano Nuggets is not only for children. Adults are welcome whether they are learning piano for the first time or coming back to it, with lessons that join practical playing to theory, harmony and technique.",
    image: "studioRoom",
    whoTitle: "Lessons for grown-up learners",
    who: [
      "Adults learning piano or keyboard for the first time.",
      "Returning players who want to rebuild their playing and understanding.",
      "Adults who prefer to learn at home or online as well as at the studio.",
    ],
    learnTitle: "What adult learners work on",
    learn: [
      { title: "Practical playing", text: "Piano and keyboard playing you can apply straight away." },
      { title: "Music theory", text: "Understanding the written language of music." },
      { title: "Harmony", text: "How notes and chords work together." },
      { title: "Piano technique", text: "Coordination, control and sound playing habits." },
    ],
    howTitle: "How lessons work for adults",
    how: [
      "You are your own primary contact: no guardian details are needed for adult learners.",
      "Lessons are 60 minutes, individual (once or twice a week) or in a group.",
      "Learn at the Fresh Wind Music studio, at your home (travel charges apply by location) or online.",
      "Lesson days and times are arranged after we have spoken with you.",
    ],
    priceNote: "Individual lessons are R350 per 60-minute lesson; monthly packages are R1,400 (four lessons) or R2,800 (eight lessons) on a four-week month. Online group lessons are R350 per student per lesson. A once-off R250 registration fee applies.",
    faqs: [
      { q: "Is it too late to start piano as an adult?", a: "No. Piano Nuggets welcomes adults, both first-time learners and returning players, and lessons start from where you are." },
      { q: "Can I have lessons at home or online?", a: "Yes. Lessons can be at the Fresh Wind Music studio, at your home (additional travel charges depend on your location) or online, with Zoom preferred." },
      { q: "Can I learn in a group?", a: "Yes. Studio group lessons are for 4 to 6 students at R1,500 per 60-minute session for the whole group, and online group lessons are R350 per student per lesson." },
      { q: "Who do you contact when I enquire?", a: "As an adult learner, you are the primary contact. Our team contacts you to discuss format, location, group placement and schedule." },
    ],
    related: ["/beginner-piano-lessons", "/online-piano-lessons", "/kids-and-teens-piano-lessons"],
  },
  {
    slug: "kids-and-teens-piano-lessons",
    path: "/kids-and-teens-piano-lessons",
    navName: "Piano lessons for kids and teens",
    metaTitle: "Piano Lessons for Kids & Teenagers",
    metaDescription: "Welcoming piano and keyboard lessons for children and teenagers. Practical playing, theory, harmony and technique, with a parent or guardian handling enrolment.",
    eyebrow: "Piano lessons for kids and teens",
    titleLead: "A welcoming place for young musicians to",
    titleAccent: "find their feet.",
    intro: "Children and teenagers learn practical piano and keyboard playing alongside music theory, harmony and technique, at their own pace, in a welcoming and encouraging setting.",
    image: "theoryGroup",
    whoTitle: "For children, teenagers and the adults who support them",
    who: [
      "Children starting their musical journey, with a parent or guardian handling enrolment.",
      "Teenagers who want to build practical skill and real musical understanding.",
      "Families who want a choice of individual or group lessons, at the studio, at home or online.",
    ],
    learnTitle: "What young learners work on",
    learn: [
      { title: "Playing", text: "Practical piano and keyboard playing." },
      { title: "Music theory", text: "The written language of music and the ideas behind it." },
      { title: "Harmony", text: "How notes and chords work together." },
      { title: "Technique", text: "Coordination, control and sound playing habits." },
    ],
    howTitle: "How it works for families",
    how: [
      "A parent or legal guardian should submit or oversee the enquiry for any learner under 18, and guardian contact details are needed.",
      "Lessons are 60 minutes: individual (once or twice a week) or in a group, at the studio, at home or online.",
      "We collect only the information we need, and do not publish learner names, contact details or photographs.",
      "Our team contacts you to discuss suitability, format, group placement and schedule before anything is confirmed.",
    ],
    priceNote: "Individual lessons are R350 per 60-minute lesson, with R1,400 and R2,800 monthly packages on a four-week month. Studio groups of 4 to 6 are R1,500 per session for the whole group; online group lessons are R350 per student. A once-off R250 registration fee applies.",
    faqs: [
      { q: "What age can my child start?", a: "Piano Nuggets welcomes children, teenagers and adults. Tell us your child's age and any experience when you enquire, and our team will talk through whether lessons suit them." },
      { q: "Who enrols my child?", a: "A parent or legal guardian should submit or oversee the enquiry, and guardian contact details are required for learners under 18." },
      { q: "Can my teenager learn online?", a: "Yes. Online lessons need reliable internet, a piano or keyboard and good enough audio for the instructor to hear the notes. Zoom is preferred." },
      { q: "Is the group price per child?", a: "Studio group lessons are R1,500 per 60-minute session for the whole group of 4 to 6 students, not per child. Online group lessons are R350 per student." },
    ],
    related: ["/beginner-piano-lessons", "/online-piano-lessons", "/adult-piano-lessons"],
  },
  {
    slug: "online-piano-lessons",
    path: "/online-piano-lessons",
    navName: "Online piano lessons",
    metaTitle: "Online Piano & Keyboard Lessons",
    metaDescription: "Learn piano or keyboard online with live 60-minute lessons, preferably on Zoom. See what you need and the fees, including R350 per student for online groups.",
    eyebrow: "Online piano lessons",
    titleLead: "Live piano lessons,",
    titleAccent: "wherever you are.",
    intro: "Prefer to learn from home? Online lessons bring the same mix of practical playing, music theory, harmony and technique to you, as live 60-minute lessons with good sound quality so your instructor can hear every note.",
    image: null,
    whoTitle: "Who online lessons suit",
    who: [
      "Learners who would rather not travel to the studio.",
      "Families who want lessons at home without an instructor visit.",
      "Anyone with a piano or keyboard and a reliable internet connection.",
    ],
    learnTitle: "What you need",
    learn: [
      { title: "Reliable internet", text: "A stable connection so the lesson runs smoothly." },
      { title: "A piano or keyboard", text: "A full-size piano or electronic keyboard is recommended, although any usable keyboard can be used." },
      { title: "Good audio", text: "Your instructor must be able to hear the notes you play." },
      { title: "Zoom (preferred)", text: "Another platform can be used if it suits your audio and keeps the lesson smooth." },
    ],
    howTitle: "How online lessons work",
    how: [
      "Lessons are 60 minutes, individual or in an online group.",
      "Zoom is preferred; another mutually agreed platform works if the sound quality is good enough.",
      "Lesson days and times are arranged after we have spoken with you; an enquiry is not a confirmed booking.",
      "Prefer in person? Lessons are also available at the Fresh Wind Music studio and, on request, at your home.",
    ],
    priceNote: "Online group lessons are R350 per student for each 60-minute lesson. See the pricing page for individual lessons and monthly packages. A once-off R250 registration fee applies, and the instructional material pack (R850 once-off) is optional.",
    faqs: [
      { q: "What do I need for online piano lessons?", a: "Reliable internet, a piano or keyboard, and audio good enough for your instructor to hear the notes. A full-size piano or electronic keyboard is recommended, although any usable keyboard can be used." },
      { q: "Do I have to use Zoom?", a: "Zoom is preferred, but another platform chosen by the student can be used if it provides suitable audio quality and a smooth lesson." },
      { q: "How much are online group lessons?", a: "R350 per student for each 60-minute lesson." },
      { q: "Can I learn in person instead?", a: "Yes. Lessons are also available at the Fresh Wind Music studio and, on request, at your home, where additional travel charges depend on your location." },
    ],
    related: ["/beginner-piano-lessons", "/adult-piano-lessons", "/kids-and-teens-piano-lessons"],
  },
];

export const landingByPath = (path: string) => landings.find((l) => l.path === path)!;
