/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '80em': '80em',
        '400px':'400px'
      },
      height:{
        '23em': "23em"
      }
    },
  },
  plugins: [],
};
