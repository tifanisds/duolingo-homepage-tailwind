/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'solid-green': '2px 2px 0 #58A700',
        'solid-dark-blue': '2px 2px 0 #042C60',
        'solid-gray': '2px 2px 0 #E5E5E5',
      },
    },
  },
  plugins: [],
}

