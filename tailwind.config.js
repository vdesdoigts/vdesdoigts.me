const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-roboto)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "var(--font-roboto-slab)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      colors: {
        primary: {
          50: "#ECE5FF",
          100: "#B397FE",
          500: "#4701FF",
          600: "#6C4DBD",
        },
        gray: {
          ...colors.gray,
          DEFAULT: "#666665",
        },
      },
      backgroundColor: {
        main: "#FFF9F9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
