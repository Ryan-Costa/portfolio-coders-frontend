/** @type {import('tailwindcss').Config} */

import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-rgba": "var(--color-primary-rgba)",
        text: "var(--color-text)",
        background: "var(--color-background)",
        "bg-hero": "var(--color-bg-hero)",
      },
      fontFamily: {
        sans: "Inter",
      },
      boxShadow: {
        shape:
          "0px 8px 8px rgba(0,0,0,0.1), 0px 4px 4px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      backgroundImage: {
        pattern: 'url("/bg.png")',
      },
      transitionDuration: {
        "2000": "2000ms",
      },
      animationDelay: {
        "1600": "4000ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-in-from-left": "slideInFromLeft 2s forwards",
        "slide-in-from-right": "slideInFromRight 2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
export default config;
