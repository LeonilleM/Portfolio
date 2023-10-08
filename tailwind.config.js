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
        '5F826D': '#5F826D',
        '3C5241': '#3C5241',
        'D3C3B3': '#D3C3B3',
        'F5F0E7': '#F5F0E7',
        '4E4E4E': '#4E4E4E',
        '303837': '#303837'
      }
    },
  },
  plugins: [],
}
