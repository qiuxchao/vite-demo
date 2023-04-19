import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

import tailwindcss from 'tailwindcss';

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
});
