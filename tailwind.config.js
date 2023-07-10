/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KulimPark: ["Kulim Park", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        up: {
          '0%': {transform: 'translateY(50px)'},
          '100%': {transform: 'translateY(0)'}
        },
        down: {
          '0%': {transform: 'translateY(-50px)'},
          '100%': {transform: 'translateY(0)'}
        }
      },
      animation: {
        'up': 'up 1s ease-in-out',
        'down': 'down 1s ease-in-out'
      }
    },
  },
  plugins: [],
};
