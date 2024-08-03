/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#4D4D4D',
        'light-gray': '#717171',
        'bcg-light-gray':'#F5F7FA',
        'blue-first': '#050C9C',
        'blue-second': '#3572EF',
        'blue-third': '#3ABEF9',
        'blue-forth': '#A7E6FF',
        'custom-gray-dark': '#263238'

      },
    },
  },
  plugins: [],
}

