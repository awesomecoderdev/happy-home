/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["DM Sans", "sans-serif"],
				display: ["Volkhov", "serif"],
			},
			colors: {
				gray: {
					50: "#F6FAFD",
				},
				orange: {
					DEFAULT: "#D9AC68",
				},
				blue: {
					DEFAULT: "#3EC1F3",
				},
				pink: {
					DEFAULT: "#F990BC",
				},
			},
			fontSize: {
				"6xl": ["3.5rem", "4.25rem"],
			},
			zIndex: {
				"-1": "-1",
			},
		},
	},
	plugins: [],
};
