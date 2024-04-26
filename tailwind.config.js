/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      jersy:["Jersey 15"]
    },
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        jersy: ["Caveat Brush", "Jersey 15"],

      }
    },
  },
  plugins: [],
}

