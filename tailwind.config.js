/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-colors-white": "#fff",
        black: "#000",
        "colors-slate-300": "#cbd5e1",
        "text-colors-gray": "#404040",
        "colors-slate-50": "#f8fafc",
        "colors-green-300": "#86efac",
        "colors-blue-300": "#93c5fd",
        "colors-red-300": "#fca5a5",
        "text-colors-dark-gray": "#111827",
        "text-colors-amber": "#f59e0b",
        "button-colors-dark-sky": "#0369a1",
        royalblue: "#094db2",
        "dark-gray": "#334158",
        "colors-slate-950": "#020617",
        "colors-slate-500": "#64748b",
        "bg-colors-light-gray": "#fafafa",
        gray: "#676f82",
      },
      spacing: {
        "spacing-2": "8px",
      },
      fontFamily: {
        "headings-headling-2": "NanumGothic",
        "sub-main-title": "'Nanum Gothic'",
        "body-text-small-text": "'Noto Sans KR'",
      },
    },
    fontSize: {
      "17xl": "2.25rem",
      sm: "0.875rem",
      base: "1rem",
      "29xl": "3rem",
      xs: "0.75rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
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
