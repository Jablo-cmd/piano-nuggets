/** Site photography (stored in /public/images). Alt text describes what is shown. */
export const images = {
  studio: {
    src: "/images/piano-lesson-studio.webp",
    alt: "A smiling boy plays the piano while an instructor in a Piano Nuggets shirt guides him, with a Piano Nuggets banner behind them",
  },
  handsOn: {
    src: "/images/piano-lesson-hands-on.webp",
    alt: "A young learner plays an upright piano as his instructor points out the music on the stand",
  },
  theoryOneToOne: {
    src: "/images/theory-lesson-one-to-one.webp",
    alt: "An instructor points to rhythm notation on a whiteboard headed Music Theory Basics while a learner listens",
  },
  theoryGroup: {
    src: "/images/theory-class-group.webp",
    alt: "An instructor teaches note values at a whiteboard to a group of four learners seated around a table",
  },
  studioRoom: {
    src: "/images/studio-grand-piano.webp",
    alt: "A wood-panelled music studio with a black grand piano, its lid raised, and a green-topped piano bench",
  },
} as const;
