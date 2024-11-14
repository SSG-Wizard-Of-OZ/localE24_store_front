/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'side-navy': '#e9edf2',
        'txt-grey' : '#1f2021',
        'txt-cyan' : '#37ebe3'
      }
    },
  },
  plugins: [],
}

