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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        // Dark mode surfaces
        base: {
          DEFAULT: "#0a0a0c",
          100: "#111114",
          200: "#18181d",
          300: "#1e1e26",
        },
        // Light mode surfaces
        light: {
          DEFAULT: "#EAEAEA",
          100: "#E0E0E0",
          200: "#D4D4D4",
          300: "#CACACA",
        },
        // Text scale — pure neutrals only
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#888888",
          faint: "#444444",
          dark: "#111111",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        label: "0.1em",
      },
      lineHeight: {
        display: "0.95",
      },
      fontSize: {
        hero: ["92px", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        heading: ["56px", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        label: ["11px", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
    },
  },
  plugins: [],
};

export default config;