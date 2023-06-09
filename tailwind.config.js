/** @type {import('tailwindcss').Config} */
const gridLineColor = "#f0f0f00f";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          250: "#FFF1F1",
          500: "#FFDCDC",
          750: "#FF2A2C",
          default: "#EB1012"
        },
        gray: {
          250: "#F2F2F2",
          500: "#D9D9D9",
          750: "#AEAEAE",
          default: "#9D9A9A"
        }
      },
      backgroundImage: {
        "grid-paper": `linear-gradient(0deg, transparent calc(100% - 1px), ${gridLineColor} calc(100% - 1px)), linear-gradient(90deg, transparent calc(100% - 1px), ${gridLineColor} calc(100% - 1px))`,
        "border-gradient": "radial-gradient(at left top,#71717a,50px,#27272a 50%)"
      },
    },
  },
  plugins: [],
};
