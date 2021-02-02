module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        100: '#F7F9FA',
        200: '#DFEAED',
        400: '#627D85',
        700: '#2C4A52',
        900: '#0A1A1F',
      },
    },
    fontFamily: {
      sans: ['Cairo', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
