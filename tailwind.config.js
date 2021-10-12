module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      blue: {
        100: "#F2F6F7",
        200: "#E4ECF0",
        400: "#99B4C4",
        700: "#004D6E",
        900: "#012E40",
      },
    },
    fontFamily: {
      sans: ["Cairo", "sans-serif"],
      serif: ["serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
