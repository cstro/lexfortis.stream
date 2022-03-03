module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['"Bebas Neue"', 'cursive'],
      'body': ['"Open Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
