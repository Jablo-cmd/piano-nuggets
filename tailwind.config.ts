import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          ink: "#1F2A44", // midnight: text and structure
          mist: "#F2F8F8", // soft cool background
          teal: "#8FD3CB", // seafoam: shapes, icon tiles, highlights
          "teal-deep": "#1F6F73", // text/links on white (WCAG AA)
          peach: "#FFB59A", // warm accent for primary buttons
          lilac: "#E6E2F8", // gentle secondary background
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.5rem", xl3: "2rem" },
      boxShadow: { soft: "0 10px 30px -12px rgba(23,23,23,0.18)" },
    },
  },
  plugins: [],
};
export default config;
