import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
	server: { port: 5005 },
	preview: { port: 5005 },
	plugins: [
		solid(),
		federation({
			name: 'solid_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./cartMounter': './src/cartMounter.jsx',
				'./cart': './src/cart.js',
			},
			shared: ['solid-js'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
})
