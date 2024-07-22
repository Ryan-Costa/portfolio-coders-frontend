/** @type {import('tailwindcss').Config} */

import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "480px",
        xs: "524px",
        mdx: "920px",
      },
      colors: {
        "red-c1": "var(--red-c1)",
        "red-c2": "var(--red-c2)",
        "primary-rgba": "var(--color-primary-rgba)",
        text: "var(--color-text)",
        "tx-hobby": "var(--tx-hobby)",
        background: "var(--color-background)",
        "bg-hero": "var(--color-bg-hero)",
      },
      fontSize: {
        "title-sm": "2.25rem",
        "title-md": "2.5rem",
        "title-lg": "2.75rem",
        "subtitle-md": "1.5rem",
        "subtitle-lg": "1.75rem",
        "normal-sm": "1rem",
        "normal-md": "1.125rem",
        "normal-lg": "1.25rem",
        clamp: "clamp(12px, 3vw, 18px)",
        clamp2: "clamp(34px, 6vw, 74px)",
      },
      fontFamily: {
        sans: ['"Source Sans 3"', "sans-serif"],
      },
      width: {
        content: "max-content",
        clamp: "clamp(48px, 5vw, 80px)",
      },
      height: {
        clamp: "clamp(48px, 5vh, 80px)",
      },
      boxShadow: {
        soft: "0px 0px 2px 0px rgba(229, 57, 57, 0.80) inset",
        shape:
          "0px 8px 8px rgba(0,0,0,0.1), 0px 4px 4px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      backgroundColor: {
        hobby: "rgba(17, 17, 17, 0.80)",
      },
      backgroundImage: {
        pattern: 'url("/bg.png")',
        "gradient-radial":
          "url('/bg.png'), linear-gradient(0deg, rgba(17, 17, 17, 0.09) 0%, rgba(229, 57, 57, 0.09) 19.85%, rgba(229, 57, 57, 0.09) 79.67%, rgba(17, 17, 17, 0.09) 100%)",
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
        scroll: {
          "100%": {
            transform: "translateX(calc(-50% - 20px))",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-in-from-left": "slideInFromLeft 2s forwards",
        "slide-in-from-right": "slideInFromRight 2s forwards",
        scroll: "scroll 10s linear infinite",
        paused: "animation-play-state: paused",
        running: "animation-play-state: running",
      },
      // animationPlayState: {
      //   paused: "paused",
      //   running: "running",
      // },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
export default config;
