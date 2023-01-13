/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#2E3349',
      'subtext': '6B7082',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'kumbhsans': ['Kumbh Sans', 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [],
}
