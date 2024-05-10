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
        "text-colors-normal": "#030712",
        "text-colors-amber": "#f59e0b",
        "bg-colors-white": "#fff",
        black: "#000",
        "colors-gray-300": "#d1d5db",
        "colors-indigo-300": "#a5b4fc",
        "text-colors-gray": "#404040",
        "colors-blue-300": "#93c5fd",
        "colors-slate-300": "#cbd5e1",
        "colors-red-300": "#fca5a5",
        "bg-colors-light-gray": "#fafafa",
        "button-colors-dark-sky": "#0369a1",
        "colors-slate-50": "#f8fafc",
        "text-colors-dark-gray": "#111827",
        royalblue: "#094db2",
        "colors-slate-950": "#020617",
        "colors-slate-500": "#64748b",
        gray: "#676f82",
        "colors-cyan-950": "#083344",
        "dark-gray": "#334158",
      },
      spacing: {
        "spacing-5": "20px",
        "spacing-0-5": "2px",
        "spacing-2-5": "10px",
        "spacing-6": "24px",
        "spacing-4": "16px",
        "spacing-1": "4px",
        "spacing-2": "8px",
        "spacing-21": "8px",
        "spacing-10": "40px",
      },
      fontFamily: {
        "headings-heading-4": "NanumGothic",
        "body-text-small-text": "'Noto Sans KR'",
        "body-text-caption-bold": "'Nanum Gothic'",
      },
    },
    fontSize: {
      "17xl": "2.25rem",
      "11xl": "1.875rem",
      base: "1rem",
      "5xl": "1.5rem",
      xs: "0.75rem",
      "29xl": "3rem",
      sm: "0.875rem",
      lg: "1.125rem",
      smi: "0.813rem",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "640px",
      },
      mq420: {
        raw: "screen and (max-width: 420px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
