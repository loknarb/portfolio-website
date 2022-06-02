module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'phone': '480px',
      'tablet': '768px',
      'desktop': '1280px',
    },
    letterSpacing: {
      tight: '-.015em',
      wide: '0.025em',
      wider: '0.07em',
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: [],
}