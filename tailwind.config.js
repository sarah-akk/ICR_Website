/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37539C",
        secondary: "#F1D126",
        third: "#8F65A7",
      },
    },
  },
  plugins: [],
};
