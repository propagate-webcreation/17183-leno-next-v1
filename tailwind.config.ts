import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0B1C3D",
        base: "#FFFFFF",
        accent: "#2563EB",
        text: "#0B1C3D"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.035em"
      },
      boxShadow: {
        "card-lift": "0 24px 48px -24px rgba(11, 28, 61, 0.2)",
        "card-soft": "0 8px 24px -12px rgba(11, 28, 61, 0.12)"
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.15)" }
        }
      },
      animation: {
        pulseDot: "pulseDot 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
