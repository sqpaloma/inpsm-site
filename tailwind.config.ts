import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071F40",
        inst: "#082651",
        blue: "#02428F",
        green: "#77B319",
        mist: "#EAF0F6",
        light: "#F4F7FA",
      },
      fontFamily: {
        sans: ['"Gotham Rounded"', "Aptos", "var(--font-sans)", "system-ui", "sans-serif"],
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
