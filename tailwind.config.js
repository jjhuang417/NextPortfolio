module.exports = {
  content: [
    "./pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#BB86FC',
      'variant': '#3700B3',
      'secondary': '#03DAC6',
      'background': '#121212',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
