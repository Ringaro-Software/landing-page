import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument-sans': ['"Instrument Sans"', defaultTheme.fontFamily.sans],
        'roboto': ['"Roboto"', defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
