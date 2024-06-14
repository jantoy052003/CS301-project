/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'idle' : '#e0e0e0',
        'navbar': '#b25b1a',
        'tomato': '#ff6347',
      },
      gridTemplateColumns: {
        '16': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}

