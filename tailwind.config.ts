import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          ink: "#171717",
          orange: "#FFB36B",
          cream: "#FFF3E8",
          // Darker orange for text/links on white (meets WCAG AA contrast)
          "orange-deep": "#A64D00",
          "orange-soft": "#FFD9B3",
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
