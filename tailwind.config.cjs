/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#212d44",
        "secondary": "#005bc5",
        "pink": "#d90f5a",
        "orange": "#ff6e27",
        "yellow": "#ffb60b",
        "purple": "#4f2958",
        "mint": "#0de5a8",
        "sky": "#30c4c9",
        "pea": "#88c100",
      },
      fontFamily: {
        "Sniglet": ["Sniglet", "sans-serif"],
        "sans": ["Sniglet", "sans-serif"],
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}}