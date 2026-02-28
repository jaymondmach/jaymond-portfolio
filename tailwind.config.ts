import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        display: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      colors: {
        "bg-black": "#000000",
        "glass-dark": "rgba(20, 20, 20, 0.6)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "flow": "flow 20s ease-in-out infinite",
        "flow-delayed": "flow 20s ease-in-out infinite -5s",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        flow: {
          "0%": { transform: "translate(-50%, -50%) scale(1)" },
          "33%": { transform: "translate(-45%, -40%) scale(1.1)" },
          "66%": { transform: "translate(-55%, -45%) scale(0.9)" },
          "100%": { transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
