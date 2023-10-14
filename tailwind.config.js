/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html,jsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "bigStone": "#141D30",
        "cadetBlue": "#AEB7C7",
        "lynch": "#69829D",
      },
      fontFamily: {
        "kanit": ["Kanit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

