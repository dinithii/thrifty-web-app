/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Schoolbell','sans-serif'],
      },
      /*fontFamily: {
        title: ['Lexend','sans-serif'],
      },*/
      colors: {
        primary: '#A5B68D',
        secondary: '#F0F4F8',
      },
    },
  },
  plugins: [],
}

