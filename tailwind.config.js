/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  colors: {
    bg: '#fcd7d7',
    main: '#ff6b6b',
    mainAccent: '#ff3333', // not needed for shadcn
  },
  borderRadius: {
    base: '5px'
  },
  boxShadow: {
    base: '4px 4px 0px 0px rgba(0,0,0,1)',
  },
  translate: {
    boxShadowX: '4px',
    boxShadowY: '4px',
  }
};
