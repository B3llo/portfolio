/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "ui-monospace", "monospace"],
        code: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
