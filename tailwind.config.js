/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  colors: {
    primary: "var(--color-primary)",
    secundary: "var(--color-white)",
  },
  plugins: [tailwindcssAnimate],
};
