/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#333',
        'custom-yellow': '#FFB400',
      },
    },
  },
  plugins: [],
}

