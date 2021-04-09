const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      explored: '#E74C3C',
      travello: '#fbbf24',
      cloudwhite: '#F7FBFC',
      oceanblue: '#14B1FF',
      nightblue: '#1C2833'
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
      explored: '#E74C3C',
      travello: '#fbbf24',
      cloudwhite: '#F7FBFC',
      oceanblue: '#14B1FF',
      nightblue: '#1C2833'
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      explored: '#E74C3C',
      travello: '#fbbf24',
      cloudwhite: '#F7FBFC',
      oceanblue: '#14B1FF',
      nightblue: '#1C2833'
     }),
    textColor: (theme) => ({
      ...theme('colors'),
      explored: '#E74C3C',
      travello: '#fbbf24',
      cloudwhite: '#F7FBFC',
      oceanblue: '#14B1FF'
      ,
      nightblue: '#1C2833'
    }),
    fontFamily:{
      departures: ["Share", "normal"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}