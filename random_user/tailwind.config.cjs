/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
				'50-screen': '50vh',
				'60-screen': '60vh',
				'65-screen': '65vh',
				'70-screen': '70vh',
				'72-screen': '72vh',
				'80-screen': '80vh',
				'90-screen': '90vh',
			},
    },
  },
  plugins: [],
}