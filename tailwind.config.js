/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Outfit'", "sans-serif"],
      },
      colors: {
        bg: "#020b18",
        surface: "#061426",
        card: "#0a1e35",
        accent: "#00d2ff",
        accent2: "#0094b8",
        gold: "#f0c060",
        muted: "#5a8aaa",
        green: "#00e5a0",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        spin_slow: "spin 25s linear infinite",
        pulse_slow: "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        breathe: {
          "0%,100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
