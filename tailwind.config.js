/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'min': '400px', 'max': '768px' },
      'md': { 'min': '769px', 'max': '991px' },
      'lg': { 'min': '992px', 'max': '1199px' },
      'xl': { 'min': '1200px' },
    },

    extend: {},
  },
  plugins: [],
}
