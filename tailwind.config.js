/** @type {import('tailwindcss').Config} */
const primeui = require("tailwindcss-primeui");

export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [primeui],
  theme: {
    extend: {
      colors:{
        main:'#031942'
      }
    },
  },
};
