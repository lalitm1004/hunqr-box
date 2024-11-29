/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				'parkinsans': ['Parkinsans', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			fontWeight: {
				regular: '400',
			}
		},
	},
	plugins: [],
}

