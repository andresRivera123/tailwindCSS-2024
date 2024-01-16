/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sofia-medium": "sofia-medium",
        "sofia-regular": "sofia-regular"
      },
      colors: {
        "dark-purple": "#0B0D0E",
        "primary-purple": "#651FFF",
        "secondary-purple": "#8466FF",
        "light-purple": "#ECECFE",
        "grays-100": "#E2E4E9",
        "grays-200": "#C4C7CF",
        "grays-400": "#838696",
        "grays-600": "#5C5F6E",
      },
    },
  },
  plugins: [],
};
