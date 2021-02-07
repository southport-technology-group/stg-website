module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        100: '#F2F7FA',
        200: '#EBF2F5',
        400: '#A3BECC',
        700: '#1F4E66',
        900: '#0C3245',
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
