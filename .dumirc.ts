import { defineConfig } from 'dumi';

export default defineConfig({
	logo: '/logo.png',
	outputPath: 'docs-dist',
	runtimePublicPath: {},
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	themeConfig: {
		name: 'muddyrain',
	},
});
