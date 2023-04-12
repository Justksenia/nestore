/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "grey": "#C2C2C2",
        "green": "#74ba00",
        "red": "#ff3939",
        "pink": "#e30475",
        "light": "#E2E9F9",
        "white": "#FFFFFF",
        "black": "#4F4F4F"
      },

    },
    fontSize: {
      "14":"14px",
      "16":"16px",
      "18":"18px",
      "22":"22px",
      "30":"30px"
    }
  },
  plugins: [],
}
