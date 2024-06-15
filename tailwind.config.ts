import type {Config} from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
        primary: {
          first: "#000814",
          second: "#212529",
        },
        accent: {
          primary: "#FF6F61",
          secondary: "#4CAF50",
        },
        link: "#1E88E5",
        button: "#FF5722",
        border: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
export default config;
