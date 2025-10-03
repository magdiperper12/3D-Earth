/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				ripple: {
					'0%': { transform: 'scale(1) translate(0, 0)', filter: 'blur(0px)' },
					'50%': {
						transform: 'scale(1.05) translate(-2px, 2px)',
						filter: 'blur(1px)',
					},
					'100%': {
						transform: 'scale(1) translate(0, 0)',
						filter: 'blur(0px)',
					},
				},
			},
			animation: {
				ripple: 'ripple 6s infinite ease-in-out',
			},
		},
	},
	plugins: [],
};
