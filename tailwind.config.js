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
        },
      },
      backgroundColor: {
        primary: "#FFF9F9",
      },
    },
  },
  plugins: [],
};
