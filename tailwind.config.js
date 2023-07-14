/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
       raleway: ['var(--font-raleway)', ...fontFamily.sans],
      },
      colors:{
        primary: '#5F826D',
        dark: '#3C5241',
        secondary: '#D3C3B3',
        light: '#F5F0E7',
        darker: '#4E4E4E',
        'darkgray-c': '#303837'
      }
    },
  },
  plugins: [],
}
