/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {},
	plugins: [require("flowbite/plugin")],
	darkMode: "class",
};
