/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tfp: {
          navy: "#0f1e3d",
          navyLight: "#1a2f5c",
          orange: "#e8631a",
          orangeLight: "#ff7a33",
          gray: "#f1f3f6",
          border: "#dde3ed",
          text: "#1a2332",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
