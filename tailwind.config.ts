import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#FFFFFF",
          soft: "#F5F1E7",
        },
        ink: {
          DEFAULT: "#1E1B16",
          soft: "#6F6A5E",
        },
        primary: {
          DEFAULT: "#AB8A56",
          soft: "#F6EEDB",
          dark: "#8A6F41",
        },
        accent: {
          DEFAULT: "#AB8A56",
          soft: "#F6EEDB",
        },
        gold: {
          DEFAULT: "#AB8A56",
          soft: "#F6EEDB",
          bright: "#C9A96E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        en: ["var(--font-en)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        "serif-en": ["var(--font-serif-en)", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,27,22,0.06), 0 1px 1px rgba(30,27,22,0.04)",
        "card-hover": "0 20px 40px -14px rgba(171,138,86,0.28)",
      },
      borderRadius: {
        card: "0.75rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
