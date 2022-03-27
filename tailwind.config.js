module.exports = {
  purge: ["./**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeBottom: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn : {
          "0%": { opacity: 0},
          "100%": { opacity: 1 },
        },
        side: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      height: {
        startup: "100vh",
      },
      width: {
        144: "30rem",
      },
      animation: {
        fade: "fade 1.5s ease-out",
        fadeBottom: "fadeBottom 1.5s ease-out",
        fadeIn: "fadeIn 1.5s ease-in",
      },
      fontSize: {
        title: "2.9rem",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      textShadow: {
        black: "1px 1px black",
        white: "1px 1px grey",
        title: "4px 4px black",
      },
      ringWidth: {
        3: "3px",
      },
      colors: {
        "zn-50": "#fafafa",
        "zn-100": "#f4f4f5",
        "zn-200": "#e4e4e7",
        "zn-300": "#d4d4d8",
        "zn-400": "#a1a1aa",
        "zn-450": "#8e8e93",
        "zn-500": "#71717a",
        "zn-600": "#52525b",
        "zn-700": "#3f3f46",
        "zn-800": "#27272a",
        "zn-900": "#18181b",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
