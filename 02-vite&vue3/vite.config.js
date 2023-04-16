import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	server: {
		port: 3366, // 修改端口号
		open: true, // 自动打开浏览器
	},
});
