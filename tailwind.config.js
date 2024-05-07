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
        "bg-colors-light-gray": "#fafafa",
        "text-colors-amber": "#f59e0b",
        black: "#000",
        "slate-300": "#cbd5e1",
        "text-colors-gray": "#404040",
        "colors-slate-50": "#f8fafc",
        "text-colors-dark-gray": "#111827",
      },
      spacing: {},
      fontFamily: {
        "headings-headling-2": "'Do Hyeon'",
        "body-text-normal-text": "'Noto Sans KR'",
      },
    },
    fontSize: {
      "17xl": "2.25rem",
      base: "1rem",
      xs: "0.75rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
      sm: "0.875rem",
      inherit: "inherit",
    },
    screens: {
      mq640: {
        raw: "screen and (max-width: 640px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
