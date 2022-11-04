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
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: '512px',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        flow: { heavy: '#FD9AA7', average: '#FCCCD3', light: '#FCE5E8' },
        brand: {
          100: "#e0e0f1",
          200: "#c2c2e2",
          300: "#a3a3d4",
          400: "#8585c5",
          500: "#6666b7",
          600: "#525292",
          700: "#3d3d6e",
          800: "#292949",
          900: "#141425"
        },
        secondary: {
          100: "#fcf6f7",
          200: "#f9ecef",
          300: "#f7e3e7",
          400: "#f4d9df",
          500: "#f1d0d7",
          600: "#c1a6ac",
          700: "#917d81",
          800: "#605356",
          900: "#302a2b"
        },
        accent: {
          100: "#cef4d9",
          200: "#9de9b4",
          300: "#6ddf8e",
          400: "#3cd469",
          500: "#0bc943",
          600: "#09a136",
          700: "#077928",
          800: "#04501b",
          900: "#02280d"
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
          '33%': { transform: 'translate(0px, 5px) scale(1)' },
          '66%': { transform: 'translate(0px, 0px) scale(1)' },
          '80%': { transform: 'translate(0px, 1px) scale(1)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require("flowbite/plugin")],

}
