module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        'max': '9999',
      },
      fontFamily: {
        cinzel: ["cinzel", "sans-serif"]
      },
      animation: {
        'rotate-rays': 'rotate-rays 3s linear infinite',
      },
      animation: {
        rotate: 'rotate 9s linear infinite',
        
      },
      keyframes: {
        'rotate-rays': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    }
  },
  plugins: [],
}