/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loadIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(5rem) translateZ(2rem)",
          },
          "45%": { transform: `translateZ(0rem)` },
          "100%": { opacity: 1, transform: `translateY(0rem)` },
        },
        animation: {
          loadIn: 'loadIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);',
        }
      },
    },
  },
  plugins: [],
};
