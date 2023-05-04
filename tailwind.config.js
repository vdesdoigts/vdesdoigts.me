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
        sans: ["var(--font-roboto)"],
        serif: ["var(--font-roboto-slab)"],
      },
      colors: {
        primary: {
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
