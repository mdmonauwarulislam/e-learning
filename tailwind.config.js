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
        grayColor:'#F1F1F3',
        grayBg:'#F7F7F8',
        OrangeBoreder:'#FFEACC',
      },
      fontFamily: {
        'be-vietnam-pro': ['"Be Vietnam Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

