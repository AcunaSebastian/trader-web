const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#450a0a',
        secondary: '#894675',
        // primary: {
        //   50:  '#fef2f2',
        //   100: '#fee2e2',
        //   200: '#fecaca',
        //   300: '#fca5a5',
        //   400: '#f87171',
        //   500: '#ef4444',
        //   600: '#dc2626',
        //   700: '#b91c1c',
        //   800: '#991b1b',
        //   900: '#7f1d1d',
        //   950: '#450a0a',
        // },
      }
     },
  },
  plugins: [nextui()],
}
