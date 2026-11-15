import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf9f6",
        foreground: "#141c19",
        forest: {
          50: "#f2faf5",
          100: "#eaf4ef",
          200: "#d8f3dc",
          300: "#b7e4c7",
          400: "#74c69d",
          500: "#40916c",
          600: "#2d6a4f",
          700: "#1b4332",
          800: "#133024",
          900: "#0b1d16",
        },
        sage: {
          50: "#f4f9f6",
          100: "#e3f0e8",
          200: "#c7e2d2",
          300: "#9ecdb2",
          400: "#74b693",
          500: "#52b788",
          600: "#40916c",
          700: "#2d6a4f",
        },
        charcoal: {
          900: "#141c19",
          800: "#232e29",
          700: "#47544f",
          600: "#5a6862",
          500: "#63726b", // Contrast ratio > 4.8:1 on white (WCAG AA compliant)
          400: "#7d8d85",
          300: "#b5c0ba",
          200: "#d6ddd9",
          100: "#e7e5df",
          50: "#f5f4f0",
        },
        status: {
          taken: "#15803d",
          "taken-bg": "#f0fdf4",
          "taken-border": "#bbf7d0",
          due: "#b45309",
          "due-bg": "#fffbeb",
          "due-border": "#fde68a",
          missed: "#b91c1c",
          "missed-bg": "#fef2f2",
          "missed-border": "#fecaca",
          skipped: "#4b5563",
          "skipped-bg": "#f3f4f6",
          "skipped-border": "#e5e7eb",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "body-elderly": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "title-elderly": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(20, 28, 25, 0.04), 0 1px 2px -1px rgba(20, 28, 25, 0.02)",
        card: "0 2px 6px 0 rgba(20, 28, 25, 0.05), 0 1px 3px -1px rgba(20, 28, 25, 0.03)",
        elevated: "0 10px 25px -3px rgba(20, 28, 25, 0.08), 0 4px 6px -4px rgba(20, 28, 25, 0.03)",
      },
      borderRadius: {
        card: "1rem",
        button: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
