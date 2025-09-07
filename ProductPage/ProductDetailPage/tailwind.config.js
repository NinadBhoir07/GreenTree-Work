/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff8f8f", // main brand pink
          dark: "#c45b5b",   // optional darker shade
          light: "#ffb3b3",  // optional lighter shade
        },
        secondary: {
          DEFAULT: "#CA8787", // secondary brand
          dark: "#a86f6f",    // optional darker shade
          light: "#d9a3a3",   // optional lighter shade
        },
        gray: {
          light: "#f3f4f6",   // gray-100
          DEFAULT: "#9ca3af", // gray-400
          dark: "#374151",    // gray-700
        },
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
