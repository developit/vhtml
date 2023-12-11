const { build } = require('esbuild')

const options = {
	jsxFactory: 'h'
}

build(options).catch(err => {
	process.stderr.write(err.stderr)
	process.exit(1)
})
