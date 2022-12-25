/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#2B2A30',
				red: '#9d0000',
				green: '#00aa51',
			},
			fontFamily: {
				timer: 'Bebas Neue',
				button: 'Montserrat',
			},
		},
	},
	plugins: [],
};
