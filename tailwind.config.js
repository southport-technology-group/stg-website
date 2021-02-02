module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        100: '#F9FCFE',
        200: '#F5F4F0',
        400: '#B0C7CF',
        700: '#0C3E4F',
        900: '#032936',
      },
      red: {
        400: '#FF8081',
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
