/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        blacktheme: {
          primary: "#ffffff",
          secondary: "#ffffff",
          accent: "#ffffff",
          neutral: "#333333",
          "base-100": "#000000",
          "base-200": "#000000",
          "base-300": "#000000",
        },
      },
    ],
  },
};
