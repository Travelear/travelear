module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackpearl: '#0D1319',
        cinnabar: '#E74C3C',
        mandarianorange: '#9A2216',
        moonyellow: '#fbbf24',
        darkgoldenrod: '#C99100',
        earlydawn: '#FFF6E0',
        deepskyblue: '#14B1FF',
        bluelagoon: '#0C6B77',
        irisblue: '#15bfd3',
        success: '#3cc13b',
        successtext: '#3cc13b',
        warning: '#f3bb1c',
        warningtext: '#f3bb1c',
        error: '#f03738',
        errortext: '#f03738',
        divider: '#091b34',
        surface: '#F7FBFC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}