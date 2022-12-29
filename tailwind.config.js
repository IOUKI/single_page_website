/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'wave': 'url("/src/images/wave.jpg")',
        'city': 'url("/src/images/city.jpeg")',
        'lantern': 'url("/src/images/lantern.jpeg")',
        'river': 'url("/src/images/river.jpeg")',
        'fishing_port': 'url("/src/images/fishing_port.jpeg")',
      }
    },
  },
  plugins: [],
}
