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
        "light": "#e6e6e6",
        "white": "#FFFFFF",
        "black": "#4F4F4F",
        "hover-pink" :"#b64978",
        "hover-black" :"#000000"
      },
      spacing: {
        "100%":"100%",
        "90vw":"90vw",
        "80vw":"80vw",
        "1100": "1100px",
        "578" : "578px",
        
        "500" :"500px",
        "411" : "411px",
        "330":"330px",
        "300":"300px",
        "260":"260px",
        "170":"170px"
      }

    },
    gridTemplateColumns: {
      "shop": "1fr  minmax(320px, 1100px) 1fr",
      "item" : "330px 330px 330px"
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

