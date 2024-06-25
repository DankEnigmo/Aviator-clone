/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        serif: ['Playball'],
        sans: ['Inter', 'sans']
      }
    },
  },
  plugins: [],
}