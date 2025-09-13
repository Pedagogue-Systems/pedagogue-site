import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8200",     // Tennessee Orange
        "primary-600": "#E57500",
        "primary-700": "#C66600",
        smokey: "#58595B",      // Smokey Gray
        coal: "#2F3133",
      },
      borderRadius: {
        xl: "0.8rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
