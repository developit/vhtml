
/* IMPORT */

import { defineConfig } from 'vite'


/* MAIN */

const config = defineConfig({
	build: {
		target: 'esnext',
		// minify: false,
		lib: {
			name: 'vhtml',
			formats: ['cjs', 'es', 'umd'],
			entry: "./src/vhtml.ts",
			fileName: (format: string, entryName: string) => `${entryName}.${format}.js`
		},
	},
	esbuild: {
		// jsx: 'automatic',
	},
})

/* EXPORT */

export default config
