/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:'class',
  theme: {
    extend: {
      'custom-bg': "url('../../../assets/images/bg.jpg')",

    },
  },
  plugins: [],
}