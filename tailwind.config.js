/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'md': '12px',
        'sm': '8px',  
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.3)', 
        'lg': '0 4px 8px rgba(0, 0, 0, 0.5)', 
        'custom': '0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1)', 
        'customwhite': '0 4px 8px rgb(255, 254, 254)',
      },
    },
  },
  plugins: [],
};