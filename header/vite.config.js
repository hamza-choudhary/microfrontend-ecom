import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	server: { port: 5003 },
	preview: { port: 5003 },
	plugins: [
		react(),
		federation({
			name: 'header_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./Header': './src/Header',
			},
			shared: ['react', 'react-dom'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
})
