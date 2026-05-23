/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Libre Baskerville",
          "Noto Serif SC",
          "Georgia",
          "Songti SC",
          "SimSun",
          "serif",
        ],
        serif: [
          "Fraunces",
          "Noto Serif SC",
          "Georgia",
          "Songti SC",
          "SimSun",
          "serif",
        ],
        display: [
          "Fraunces",
          "Noto Serif SC",
          "Georgia",
          "Songti SC",
          "SimSun",
          "serif",
        ],
      },
      colors: {
        ink: "#021024",
        paper: "#f6fbff",
        mist: "#d8ecfa",
        graphite: "#052659",
        ember: "#052659",
        honey: "#C1E8FF",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(2, 16, 36, 0.14)",
      },
    },
  },
  plugins: [],
};
