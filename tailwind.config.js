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
      'display': ['var(--font-josefin-slab)', 'serif'],
      'body': ['var(--font-titillium-web)', 'sans-serif'],
      'mono': ['var(--font-space-mono)', 'monospace']
    },
    extend: {
      height: {
        'half-screen': '50vh'
      },
      backgroundImage: {
        'backgroundNoise' : "url('../public/bg_noise.png'), linear-gradient(to bottom, #18181b, #18181b)",
        'foregroundNoise' : "url('../public/bg_noise.png'), linear-gradient(to bottom, #27272a, #18181b)",
      }
    }
  },
  plugins: [],
}