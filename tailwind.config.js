/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        90: "90%",
      },
      width: {
        90: "90%",
      },
      colors: {
        NetflixRed: "#E50914",
        errorRed: "#E87C03",
        smallTextGray: "#8C8C8C",
        inputHoverGray: "#454545",
        accordionBgGray: "#2D2D2D",
        inputGray: "#333333",
        NetflixMidGray: "#737373",
        NetflixBlack: "#141414",
        NetflixWarning: "#E87C03",
        transparentGray07: "rgba(109, 109, 110, 0.7)",
        blackOp60: "rgba(0,0,0,0.6)",
        grayOp60: "rgba(51, 51, 51, 0.6)",
        E5: "#e5e5e5",
        B3: "#B3B3B3",
      },
      height: { 737: "737px" },
      fontFamily: {
        netflixSans: "'Netflix Sans', 'serif'",
      },
      dropShadow: {
        "sha2-2-4-45": "2px 2px 4px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};
