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
        blue: { 63: '#5f62e4', 81: '#afbef1', 87: '#dcd9e3', 93: '#e7edf8' },
        electric_cyan: { 81: '#b8dee9', 91: '#d8fcfc', 95: '#eff4f9' },
        gray: {
          59: '#949799',
          72: '#b7bcba',
          98: '#f8fafc',
          99: '#fcfcfd',
          '99_': '#feffff',
        },
        flow: { heavy: '#FD9AA7', average: '#FCCCD3', light: '#FCE5E8' },
        primary: {
          dark: '#5f62e4',
          mid: '#afbef1',
          light: '#e7edf8',
        },
        secondary: {
          dark: '#b8dee9',
          mid: '#d8fcfc',
          light: '#eff4f9',
        },
      },


      animation: {
        blob: 'blob 7s infinite',
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
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
