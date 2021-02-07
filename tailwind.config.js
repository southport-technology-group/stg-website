module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        100: '#f2f6f7',
        200: '#e4ecf0',
        400: '#99b6c5',
        700: '#00486d',
        900: '#002b41',
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
