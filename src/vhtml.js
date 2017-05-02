import stringify from './stringify';

/** Hyperscript reviver that constructs a sanitized HTML string. */
export default function h(name, attrs) {
	let stack=[];
	for (let i=arguments.length; i-- > 2; ) {
		stack.push(arguments[i]);
	}

	return stringify(name, attrs || {}, stack);
}
