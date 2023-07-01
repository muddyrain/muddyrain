import { defineConfig } from 'dumi';

export default defineConfig({
	logo: '/logo.png',
	outputPath: 'docs-dist',
	runtimePublicPath: {},
	publicPath: process.env.NODE_ENV === 'production' ? '/muddyrain' : '/',
	themeConfig: {
		name: 'muddyrain',
		socialLinks: {
			github: 'https://github.com/muddyrain/muddyrain',
			yuque: 'https://www.yuque.com/muddyrain',
		},
	},
});
