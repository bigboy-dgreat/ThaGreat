/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        san: ['Roboto', 'San-serif'],
        favorit: ['Favorit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      gridTemplateColumns: {
        '70/30' : '70/28%',

      },
      keyframes: {
        appear: {
          '0%': {
            opacity: 0,
            clipPath: 'inset(100% 100% 0 0)',
          },
          '100%': {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
          },
        },
      },
      animation: {
        appear: 'appear 1s ease-out',
      },

      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            clipPath: 'inset(100% 100% 0 0)',
          },
          '100%': {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
          },
        },
      },
    
    },
  },
  plugins: [],
}

