/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000", // Set background to black
        white: "#ffffff", // Text color (white on black)
        gray: "#333333", // Slight gray for secondary elements (optional)
        // Add more colors as necessary
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        blacktheme: {
          primary: "#ffffff", // White text or elements
          secondary: "#ffffff", // White secondary text
          accent: "#ffffff", // Accent color (optional)
          neutral: "#333333", // Slightly lighter background or elements (optional)
          "base-100": "#000000", // Main background set to black
          "base-200": "#000000", // Darker section background (optional)
          "base-300": "#000000", // Even darker sections (optional)
        },
      },
    ],
  },
};
