/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2B1E14",
        rust: "#C1502B",
        paper: "#F2EFE7",
        charcoal: "#26282B",
        brass: "#C17A3E",
        steel: "#8A7B6C",
      },
      fontFamily: {
        display: ["Zilla Slab", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
