import defaultTheme from 'tailwindcss/defaultTheme';
import { LIGHT_GRAY } from './src/constants';

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
      },
      colors: {
        'light-gray': LIGHT_GRAY
      }
    },
  },
  plugins: [],
}
