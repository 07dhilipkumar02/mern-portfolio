/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e12",
        panel: "#10151b",
        border: "#1e2730",
        primary: "#22c55e",
        primaryDark: "#16a34a",
      },
    },
  },
  plugins: [],
};
