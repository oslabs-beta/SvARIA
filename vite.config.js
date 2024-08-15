import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/user': {
				target: 'http://localhost:3000/',
				changeOrigin: true,
				secure: false,
			},
			'/chatbot': {
				target: 'http://localhost:3000/',
				changeOrigin: true,
				secure: false,
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});


