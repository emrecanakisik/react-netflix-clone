/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        NetflixRed: "#E50914",
        errorRed: "#E87C03",
        smallTextGray: "#8C8C8C",
        inputHoverGray: "#454545",
        accordionBgGray: "#2D2D2D",
        inputGray: "#333333",
        NetflixMidGray: "#737373",
        NetflixWarning: "#E87C03",
      },
      height: { 737: "737px" },
      fontFamily: {
        netflixSans: "'Netflix Sans', 'serif'",
      },
    },
  },
  plugins: [],
};
