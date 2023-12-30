/** @type {import('tailwindcss').Config} */
module.exports = {
  /* content: archivos que queremos que contengan las clases de utilidad */
  content: ["./src/**/*.{html,js}"],
  /* theme: Agregar paletas de colores, fuentes, sombras,et */
  theme: {
    extend: {
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', "sans-serif"],
      },
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue:": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "vary-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "close-menu": "url(../00-conceptos-landing/images/icon-close.svg);",
        "open-menu": "url(../00-conceptos-landing/images//icon-hamburger.svg)"
      }
    },
  },
  plugins: [],
};
