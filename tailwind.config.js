module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#14B1FF',
        calltoaction: '#fbbf24',
        calltoactiondark: '#D34419',
        accent: '#E74C3C',
        success: '#3cc13b',
        warning: '#f3bb1c',
        error: '#f03738',
        background: '#F7FBFC',
        divider: '#091b34',
        accentdark: '#0C6B77',
        surface: '#F7FBFC',
        calltoactiontext: '#fffaf9',
        accenttext: '#15bfd3',
        successtext: '#3cc13b',
        errortext: '#f03738',
        warningtext: '#f3bb1c'
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