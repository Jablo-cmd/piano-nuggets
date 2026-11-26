import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          ink: "#170D0B", // espresso black (piano and walls): text and dark sections
          plum: "#3A2220", // mahogany: richer dark cards
          mist: "#FBF4E8", // warm cream: soft backgrounds
          honey: "#E9A71C", // golden oak: the main accent (buttons, highlights, ribbon)
          "honey-soft": "#F8E4B6", // pale oak tint
          oak: "#B8701F", // deeper oak for hovers and small detail
          rose: "#C98B7E", // studio carpet: a rare soft secondary touch
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Georgia", "serif"],
      },
      borderRadius: { xl2: "1.5rem", xl3: "2rem" },
      boxShadow: { soft: "0 10px 30px -12px rgba(23,23,23,0.18)" },
    },
  },
  plugins: [],
};
export default config;
