/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#163F6F",
        accent: "#7C0004",
        "bg-light": "#F7F7F7",
        "bg-lighter": "#FAFAFA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

