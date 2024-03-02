/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orangeBg:'#FF9500',
        grayColor:'#F1F1F3'
      }
    },
  },
  plugins: [],
}

