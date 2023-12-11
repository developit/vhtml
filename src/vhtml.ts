import emptyTags from './empty-tags'

// escape an attribute
let esc = (str: string) => String(str).replace(/[&<>"']/g, (s) => `&${map[s as keyof typeof map]};`)
let map = { '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": 'apos' }
let setInnerHTMLAttr = 'dangerouslySetInnerHTML'
let DOMAttributeNames = {
	className: 'class',
	htmlFor: 'for'
}

let sanitized: Record<string, any> = {}

/** Hyperscript reviver that constructs a sanitized HTML string. */
export default function h(name: string | Function | null, attrs: any, ..._args: any[]) {
	let stack: string[] = [], s = ''
	attrs = attrs || {}
	for (let i = arguments.length; i-- > 2;) {
		stack.push(arguments[i])
	}

	// Sortof component support!
	if (typeof name === 'function') {
		attrs.children = stack.reverse()
		return name(attrs)
		// return name(attrs, stack.reverse());
	}

	const loopAttr = () => {
		if (attrs) for (let i in attrs) {
			if (attrs[i] !== false && attrs[i] != null && i !== setInnerHTMLAttr) {
				//@ts-ignore
				s += ` ${DOMAttributeNames[i] ? DOMAttributeNames[i] : esc(i)}="${esc(attrs[i])}"`
			}
		}
	}

	if (name) {
		if (name === '!') {
			s += '<!-- '
			loopAttr()
		}
		else if (name === 'text') {
			loopAttr()
		}
		else {
			s += '<' + name
			loopAttr()
			s += '>'
		}
	}

	if (emptyTags.indexOf(name as any) === -1) {

		if (attrs[setInnerHTMLAttr]) {
			s += attrs[setInnerHTMLAttr].__html
		}
		else while (stack.length) {
			let child = stack.pop()
			if (child) {
				if ((child as any).pop) {
					for (let i = child.length; i--;) stack.push(child[i])
				}
				else {
					s += sanitized[child] === true ? child : esc(child)
				}
			}
		}

		if (name === '!')
			s += ' -->'
		else if (name === 'text') { }
		else
			s += name ? `</${name}>` : ''
	}

	sanitized[s] = true
	return s
}