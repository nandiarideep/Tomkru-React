/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      az: 'AZONIX',
      lm: 'LEMON MILK'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}