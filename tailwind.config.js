export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        primaryHover: "#4f46e5",

        bg: "#0f172a",        // main background
        card: "#1e293b",      // cards
        border: "#334155",
        text: "#e2e8f0",
        muted: "#94a3b8",

        danger: "#ef4444"
      }
    },
  },
  plugins: [],
};