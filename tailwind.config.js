/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/components/assets/background.png')",
      },
      fontWeight: {
        "extra-bold": "1000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],


  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        salmon: '#e8716d',
        smokyBlack: 'rgba(34, 34, 34, 0.85)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'ans-serif'],
      },
      fontSize: {
        body: '12px',
        light: '300',
        regular: '400',
        medium: '500',
      },
    },
  },
  variants: {},
  
};
