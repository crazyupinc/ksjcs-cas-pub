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
        "text-colors-dark-gray": "#111827",
        "text-colors-amber": "#f59e0b",
        "button-colors-dark-sky": "#0369a1",
        royalblue: "#094db2",
        "colors-slate-950": "#020617",
        "colors-slate-500": "#64748b",
        "bg-colors-light-gray": "#fafafa",
        gray: "#676f82",
        "dark-gray": "#334158",
        "colors-green-300": "#86efac",
        "colors-indigo-300": "#a5b4fc",
        "colors-blue-300": "#93c5fd",
        "colors-red-300": "#fca5a5",
        "colors-gray-300": "#d1d5db",
        "colors-cyan-950": "#083344",
        "bg-light": "#fafaf9",
        "text-text-small": "#0f172a",
        "text-text-small-light": "#52525b",
        "text-title-large": "#475569",
        "colors-blue-50": "#eff6ff",
        "colors-blue-100": "#dbeafe",
        "colors-blue-200": "#bfdbfe",
        "colors-green-50": "#f0fdf4",
        "colors-green-100": "#dcfce7",
        "colors-green-400": "#4ade80",
        "colors-green-200": "#bbf7d0",
        "colors-red-50": "#fef2f2",
        "colors-red-100": "#fee2e2",
        "colors-red-200": "#fecaca",
        "text-colors-normal": "#030712",
        "bg-light-border": "#e4e4e7",
        "text-hint-text": "#a3a3a3",
        whitesmoke: "#f1f1f1",
        dodgerblue: "#2f80ed",
        darkslategray: "#333",
        "text-dark-gray": "#334155",
        error: "#f4485d",
        "light-border": "#e2e4ea",
        "gray-100": "#f2f4f7",
        "text-title-small": "#1e293b",
        "text-gray": "#6b7280",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#d9d9d9",
        },
        "colors-cyan-800": "#155e75",
        "semantic-success": "#22c55e",
        "colors-slate-400": "#94a3b8",
        "colors-neutral-300": "#d4d4d4",
        "colors-rose-50": "#fff1f2",
        "semantic-error": "#f43f5e",
        steelblue: "#004d77",
        "semantic-warning": "#fb923c",
      },
      spacing: {
        "spacing-2": "8px",
        "spacing-5": "20px",
        "spacing-0-5": "2px",
        "spacing-2-5": "10px",
        "spacing-7": "28px",
        "spacing-4": "16px",
        "spacing-1": "4px",
      },
      fontFamily: {
        "headings-headling-2": "NanumGothic",
        "sub-sub-item": "'Nanum Gothic'",
        "open-sans": "'Open Sans'",
        "text-small": "Inter",
        "noto-sans-kr": "'Noto Sans KR'",
      },
      borderRadius: {
        "10xs": "3px",
        xl: "20px",
        "81xl": "100px",
        "9980xl": "9999px",
        "default-border-raius": "4px",
        "default-border-raius1": "4px",
        "border-radius-full": "9999px",
      },
    },
    fontSize: {
      "17xl": "2.25rem",
      sm: "0.875rem",
      base: "1rem",
      "29xl": "3rem",
      lg: "1.125rem",
      xs: "0.75rem",
      smi: "0.813rem",
      "5xl": "1.5rem",
      "11xl": "1.875rem",
      "2xs": "0.688rem",
      "7xl": "1.625rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
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
