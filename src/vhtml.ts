import emptyTags from './empty-tags';
import { JSXInternal } from './jsx';

// escape an attribute
const esc = (str: string): string =>
	String(str).replace(/[&<>"']/g, (s) => `&${map[s]};`);
const map = { '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": 'apos' };
const setInnerHTMLAttr = 'dangerouslySetInnerHTML';
const DOMAttributeNames = {
	className: 'class',
	htmlFor: 'for'
};

const sanitized: {[escaped: string]: boolean} = {};

/* eslint-disable-next-line @typescript-eslint/no-namespace */
declare namespace h {
	export import JSX = JSXInternal;

	type Key = string | number | any;

	type ComponentChild = Record<string, any> | string | number | boolean | null | undefined;

	type ComponentChildren = ComponentChild[] | ComponentChild;

	interface Attributes {
		key?: Key;
		jsx?: boolean;
	}

	interface VHTMLDOMAttributes {
		children?: ComponentChildren;
		dangerouslySetInnerHTML?: {
			__html: string;
		};
	}

	type RenderableProps<P> = P &
		Readonly<Attributes & { children?: ComponentChildren }>;

	type ComponentType<P = Record<string, any>> = FunctionComponent<P>;

	interface FunctionComponent<P = Record<string, any>> {
		(props: RenderableProps<P>, context?: any): string | null;
		displayName?: string;
		defaultProps?: Partial<P>;
	}
	interface FunctionalComponent<P = Record<string, any>>
		extends FunctionComponent<P> {}
}

function h(
	type: string,
	props:
		| (JSXInternal.HTMLAttributes &
				JSXInternal.SVGAttributes &
				Record<string, any>)
		| null,
	...children: h.ComponentChildren[]
): string;
function h<P>(
	type: h.ComponentType<P>,
	props: (h.Attributes & P) | null,
	...children: h.ComponentChildren[]
): string;

/** Hyperscript reviver that constructs a sanitized HTML string. */
function h<P>(name: string | h.ComponentType<P> | null, attrs: | (JSXInternal.HTMLAttributes &
	JSXInternal.SVGAttributes &
	Record<string, any>) | (h.Attributes & P)
| null, ...children: h.ComponentChildren[]): string {
	const stack = children.reverse();
	let s = '';
	attrs = attrs || {};

	// Sortof component support!
	if (typeof name === 'function') {
		const props = {
			...attrs,
			children: stack.reverse()
		} as h.RenderableProps<P>;
		return name(props);
	}

	if (name) {
		s += '<' + name;
		if (attrs)
			for (const i in attrs) {
				if (attrs[i] !== false && attrs[i] != null && i !== setInnerHTMLAttr) {
					s += ` ${DOMAttributeNames[i] ? DOMAttributeNames[i] : esc(i)}="${esc(
						attrs[i]
					)}"`;
				}
			}
		s += '>';
	}

	if (emptyTags.indexOf(name) === -1) {
		if (attrs[setInnerHTMLAttr]) {
			s += attrs[setInnerHTMLAttr].__html;
		}
		else {
			while (stack.length) {
				const child = stack.pop();
				if (child) {
					if ((child as []).pop) {
						for (let i = (child as []).length; i--; ) stack.push(child[i]);
					}
					else {
						const resolved = String(child);
						s += sanitized[resolved] === true ? resolved : esc(resolved);
					}
				}
			}
		}

		s += name ? `</${name}>` : '';
	}

	sanitized[s] = true;
	return s;
}

export default h;
