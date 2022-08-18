/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        flow: { heavy: '#FD9AA7', average: '#FCCCD3', light: '#FCE5E8' },

        primary: {
          dark: '#5f62e4',
          DEFAULT: '#afbef1',
          light: '#e7edf8',
        },
        secondary: {
          dark: '#b8dee9',
          DEFAULT: '#d8fcfc',
          light: '#eff4f9',
        },

        gray: {
          dark: {
            dark: '#131921',
            DEFAULT: '#1f2937',
            light: '#949799',
          },
          mid: {
            dark: '#a8aaab',
            DEFAULT: '#d2d4d6',
            light: '#dbddde',
          },
          light: {
            dark: '#f8fafc',
            DEFAULT: '#fcfcfd',
            light: '#feffff',
          },
        },



      },

      animation: {
        blob: 'blob 7s infinite',
        showScroll: 'showScroll 1s ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, 20px) scale(1.05)',
          },
          '66%': {
            transform: 'translate(-20px, -20px) scale(0.95)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        showScroll: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', },
          '33%': { transform: 'translate(0px, 50px) scale(1)', },
          '66%': { transform: 'translate(0px, 0px) scale(1)', },
          '80%': { transform: 'translate(0px, 3px) scale(1)', },
          '100%': { transform: 'translate(0px, 0px) scale(1)', },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
