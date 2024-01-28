module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#f0f0f3",
          100: "#d0d0d0",
          200: "#b1b1bd",
          500: "#777792",
          900: "#32323e",
        },
        red: { 400: "#eb5757", 600: "#f12b2b", A700: "#ff0000" },
        green: { 700: "#219653" },
        gray: {
          50: "#fafafa",
          100: "#f4f4f6",
          200: "#e8e8ed",
          300: "#e3e3e3",
          400: "#bbbbc7",
          500: "#919191",
          900: "#121212",
          "100_99": "#f4f4f699",
          "100_01": "#f3f3f5",
          "200_99": "#e8e8ed99",
        },
        teal: { 50: "#d9f6e5", 500: "#0f9d8e", "500_19": "#0e9d8f19" },
        black: { 900: "#000000" },
        yellow: { 900: "#f1722b", "900_19": "#f1722b19" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", zonapro: "Zona Pro" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
