import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	server: { port: 5002 },
	preview: { port: 5002 },
	plugins: [
		react(),
		federation({
			name: 'product_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductListPage': './src/ProductListPage',
				'./ProductDetailPage': './src/ProductDetailPage',
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
