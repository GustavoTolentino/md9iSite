/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        gray: {
          100: 'rgba(0, 0, 0, 0.16)',
          200: '#C8C8C8',
          300: 'rgba(0, 0, 0, 0.41)',
          400: '#706D6E',
          600: '#0A0A0A',
          700: '#121212',
          800: '#989898',
        },
        blue: {
          100: '#00E6E6',
          200: '#00ADEF',
          300: '#4B82E1',
          400: '#0069A1',
          500: '#032F56',
          600: '#0588FE'
        },
        yellow: {
          100: '#FFF046',
          200: '#ECE912',
          300: '#E8FF00',
          400: '#F8D10D'
        },
        orange: {
          100: '#FBBC09',
          200: '#FC9002',
          300: '#C4122E',
          400: '#F50000',
          500: '#F95302'
        },
        green: {
          100: '#9DEC12',
          200: '#80CC28',
          300: '#4A9F00',
          400: '#30BA78',
          500: '#00C85F',
          600: '#01BAB1',
          700: '#E8FF00'
        }


      }

    },
    fontFamily: {
      'rale': ['Raleway'],
      'roboto': ['Roboto'],
      'tilium': ['Titillium Web']
    },
  },
  plugins: [],
}
