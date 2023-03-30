/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gold: '#FCC251',
      green: '#A4CD70',
      orange: '#CD6226',
      dark: '#1E1E1E',
      purple: '#28272F',
      blue: '#484878',
      light: '#D1C7D4'
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: []
}
