/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Roboto', 'sans-serif']
      },
      colors: {
        'black': {
          DEFAULT: '#282828',
        },
        'gray': {
          DEFAULT: '#7F7F7F'
        }
      }
    },
  },
  plugins: [],
}
