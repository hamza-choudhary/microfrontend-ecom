import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	server: { port: 5001 },
	plugins: [
		react(),
		federation({
			name: 'home_app',
			remotes: {
				productApp: 'http://localhost:5002/assets/remoteEntry.js',
				headerApp: 'http://localhost:5003/assets/remoteEntry.js',
				footerApp: 'http://localhost:5004/assets/remoteEntry.js',
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
