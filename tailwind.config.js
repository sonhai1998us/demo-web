/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#1AD598',
          },
        },
        fontFamily: {
          sans: ["Raleway", "sans-serif"],
          raleway: ["var(--font-raleway)", "sans-serif"],
        },
      },
    },
    plugins: [],
  }