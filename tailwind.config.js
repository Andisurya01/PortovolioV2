/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'Primary-Color' : "#fcfdfd",
        'Secondary-Color' : "#7a7b84",
        
        'tersier-color-orange' : "#fab085",
        'tersier-color-red-heart' : "#702948",
        'tersier-color-red-pucet' : "#9c5e6b"
      },
      fontFamily : {
        'Poppins' : ["sans-serif"]
      }
    },
  },
  plugins: [],
}