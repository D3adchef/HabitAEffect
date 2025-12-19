/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E4F0F1",
        blue: "#145DA0",
        orange: "#F28C28",
        lightorange: "#FFE0A7",
        grey: "#7792A6",
        greygreen: "#72959A",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};