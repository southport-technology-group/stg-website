module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        100: '#F7FFFF',
        200: '#CAE6E4',
        400: '#5CA2A7',
        700: '#00656F',
        900: '#003D44',
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
