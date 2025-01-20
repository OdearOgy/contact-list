/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["IBM Plex Mono", "Menlo", "monospace"],
      body: ["IBM Plex Mono", "Menlo", "monospace"],
    },
    colors: {
      primary: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      neutral: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },
      danger: {
        50: "hsl(0,75%,98.43%)",
        100: "hsl(0,70.37%,94.71%)",
        200: "hsl(0,67.35%,90.39%)",
        300: "hsl(0,69.01%,86.08%)",
        400: "hsl(0,68.93%,79.8%)",
        500: "hsl(0,68.71%,71.18%)",
        600: "hsl(0,69.15%,60.59%)",
        700: "hsl(0,65.46%,48.82%)",
        800: "hsl(0,65.22%,40.59%)",
        900: "hsl(0,65.1%,29.22%)",
      },
    },
  },
  plugins: [],
};
