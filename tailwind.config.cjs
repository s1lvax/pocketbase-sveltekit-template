/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},


	plugins: ['@tailwindcss/typography', '@tailwindcss/forms')]
};

module.exports = config;
