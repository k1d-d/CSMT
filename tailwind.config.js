/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#191919',
        accent: '#D6C8B6',
        disabled: '#D8D2CA',
        correct: '#53DB31',
        wrong: '#FF2F2',
      },
    },
  },
  plugins: [],
}
