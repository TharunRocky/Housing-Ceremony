import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        telugu: ["Tiro Telugu", "serif"],
        body: ["Lora", "serif"],
      },
      colors: {
        paper: "#FFFBF0",
        ink: "#3A1B14",
        kumkum: "#8B1E0F",
        gold: "#D4AF37",
        marigold: "#F58220",
        turmeric: "#FACC15",
        sand: "#F3E8DB",
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 1s ease-out both",
        "slow-spin": "slow-spin 80s linear infinite",
        flicker: "flicker 2.6s ease-in-out infinite",
      },
      keyframes: {
  "fade-up": {
    from: { opacity: "0", transform: "translateY(20px)" },
    to: { opacity: "1", transform: "translateY(0)" }
  },
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" }
  },
  "slow-spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  flicker: {
    "0%, 100%": { opacity: "0.95", transform: "scale(1)" },
    "50%": { opacity: "0.75", transform: "scale(1.04)" }
  }
}
    },
  },
  plugins: [tailwindcssAnimate],
};