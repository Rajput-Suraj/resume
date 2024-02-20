/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customDark: {
          50: '#101415',
          100: '#110904',
          200: '#190B14',
          300: '#262020',
          400: '#0B1623',
          500: '#0E1514',
          600: '#222',
        },
      },
      textColor: {
        offWhite: {
          50: '#eee',
        },
      },
    },
  },
  plugins: [],
};
