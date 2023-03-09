/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        NetflixRed: "#E50914",
      },
      height: { 737: "737px" },
      fontFamily: {
        netflixSans: "'Netflix Sans', 'serif'",
      },
    },
  },
  plugins: [],
};
