/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4a7c59',
          dark: '#3d6549',
        },
        accent: '#e8a838',
      },
    },
  },
  plugins: [],
}
