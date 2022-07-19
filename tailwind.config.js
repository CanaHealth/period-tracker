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
        primary: {
          DEFAULT: '#8ebfe3',
          50: '#f5f9f9',
          100: '#e1f1fa',
          200: '#bfdff4',
          300: '#8ebfe3',
          400: '#5b9acd',
          500: '#4578b7',
          600: '#385d9e',
          700: '#2d457b',
          800: '#202f57',
          900: '#131d38',
        },

        secondary: {
          DEFAULT: '#7ec7bd',
          50: '#f3f7f6',
          100: '#def0f1',
          200: '#b5e4e0',
          300: '#7ec7bd',
          400: '#3fa593',
          500: '#2d886c',
          600: '#267053',
          700: '#215541',
          800: '#183a30',
          900: '#102322',
        },
        accent: {
          DEFAULT: '#f3d6b8',
          50: '#fcfaf7',
          100: '#f9efdc',
          200: '#f3d6b8',
          300: '#e2af86',
          400: '#d28258',
          500: '#bb6138',
          600: '#9e4625',
          700: '#7a351e',
          800: '#552416',
          900: '#36170e',
        },
        neutral: {
          DEFAULT: '#13151A',
          50: '#f9faf9',
          100: '#eff1f3',
          200: '#dadfe4',
          300: '#b3bdc5',
          400: '#83959d',
          500: '#657278',
          600: '#51575a',
          700: '#3e4144',
          800: '#2a2c2f',
          900: '#191a1e',
        },

        base: {
          DEFAULT: '#ffffff',
          50: '#FFFFFF',
          100: '#FCFCFD',
          200: '#E6E8EA',
          300: '#CFD3D8',
          400: '#B9BFC6',
          500: '#A2AAB3',
          600: '#848E9A',
          700: '#67727E',
          800: '#4E565F',
          900: '#353A41',
        },

        info: {
          DEFAULT: '#507399',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F0F7FB',
          300: '#CFE4F3',
          400: '#AFD2EB',
          500: '#8EBFE3',
          600: '#61A6D8',
          700: '#348CCD',
          800: '#286EA1',
          900: '#1D4F74',
        },
        success: {
          DEFAULT: '#3fa593',
          50: '#FEFFFF',
          100: '#F0F8F7',
          200: '#D3ECE9',
          300: '#B7E0DA',
          400: '#9AD3CC',
          500: '#7EC7BD',
          600: '#57B6A9',
          700: '#409489',
          800: '#2F6D65',
          900: '#1E4641',
        },

        warning: {
          DEFAULT: '#e2af86',
          50: '#FAEDE0',
          100: '#F8E8D8',
          200: '#F5DEC6',
          300: '#F2D4B5',
          400: '#F0CAA3',
          500: '#EDC092',
          600: '#E9B37C',
          700: '#E5A766',
          800: '#E29A50',
          900: '#DE8E3B',
        },

        error: {
          50: '#fcfbfa',
          100: '#f9f0f0',
          200: '#f4d1e1',
          300: '#e6a6c0',
          400: '#de789b',
          500: '#cd547b',
          600: '#b33a5c',
          700: '#8b2b43',
          800: '#621e2d',
          900: '#3b1319',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
