/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
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
          100: '#eff2fc',
          200: '#dfe5f9',
          300: '#cfd8f7',
          400: '#bfcbf4',
          500: '#afbef1',
          600: '#8c98c1',
          700: '#697291',
          800: '#464c60',
          900: '#232630',
        },
        secondary: {
          100: '#dfe0fa',
          200: '#bfc0f4',
          300: '#9fa1ef',
          400: '#7f81e9',
          500: '#5f62e4',
          600: '#4c4eb6',
          700: '#393b89',
          800: '#26275b',
          900: '#13142e',
        },
        accent: {
          100: '#f7fefe',
          200: '#effefe',
          300: '#e8fdfd',
          400: '#e0fdfd',
          500: '#d8fcfc',
          600: '#adcaca',
          700: '#829797',
          800: '#566565',
          900: '#2b3232',
        },
        warning: {
          100: '#ffebed',
          200: '#fed7dc',
          300: '#fec2ca',
          400: '#fdaeb9',
          500: '#fd9aa7',
          600: '#ca7b86',
          700: '#985c64',
          800: '#653e43',
          900: '#331f21',
        },

        gray: {
          100: '#f6f6f7',
          200: '#edeeef',
          300: '#e4e5e6',
          400: '#dbddde',
          500: '#d2d4d6',
          600: '#a1a3a6',
          700: '#71757a',
          800: '#42474d',
          900: '#131921',
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
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(0px, 50px) scale(1)' },
          '66%': { transform: 'translate(0px, 0px) scale(1)' },
          '80%': { transform: 'translate(0px, 3px) scale(1)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
