module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0D1117",
        darkDeep: "#010409",
      },
      boxShadow: {
        white: "0px 4px 6px rgba(255, 255, 255, 0.5)",
        whiteRounded: "0px 0px 15px rgba(255, 255, 255, 1)",
      },
      clipPath: {
        hexagon:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      },
    },
  },
  plugins: [],
};
