import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071F40",
          mid: "#0B2550",
        },
        blue: {
          DEFAULT: "#024290",
          bright: "#1A6AD4",
        },
        green: {
          DEFAULT: "#77B319",
          dim: "#5A8A12",
        },
        inst: "#082651",
        mist: "#ECF0F6",
        light: "#F6F8FB",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
