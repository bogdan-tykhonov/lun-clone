/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#ff9800',
        'black': {
          DEFAULT: '#282828'
        },
        'gray': {
          DEFAULT: '#7F7F7F',
          dark: '#9e9e9e',
          light: '#ededed',
          'light-hover': '#e0e0e0'
        },
        orange: {
          dark: '#ff6600'
        },
        green: {
          DEFAULT: '#00be71'
        },
        red: {
          DEFAULT: '#db342c'
        }
      },
      zIndex: {
        max: '999999999'
      },
      maxWidth: (theme) => ({
        ...theme('spacing')
      }),
      minWidth: (theme) => ({
        ...theme('spacing')
      }),
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      maxHeight: (theme) => ({
        ...theme('spacing')
      })
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
