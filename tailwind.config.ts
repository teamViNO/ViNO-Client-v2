import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "gray-500": "#1E1E1E",
        "gray-400": "#787878",
        "gray-300": "#BBBBBB",
        "gray-200": "#E8E8E8",
        "gray-100": "#F3F3F3",
        "green-600": "#BCDB00",
        "green-500": "#DFFF00",
        "green-400": "#E9FF3F",
        "green-300": "#EFFF66",
        "green-200": "#F6FF99",
        "green-100": "#FBFFCC",
        red: "#FF4A4A",
        success: "#3681FE",
      },
    },
  },
  plugins: [],
};
export default config;
