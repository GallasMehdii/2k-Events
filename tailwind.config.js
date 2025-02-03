module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Sans-serif"],
        serif: ["Playfair Display", "Serif"],
        script: ["Great Vibes", "Cursive"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          300: "#D3D3D3",
          400: "#A9A9A9",
        },
      },
    },
  },
  plugins: [],
};
