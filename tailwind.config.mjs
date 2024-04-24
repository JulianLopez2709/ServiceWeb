/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				customPrimary: "rgb(99, 102, 241)",
				customSecondary: "rgb(161, 163, 247)",
				customDarkBg1: "rgb(31, 32, 35)",
				customDarkBg2: "rgb(38, 39, 43)",
				customDarkBg3: "rgb(48, 49, 54)",
				customGrayText: "rgb(174, 178, 183)",
			}
		},
	},
	plugins: [],
}
