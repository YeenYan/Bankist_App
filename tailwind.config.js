/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '*.{html,js}'
    // './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      'neutral': {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
      'primary': {
        50: '#EFF8FF',
        300: '#84CAFF',
        500: '#2E90FA',
        700: '#175CD3',
        900: '#194185',
      },
      'secondary': {
        50: '#F4F3FF',
        300: '#BDB4FE',
        500: '#7A5AF8',
        700: '#5925DC',
        900: '#3E1C96',
      },
      'warning': {
        50: '#FFFAEB',
        300: '#FEC84B',
        500: '#F79009',
        700: '#B54708',
        900: '#792E0D',
      },
      'error': {
        50: '#FEF3F2',
        300: '#FDA29B',
        500: '#F04438',
        700: '#B32318',
        900: '#7A271A',
      },
      'shades': {
        'white': '#FFFFFF',
        'black': '#000000',
      }
    }
  },
  plugins: []
}
