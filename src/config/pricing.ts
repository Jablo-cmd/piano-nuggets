/** Approved fees (ZAR). Single source for every price shown on the site. */
export const fmt = (n: number) => `R${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const pricing = {
  registration: { amount: 250, unit: "once-off" },
  individual: { amount: 350, unit: "per 60-minute lesson" },
  onceWeekly: { amount: 1400, lessons: 4, unit: "per four-week month" },
  twiceWeekly: { amount: 2800, lessons: 8, unit: "per four-week month" },
  studioGroup: { amount: 1500, unit: "per 60-minute session, total for the whole group", size: "4–6 students" },
  onlineGroup: { amount: 350, unit: "per student, per 60-minute lesson" },
  materials: { amount: 850, unit: "once-off, optional" },
} as const;

export const learningAreas = [
  { title: "Practical Piano & Keyboard", text: "Play real music from the start, building the ability to apply musical ideas on piano or keyboard.", icon: "keyboard" },
  { title: "Music Theory", text: "Understand the written language of music and the concepts that support everything you play.", icon: "book" },
  { title: "Harmony", text: "Learn how notes and chords work together, so you can play with understanding.", icon: "layers" },
  { title: "Piano Technique", text: "Develop coordination, control and sound playing habits for comfortable, confident playing.", icon: "hand" },
] as const;
