/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
       'roboto': ['Roboto', 'sans-serif'],
       'raleway': ['Raleway', 'sans-serif'],
      },
      colors:{
        primary: '#5F826D',
        dark: '#3C5241',
        secondary: '#D3C3B3',
        light: '#F5F0E7',
        darker: '#4E4E4E',
      }
    },
  },
  plugins: [],
}
