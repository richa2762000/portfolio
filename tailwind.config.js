/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
    variants: {
      extend: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
    keyframes: {
      slideRight: {
        '0%': {
          transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      imgLeft: {
        '0%': {
          // transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(-100%)',
        },
      },
    },
    animation: {
      slideRight: 'slideRight 4s linear infinite',
      imgLeft : 'imgLeft 4s linear infinite'
    },
  },
  plugins: [],
};
