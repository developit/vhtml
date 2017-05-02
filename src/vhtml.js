import emptyTags from './empty-tags';

// escape an attribute
let esc = str => String(str).replace(/[&<>"']/g, s=>`&${map[s]};`);
let map = {'&':'amp','<':'lt','>':'gt','"':'quot',"'":'apos'};
let DOMAttributeNames = {
	className: 'class',
	htmlFor: 'for'
};

let sanitized = {};

function Element(name, attrs, stack) {
	this.type = name;
	this.props = attrs || {};
	this.toString = function () {
		return _h(this.type, this.props, stack);
	};
}

/** Hyperscript reviver that constructs a sanitized HTML string. */
export default function h(name, attrs) {
	let stack=[];
	for (let i=arguments.length; i-- > 2; ) {
		stack.push(arguments[i]);
	}

	return new Element(name, attrs, stack);
}

function _h(name, attrs, stack) {
	// Sortof component support!
	if (typeof name==='function') {
		attrs.children = stack.reverse();
		return String(name(attrs));
	}

	let s = `<${name}`;
	if (attrs) for (let i in attrs) {
		if (attrs[i]!==false && attrs[i]!=null) {
			s += ` ${DOMAttributeNames[i] ? DOMAttributeNames[i] : esc(i)}="${esc(attrs[i])}"`;
		}
	}

	if (emptyTags.indexOf(name) === -1) {
		s += '>';

		while (stack.length) {
			let child = stack.pop();
			if (child) {
				if (child.pop) {
					for (let i=child.length; i--; ) stack.push(child[i]);
				}
				else {
					let resolved = String(child);
					s += sanitized[resolved]===true ? resolved : esc(resolved);
				}
			}
		}

		s += `</${name}>`;
	} else {
		s += '>';
	}

	sanitized[s] = true;
	return s;
}
