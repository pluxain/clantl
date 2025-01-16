/** @type {import('tailwindcss').Config} */
import colors, { black, inherit, transparent, white } from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{html,ts,tsx,vue}"],
  theme: {
    colors: {
      black,
      danger: {
        accent: colors.red[300],
        DEFAULT: colors.red[500],
        solid: colors.red[50],
      },
      info: {
        accent: colors.cyan[300],
        DEFAULT: colors.cyan[500],
        solid: colors.cyan[50],
      },
      inherit,
      lcnmqt: {
        primary: "#19B0F2",
        secondary: "#333333",
      },
      primary: {
        accent: colors.blue[300],
        DEFAULT: colors.blue[500],
        solid: colors.blue[50],
      },
      secondary: {
        accent: colors.gray[300],
        DEFAULT: colors.gray[500],
        solid: colors.gray[50],
      },
      success: {
        accent: colors.green[300],
        DEFAULT: colors.green[500],
        solid: colors.green[50],
      },
      transparent,
      warning: {
        accent: colors.orange[300],
        DEFAULT: colors.orange[500],
        solid: colors.orange[50],
      },
      white,
    },
    extend: {},
  },
  plugins: [],
};
