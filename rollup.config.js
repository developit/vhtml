import path from 'path';
import fs from 'fs';
import babel from 'rollup-plugin-babel';

let pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
	entry: pkg['jsnext:main'],
	dest: pkg.main,
	sourceMap: path.resolve(pkg.main),
	moduleName: pkg.amdName,
	exports: 'default',
	format: 'umd',
	plugins: [
		babel({
			babelrc: false,
			comments: false,
			presets: [
				['es2015', { loose:true, modules:false }]
			].concat(pkg.babel.presets.slice(1)),
			plugins: pkg.babel.plugins
		})
	]
};
