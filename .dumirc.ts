import { defineConfig } from 'dumi';

//github仓库名称
const defaultPath = '/muddyrain';
//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';

console.log(`${baseUrl}/`);
export default defineConfig({
	logo: '/logo.png',
	outputPath: 'docs-dist',
	base: '/muddyrain/',
	publicPath: '/muddyrain/',

	// themeConfig: {
	// 	socialLinks: {
	// 		github: 'https://github.com/muddyrain/muddyrain',
	// 		yuque: 'https://www.yuque.com/muddyrain',
	// 	},
	// },
});
