import emptyTags from './empty-tags';

// escape an attribute
let esc = str => String(str).replace(/[&<>"']/g, s=>`&${map[s]};`);
let map = {'&':'amp','<':'lt','>':'gt','"':'quot',"'":'apos'};
let setInnerHTMLAttr = 'dangerouslySetInnerHTML';
let DOMAttributeNames = {
	className: 'class',
	htmlFor: 'for'
};

let sanitized = {};

/** Hyperscript reviver that constructs a sanitized HTML string. */
export default function h(name, attrs) {
	let stack=[], s = '';
	attrs = attrs || {};
	for (let i=arguments.length; i-- > 2; ) {
		stack.push(arguments[i]);
	}

	// Sortof component support!
	if (typeof name==='function') {
		attrs.children = stack.reverse();
		return name(attrs);
		// return name(attrs, stack.reverse());
	}

	if (name) {
		s += '<' + name;
		if (attrs) for (let i in attrs) {
			// remove `__self` and `__source` from attributes(props).
			if (!/^__s(elf|ource)$/.test(i) && attrs[i]!==false && attrs[i]!=null && i !== setInnerHTMLAttr) {
				s += ` ${DOMAttributeNames[i] ? DOMAttributeNames[i] : esc(i)}="${esc(attrs[i])}"`;
			}
		}
		s += '>';
	}

	if (emptyTags.indexOf(name) === -1) {
		if (attrs[setInnerHTMLAttr]) {
			s += attrs[setInnerHTMLAttr].__html;
		}
		else while (stack.length) {
			let child = stack.pop();
			if (child) {
				if (child.pop) {
					for (let i=child.length; i--; ) stack.push(child[i]);
				}
				else {
					s += sanitized[child]===true ? child : esc(child);
				}
			}
		}

		s += name ? `</${name}>` : '';
	}

	sanitized[s] = true;
	return s;
}
