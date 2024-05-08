/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colors-green-300": "#86efac",
        "text-colors-dark-gray": "#111827",
        "text-colors-amber": "#f59e0b",
        "bg-colors-white": "#fff",
        "colors-gray-300": "#d1d5db",
        black: "#000",
        "colors-blue-300": "#93c5fd",
        "colors-slate-300": "#cbd5e1",
        "text-colors-gray": "#404040",
        "colors-red-300": "#fca5a5",
        "colors-slate-50": "#f8fafc",
      },
      spacing: {},
      fontFamily: {
        "headings-heading-4": "NanumGothic",
        "body-text-small-text": "'Noto Sans KR'",
      },
    },
    fontSize: {
      "17xl": "2.25rem",
      "11xl": "1.875rem",
      base: "1rem",
      xs: "0.75rem",
      "29xl": "3rem",
      sm: "0.875rem",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "640px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
