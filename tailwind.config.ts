import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          ink: "#0B1635", // midnight navy (matches the logo): text and structure
          mist: "#F1F8FB", // soft cool background
          teal: "#9EDCEB", // aqua: shapes, icon tiles, highlights, bands
          cyan: "#019FCB", // logo cyan: large display accents and underlines only
          "teal-deep": "#00718F", // text/links on white, mist and lilac (WCAG AA)
          peach: "#FFB59A", // warm accent for primary buttons
          lilac: "#E7E4FA", // gentle secondary background
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
