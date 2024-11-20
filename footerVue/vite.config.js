import federation from '@originjs/vite-plugin-federation'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: { port: 5004 },
	preview: { port: 5004 },
	plugins: [
		vue(),
		federation({
			name: 'footer_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./footerMounter': './src/footerMounter.js',
			},
			shared: ['vue'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
})
