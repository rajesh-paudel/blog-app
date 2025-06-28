import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Optional: Add custom theme extensions here
      colors: {
        // Example: custom primary color
        primary: {
          DEFAULT: "#4f46e5", // Indigo-600
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
};

export default config;
