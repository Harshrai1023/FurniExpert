const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary:"#1b1f24",
      secondary: "#A3A380",
      accent: "#3B5D50",
      neutral: "#131318",
      "base-100": "#EFF2F1",
      info: "#66c7ff",
      success: "#66cc8a",
      warning: "#e1d460",
      error: "#ff6b6b",
      
      "color-1":"#EFEBCE",
      "color-2":"#6A6A6A",
      "color-3":"#2F2F2F",

      "card-1":"#35736E1A",
      "card-2":"#6A6A6A4D",
      "card-3":"#35736E4D",
    },

    extend: {},
  },
  plugins: [],
});
