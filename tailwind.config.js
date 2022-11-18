/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#1c2128",
      secondary: "#22272e",
      primary: "#2d333b",
      highlight: "#42474f",
      bright: "#cdd9e5",
      muted: "#768390",
      transparent: "#00000000",
    },
  },
  plugins: [],
};
