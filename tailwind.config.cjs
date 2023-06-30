/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		// 一套武断的针对 Tailwind 项目预设的基础样式
		preflight: false,
	},
};
