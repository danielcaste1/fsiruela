/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      blue: {
        500: "#0A60FF",
        600: "#3B7FFF",
        700: "#6B9FFE",
        800: "#9CBEFE",
        900: "#CCDEFD",
      },
      rose: {
        500: "#FF206E",
        600: "#FF4C8B",
        700: "#FE78A7",
        800: "#FEA5C4",
        900: "#FDD1E0",
      },
      indigo: {
        500: "#5700A8",
        600: "#7833B9",
        700: "#9965CA",
        800: "#BB98DB",
        900: "#DCCAEC",
      },
      aquamarine: {
        500: "#7CFFC4",
        600: "#96FFCF",
        700: "#B0FEDB",
        800: "#C9FEE6",
        900: "#E3FDF2",
      },
      jonquil: {
        500: "#FFCF01",
        600: "#FFD833",
        700: "#FEE166",
        800: "#FEEB98",
        900: "#FDF4CB",
      },
      calabaza: {
        500: "#FF8133",
        600: "#FF9A5B",
        700: "#FEB384",
        800: "#FECBAC",
        900: "#FDE4D5",
      },
      white: "#FDFDFD",
      black: "#252525",
      gray: "#868686",
      "brand-black": "#121212",
      "brand-gray": "#9D9D9D",
    },
    fontFamily: {
      mitr: ["Mitr", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
