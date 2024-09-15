/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xll': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xll': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},

      'xsmm': {'max': '380px'},

      'xmm': {'max': '350px'}
      
    },
    fontFamily: {
      Lato: 'Lato", sans-serif',
      Urbanist: 'Urbanist", sans-serif',
      Lexend: '"Lexend", sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

