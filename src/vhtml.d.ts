export = h;
export as namespace h;

import { JSXInternal } from './jsx';

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

	const Fragmant: FunctionComponent;
}

/**
 * Hyperscript reviver that constructs a sanitized HTML string.
 *
 * @param type - DOM node type to create.
 * @param props - Property data object.
 * @param children - Children components.
 * @returns Sanitized HTML string.
 */
declare function h(
	type: string,
	props:
		| (JSXInternal.HTMLAttributes &
				JSXInternal.SVGAttributes &
				Record<string, any>)
		| null,
	...children: h.ComponentChildren[]
): string;

/**
 * Hyperscript reviver that constructs a sanitized HTML string.
 *
 * @param type - DOM node type to create.
 * @param props - Property data object.
 * @param children - Children components.
 * @returns Sanitized HTML string.
 */
declare function h<P>(
	type: h.ComponentType<P>,
	props: (h.Attributes & P) | null,
	...children: h.ComponentChildren[]
): string;
