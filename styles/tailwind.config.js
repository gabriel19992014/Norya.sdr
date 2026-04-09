/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        norya: {
          ink: "#071722",
          tide: "#0a7a8c",
          sand: "#f6b35d",
          mist: "#f3f8f9",
          slate: "#32515a"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 14px 40px -20px rgba(7, 23, 34, 0.35)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 700ms ease-out both"
      }
    }
  },
  plugins: []
};
