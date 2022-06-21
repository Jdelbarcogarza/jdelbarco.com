/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        // custom tailwind utility para teléfonos más pequeños
        'xs': '375px'
      },

      fontFamily: {
        'Caveat': ['Caveat','cursive'],
      }
    },
  },
  plugins: [],
}
