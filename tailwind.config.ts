import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "#EC939F",
        customPink2: "#C594AA",
      },
      textShadow: {
        pink: "3px 3px 5px #EC939F",
      },
    },
  },
  plugins: [],
} satisfies Config;
