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
      wider: '0.04em',
    },
    fontFamily: {
      'display': ['"Josefin Slab"'],
      'body': ['"Titillium Web"'],
      'mono': ['"Space Mono"']
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: [],
}