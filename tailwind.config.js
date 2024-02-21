/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#202023",
        secondary: "#a6bec3",
        tertiary: "#313134",
        main: "#262626",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#EDEDED",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        "1/2": "50%",
        "3/4": "75%",
        // Add other percentage values as needed
      },
    },
  },
  plugins: [],
};
