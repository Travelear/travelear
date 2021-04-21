module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0D1319', // dark blue
        primarylight: '#1C2833', // medium blue
        secondary: '#E74C3C', // red
        secondarydark: '#9A2216', // dark red
        calltoaction: '#fbbf24',
        calltoactiondark: '#C99100',
        calltoactiontext: '#FFF6E0',
        accent: '#14B1FF',
        accentdark: '#0C6B77',
        accenttext: '#15bfd3',
        success: '#3cc13b',
        successtext: '#3cc13b',
        warning: '#f3bb1c',
        warningtext: '#f3bb1c',
        error: '#f03738',
        errortext: '#f03738',
        divider: '#091b34',
        background: '#FFFFFF',
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