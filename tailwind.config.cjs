/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "category-red": "#db3535",
        "category-blue": "#3588db",
        "category-dark-blue": "#2449a6",
        "category-teal": "#24a686",
        "category-cyan": "#0ec9ba",
        "category-green": "#24a636",
        "category-purple": "#7571f8",
        "category-violet": "#bf35db",
        "category-magenta": "#c41667",
        "category-yellow": "#dedb47",
        "category-orange": "#f79e0f",
        "category-pink": "#f871a2",
        "raisin-black": "#181D27",
      },
    },
  },
  plugins: [],
}
