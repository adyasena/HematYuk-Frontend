/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      'green-primary': '#54B435',
      'green-light': '#82CD47',
      'green-dark': '#379237',
      'red-primary': '#D91C1C',
      'yellow-primary': '#F0FF42',
      'black': '#151515',
      'grey': '#CCCCCC',
      'white': '#F9FAFB'
    },
    extend: {},
    screens: {
      xm: "350px",
      sm: "640px",
      md: "913px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

