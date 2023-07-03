import { defineConfig } from 'dumi';

//github仓库名称
const defaultPath = '/muddyrain';
//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';

const deployConfig =
	process.env.NODE_ENV === 'production'
		? {
				base: '/muddyrain/',
				publicPath: '/muddyrain/',
				logo: '/muddyrain/logo.png',
		  }
		: {
				base: '/',
				publicPath: '/',
				logo: '/logo.png',
		  };
export default defineConfig({
	...deployConfig,
	title: 'Muddyrain',
	outputPath: 'docs-dist',
	themeConfig: {
		name: 'Muddyrain',
		socialLinks: {
			github: 'https://github.com/muddyrain/muddyrain',
			yuque: 'https://www.yuque.com/muddyrain',
		},
	},
});
