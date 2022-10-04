/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    screens: {     'mobile': '400px',
  },
  
    
    colors: {
      'body': {
        100: '#0d3880',
      },
      'white':{
        100: '#ffffff',
      },
      'sub':{
        100: '#ffc600',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
