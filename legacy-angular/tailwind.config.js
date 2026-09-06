/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["Libre Bodoni", "serif"],
        poppins: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      xlarge: "80px",
    },
  },
  plugins: [],
};
