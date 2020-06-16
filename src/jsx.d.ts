type Defaultize<Props, Defaults> =
	// Distribute over unions
	Props extends any // Make any properties included in Default optional
		? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> &
				// Include the remaining properties from Props
				Pick<Props, Exclude<keyof Props, keyof Defaults>>
		: never;

import h from './vhtml';

declare namespace JSXInternal {
	type LibraryManagedAttributes<Component, Props> = Component extends {
		defaultProps: infer Defaults;
	}
		? Defaultize<Props, Defaults>
		: Props;

	interface IntrinsicAttributes {
		key?: any;
	}

	type Element = string

	interface ElementAttributesProperty {
		props: any;
	}

	interface ElementChildrenAttribute {
		children: any;
	}

	interface SVGAttributes
		extends HTMLAttributes {
		accentHeight?: number | string;
		accumulate?: 'none' | 'sum';
		additive?: 'replace' | 'sum';
		alignmentBaseline?:
			| 'auto'
			| 'baseline'
			| 'before-edge'
			| 'text-before-edge'
			| 'middle'
			| 'central'
			| 'after-edge'
			| 'text-after-edge'
			| 'ideographic'
			| 'alphabetic'
			| 'hanging'
			| 'mathematical'
			| 'inherit';
		allowReorder?: 'no' | 'yes';
		alphabetic?: number | string;
		amplitude?: number | string;
		arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated';
		ascent?: number | string;
		attributeName?: string;
		attributeType?: string;
		autoReverse?: number | string;
		azimuth?: number | string;
		baseFrequency?: number | string;
		baselineShift?: number | string;
		baseProfile?: number | string;
		bbox?: number | string;
		begin?: number | string;
		bias?: number | string;
		by?: number | string;
		calcMode?: number | string;
		capHeight?: number | string;
		clip?: number | string;
		clipPath?: string;
		clipPathUnits?: number | string;
		clipRule?: number | string;
		colorInterpolation?: number | string;
		colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
		colorProfile?: number | string;
		colorRendering?: number | string;
		contentScriptType?: number | string;
		contentStyleType?: number | string;
		cursor?: number | string;
		cx?: number | string;
		cy?: number | string;
		d?: string;
		decelerate?: number | string;
		descent?: number | string;
		diffuseConstant?: number | string;
		direction?: number | string;
		display?: number | string;
		divisor?: number | string;
		dominantBaseline?: number | string;
		dur?: number | string;
		dx?: number | string;
		dy?: number | string;
		edgeMode?: number | string;
		elevation?: number | string;
		enableBackground?: number | string;
		end?: number | string;
		exponent?: number | string;
		externalResourcesRequired?: number | string;
		fill?: string;
		fillOpacity?: number | string;
		fillRule?: 'nonzero' | 'evenodd' | 'inherit';
		filter?: string;
		filterRes?: number | string;
		filterUnits?: number | string;
		floodColor?: number | string;
		floodOpacity?: number | string;
		focusable?: number | string;
		fontFamily?: string;
		fontSize?: number | string;
		fontSizeAdjust?: number | string;
		fontStretch?: number | string;
		fontStyle?: number | string;
		fontVariant?: number | string;
		fontWeight?: number | string;
		format?: number | string;
		from?: number | string;
		fx?: number | string;
		fy?: number | string;
		g1?: number | string;
		g2?: number | string;
		glyphName?: number | string;
		glyphOrientationHorizontal?: number | string;
		glyphOrientationVertical?: number | string;
		glyphRef?: number | string;
		gradientTransform?: string;
		gradientUnits?: string;
		hanging?: number | string;
		horizAdvX?: number | string;
		horizOriginX?: number | string;
		ideographic?: number | string;
		imageRendering?: number | string;
		in2?: number | string;
		in?: string;
		intercept?: number | string;
		k1?: number | string;
		k2?: number | string;
		k3?: number | string;
		k4?: number | string;
		k?: number | string;
		kernelMatrix?: number | string;
		kernelUnitLength?: number | string;
		kerning?: number | string;
		keyPoints?: number | string;
		keySplines?: number | string;
		keyTimes?: number | string;
		lengthAdjust?: number | string;
		letterSpacing?: number | string;
		lightingColor?: number | string;
		limitingConeAngle?: number | string;
		local?: number | string;
		markerEnd?: string;
		markerHeight?: number | string;
		markerMid?: string;
		markerStart?: string;
		markerUnits?: number | string;
		markerWidth?: number | string;
		mask?: string;
		maskContentUnits?: number | string;
		maskUnits?: number | string;
		mathematical?: number | string;
		mode?: number | string;
		numOctaves?: number | string;
		offset?: number | string;
		opacity?: number | string;
		operator?: number | string;
		order?: number | string;
		orient?: number | string;
		orientation?: number | string;
		origin?: number | string;
		overflow?: number | string;
		overlinePosition?: number | string;
		overlineThickness?: number | string;
		paintOrder?: number | string;
		panose1?: number | string;
		pathLength?: number | string;
		patternContentUnits?: string;
		patternTransform?: number | string;
		patternUnits?: string;
		pointerEvents?: number | string;
		points?: string;
		pointsAtX?: number | string;
		pointsAtY?: number | string;
		pointsAtZ?: number | string;
		preserveAlpha?: number | string;
		preserveAspectRatio?: string;
		primitiveUnits?: number | string;
		r?: number | string;
		radius?: number | string;
		refX?: number | string;
		refY?: number | string;
		renderingIntent?: number | string;
		repeatCount?: number | string;
		repeatDur?: number | string;
		requiredExtensions?: number | string;
		requiredFeatures?: number | string;
		restart?: number | string;
		result?: string;
		rotate?: number | string;
		rx?: number | string;
		ry?: number | string;
		scale?: number | string;
		seed?: number | string;
		shapeRendering?: number | string;
		slope?: number | string;
		spacing?: number | string;
		specularConstant?: number | string;
		specularExponent?: number | string;
		speed?: number | string;
		spreadMethod?: string;
		startOffset?: number | string;
		stdDeviation?: number | string;
		stemh?: number | string;
		stemv?: number | string;
		stitchTiles?: number | string;
		stopColor?: string;
		stopOpacity?: number | string;
		strikethroughPosition?: number | string;
		strikethroughThickness?: number | string;
		string?: number | string;
		stroke?: string;
		strokeDasharray?: string | number;
		strokeDashoffset?: string | number;
		strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
		strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
		strokeMiterlimit?: string;
		strokeOpacity?: number | string;
		strokeWidth?: number | string;
		surfaceScale?: number | string;
		systemLanguage?: number | string;
		tableValues?: number | string;
		targetX?: number | string;
		targetY?: number | string;
		textAnchor?: string;
		textDecoration?: number | string;
		textLength?: number | string;
		textRendering?: number | string;
		to?: number | string;
		transform?: string;
		u1?: number | string;
		u2?: number | string;
		underlinePosition?: number | string;
		underlineThickness?: number | string;
		unicode?: number | string;
		unicodeBidi?: number | string;
		unicodeRange?: number | string;
		unitsPerEm?: number | string;
		vAlphabetic?: number | string;
		values?: string;
		vectorEffect?: number | string;
		version?: string;
		vertAdvY?: number | string;
		vertOriginX?: number | string;
		vertOriginY?: number | string;
		vHanging?: number | string;
		vIdeographic?: number | string;
		viewBox?: string;
		viewTarget?: number | string;
		visibility?: number | string;
		vMathematical?: number | string;
		widths?: number | string;
		wordSpacing?: number | string;
		writingMode?: number | string;
		x1?: number | string;
		x2?: number | string;
		x?: number | string;
		xChannelSelector?: string;
		xHeight?: number | string;
		xlinkActuate?: string;
		xlinkArcrole?: string;
		xlinkHref?: string;
		xlinkRole?: string;
		xlinkShow?: string;
		xlinkTitle?: string;
		xlinkType?: string;
		xmlBase?: string;
		xmlLang?: string;
		xmlns?: string;
		xmlnsXlink?: string;
		xmlSpace?: string;
		y1?: number | string;
		y2?: number | string;
		y?: number | string;
		yChannelSelector?: string;
		z?: number | string;
		zoomAndPan?: string;
	}

	interface PathAttributes {
		d: string;
	}

	interface DOMAttributes
		extends h.VHTMLDOMAttributes {
		// Image Events
		onload?: string;
		onloadcapture?: string;
		onerror?: string;
		onerrorcapture?: string;

		// Clipboard Events
		oncopy?: string;
		oncopycapture?: string;
		oncut?: string;
		oncutcapture?: string;
		onpaste?: string;
		onpastecapture?: string;

		// Composition Events
		oncompositionend?: string;
		oncompositionendcapture?: string;
		oncompositionstart?: string;
		oncompositionstartcapture?: string;
		oncompositionupdate?: string;
		oncompositionupdatecapture?: string;

		// Details Events
		ontoggle?: string;

		// Focus Events
		onfocus?: string;
		onfocuscapture?: string;
		onblur?: string;
		onblurcapture?: string;

		// Form Events
		onchange?: string;
		onchangecapture?: string;
		oninput?: string;
		oninputcapture?: string;
		onsearch?: string;
		onsearchcapture?: string;
		onsubmit?: string;
		onsubmitcapture?: string;
		oninvalid?: string;
		oninvalidcapture?: string;
		onreset?: string;
		onresetcapture?: string;
		onformdata?: string;
		onformdatacapture?: string;


		// Keyboard Events
		onkeydown?: string;
		onkeydowncapture?: string;
		onkeypress?: string;
		onkeypresscapture?: string;
		onkeyup?: string;
		onkeyupcapture?: string;

		// Media Events
		onabort?: string;
		onabortcapture?: string;
		oncanplay?: string;
		oncanplaycapture?: string;
		oncanplaythrough?: string;
		oncanplaythroughcapture?: string;
		ondurationchange?: string;
		ondurationchangecapture?: string;
		onemptied?: string;
		onemptiedcapture?: string;
		onencrypted?: string;
		onencryptedcapture?: string;
		onended?: string;
		onendedcapture?: string;
		onloadeddata?: string;
		onloadeddatacapture?: string;
		onloadedmetadata?: string;
		onloadedmetadatacapture?: string;
		onloadstart?: string;
		onloadstartcapture?: string;
		onpause?: string;
		onpausecapture?: string;
		onplay?: string;
		onplaycapture?: string;
		onplaying?: string;
		onplayingcapture?: string;
		onprogress?: string;
		onprogresscapture?: string;
		onratechange?: string;
		onratechangecapture?: string;
		onseeked?: string;
		onseekedcapture?: string;
		onseeking?: string;
		onseekingcapture?: string;
		onstalled?: string;
		onstalledcapture?: string;
		onsuspend?: string;
		onsuspendcapture?: string;
		ontimeupdate?: string;
		ontimeupdatecapture?: string;
		onvolumechange?: string;
		onvolumechangecapture?: string;
		onwaiting?: string;
		onwaitingcapture?: string;

		// MouseEvents
		onclick?: string;
		onclickcapture?: string;
		oncontextmenu?: string;
		oncontextmenucapture?: string;
		ondblclick?: string;
		ondblclickcapture?: string;
		ondrag?: string;
		ondragcapture?: string;
		ondragend?: string;
		ondragendcapture?: string;
		ondragenter?: string;
		ondragentercapture?: string;
		ondragexit?: string;
		ondragexitcapture?: string;
		ondragleave?: string;
		ondragleavecapture?: string;
		ondragover?: string;
		ondragovercapture?: string;
		ondragstart?: string;
		ondragstartcapture?: string;
		ondrop?: string;
		ondropcapture?: string;
		onmousedown?: string;
		onmousedowncapture?: string;
		onmouseenter?: string;
		onmouseentercapture?: string;
		onmouseleave?: string;
		onmouseleavecapture?: string;
		onmousemove?: string;
		onmousemovecapture?: string;
		onmouseout?: string;
		onmouseoutcapture?: string;
		onmouseover?: string;
		onmouseovercapture?: string;
		onmouseup?: string;
		onmouseupcapture?: string;

		// Selection Events
		onselect?: string;
		onselectcapture?: string;

		// Touch Events
		ontouchcancel?: string;
		ontouchcancelcapture?: string;
		ontouchend?: string;
		ontouchendcapture?: string;
		ontouchmove?: string;
		ontouchmovecapture?: string;
		ontouchstart?: string;
		ontouchstartcapture?: string;

		// Pointer Events
		onpointerover?: string;
		onpointerovercapture?: string;
		onpointerenter?: string;
		onpointerentercapture?: string;
		onpointerdown?: string;
		onpointerdowncapture?: string;
		onpointermove?: string;
		onpointermovecapture?: string;
		onpointerup?: string;
		onpointerupcapture?: string;
		onpointercancel?: string;
		onpointercancelcapture?: string;
		onpointerout?: string;
		onpointeroutcapture?: string;
		onpointerleave?: string;
		onpointerleavecapture?: string;
		ongotpointercapture?: string;
		ongotpointercapturecapture?: string;
		onlostpointercapture?: string;
		onlostpointercapturecapture?: string;

		// UI Events
		onscroll?: string;
		onscrollcapture?: string;

		// Wheel Events
		onwheel?: string;
		onwheelcapture?: string;

		// Animation Events
		onanimationstart?: string;
		onanimationstartcapture?: string;
		onanimationend?: string;
		onanimationendcapture?: string;
		onanimationiteration?: string;
		onanimationiterationcapture?: string;

		// Transition Events
		ontransitionend?: string;
		ontransitionendcapture?: string;
	}

	interface HTMLAttributes
		extends DOMAttributes {
		// Standard HTML Attributes
		accept?: string;
		acceptCharset?: string;
		accessKey?: string;
		action?: string;
		allowFullScreen?: boolean;
		allowTransparency?: boolean;
		alt?: string;
		as?: string;
		async?: boolean;
		autocomplete?: string;
		autoComplete?: string;
		autocorrect?: string;
		autoCorrect?: string;
		autofocus?: boolean;
		autoFocus?: boolean;
		autoPlay?: boolean;
		capture?: boolean;
		cellPadding?: number | string;
		cellSpacing?: number | string;
		charSet?: string;
		challenge?: string;
		checked?: boolean;
		class?: string;
		className?: string;
		cols?: number;
		colSpan?: number;
		content?: string;
		contentEditable?: boolean;
		contextMenu?: string;
		controls?: boolean;
		controlsList?: string;
		coords?: string;
		crossOrigin?: string;
		data?: string;
		dateTime?: string;
		default?: boolean;
		defer?: boolean;
		dir?: 'auto' | 'rtl' | 'ltr';
		disabled?: boolean;
		disableRemotePlayback?: boolean;
		download?: any;
		draggable?: boolean;
		encType?: string;
		form?: string;
		formAction?: string;
		formEncType?: string;
		formMethod?: string;
		formNoValidate?: boolean;
		formTarget?: string;
		frameBorder?: number | string;
		headers?: string;
		height?: number | string;
		hidden?: boolean;
		high?: number;
		href?: string;
		hrefLang?: string;
		for?: string;
		htmlFor?: string;
		httpEquiv?: string;
		icon?: string;
		id?: string;
		inputMode?: string;
		integrity?: string;
		is?: string;
		keyParams?: string;
		keyType?: string;
		kind?: string;
		label?: string;
		lang?: string;
		list?: string;
		loading?: 'eager' | 'lazy';
		loop?: boolean;
		low?: number;
		manifest?: string;
		marginHeight?: number;
		marginWidth?: number;
		max?: number | string;
		maxLength?: number;
		media?: string;
		mediaGroup?: string;
		method?: string;
		min?: number | string;
		minLength?: number;
		multiple?: boolean;
		muted?: boolean;
		name?: string;
		nonce?: string;
		noValidate?: boolean;
		open?: boolean;
		optimum?: number;
		pattern?: string;
		placeholder?: string;
		playsInline?: boolean;
		poster?: string;
		preload?: string;
		radioGroup?: string;
		readOnly?: boolean;
		rel?: string;
		required?: boolean;
		role?: string;
		rows?: number;
		rowSpan?: number;
		sandbox?: string;
		scope?: string;
		scoped?: boolean;
		scrolling?: string;
		seamless?: boolean;
		selected?: boolean;
		shape?: string;
		size?: number;
		sizes?: string;
		slot?: string;
		span?: number;
		spellcheck?: boolean;
		src?: string;
		srcset?: string;
		srcDoc?: string;
		srcLang?: string;
		srcSet?: string;
		start?: number;
		step?: number | string;
		style?: string | { [key: string]: string | number };
		summary?: string;
		tabIndex?: number;
		target?: string;
		title?: string;
		type?: string;
		useMap?: string;
		value?: string | string[] | number;
		volume?: string | number;
		width?: number | string;
		wmode?: string;
		wrap?: string;

		// RDFa Attributes
		about?: string;
		datatype?: string;
		inlist?: any;
		prefix?: string;
		property?: string;
		resource?: string;
		typeof?: string;
		vocab?: string;

		// Microdata Attributes
		itemProp?: string;
		itemScope?: boolean;
		itemType?: string;
		itemID?: string;
		itemRef?: string;
	}

	interface HTMLMarqueeElement extends HTMLElement {
		behavior?: 'scroll' | 'slide' | 'alternate';
		bgColor?: string;
		direction?: 'left' | 'right' | 'up' | 'down';
		height?: number | string;
		hspace?: number | string;
		loop?: number | string;
		scrollAmount?: number | string;
		scrollDelay?: number | string;
		trueSpeed?: boolean;
		vspace?: number | string;
		width?: number | string;
	}

	interface IntrinsicElements {
		// HTML
		a: HTMLAttributes;
		abbr: HTMLAttributes;
		address: HTMLAttributes;
		area: HTMLAttributes;
		article: HTMLAttributes;
		aside: HTMLAttributes;
		audio: HTMLAttributes;
		b: HTMLAttributes;
		base: HTMLAttributes;
		bdi: HTMLAttributes;
		bdo: HTMLAttributes;
		big: HTMLAttributes;
		blockquote: HTMLAttributes;
		body: HTMLAttributes;
		br: HTMLAttributes;
		button: HTMLAttributes;
		canvas: HTMLAttributes;
		caption: HTMLAttributes;
		cite: HTMLAttributes;
		code: HTMLAttributes;
		col: HTMLAttributes;
		colgroup: HTMLAttributes;
		data: HTMLAttributes;
		datalist: HTMLAttributes;
		dd: HTMLAttributes;
		del: HTMLAttributes;
		details: HTMLAttributes;
		dfn: HTMLAttributes;
		dialog: HTMLAttributes;
		div: HTMLAttributes;
		dl: HTMLAttributes;
		dt: HTMLAttributes;
		em: HTMLAttributes;
		embed: HTMLAttributes;
		fieldset: HTMLAttributes;
		figcaption: HTMLAttributes;
		figure: HTMLAttributes;
		footer: HTMLAttributes;
		form: HTMLAttributes;
		h1: HTMLAttributes;
		h2: HTMLAttributes;
		h3: HTMLAttributes;
		h4: HTMLAttributes;
		h5: HTMLAttributes;
		h6: HTMLAttributes;
		head: HTMLAttributes;
		header: HTMLAttributes;
		hgroup: HTMLAttributes;
		hr: HTMLAttributes;
		html: HTMLAttributes;
		i: HTMLAttributes;
		iframe: HTMLAttributes;
		img: HTMLAttributes;
		input: HTMLAttributes;
		ins: HTMLAttributes;
		kbd: HTMLAttributes;
		keygen: HTMLAttributes;
		label: HTMLAttributes;
		legend: HTMLAttributes;
		li: HTMLAttributes;
		link: HTMLAttributes;
		main: HTMLAttributes;
		map: HTMLAttributes;
		mark: HTMLAttributes;
		marquee: HTMLAttributes;
		menu: HTMLAttributes;
		menuitem: HTMLAttributes;
		meta: HTMLAttributes;
		meter: HTMLAttributes;
		nav: HTMLAttributes;
		noscript: HTMLAttributes;
		object: HTMLAttributes;
		ol: HTMLAttributes;
		optgroup: HTMLAttributes;
		option: HTMLAttributes;
		output: HTMLAttributes;
		p: HTMLAttributes;
		param: HTMLAttributes;
		picture: HTMLAttributes;
		pre: HTMLAttributes;
		progress: HTMLAttributes;
		q: HTMLAttributes;
		rp: HTMLAttributes;
		rt: HTMLAttributes;
		ruby: HTMLAttributes;
		s: HTMLAttributes;
		samp: HTMLAttributes;
		script: HTMLAttributes;
		section: HTMLAttributes;
		select: HTMLAttributes;
		slot: HTMLAttributes;
		small: HTMLAttributes;
		source: HTMLAttributes;
		span: HTMLAttributes;
		strong: HTMLAttributes;
		style: HTMLAttributes;
		sub: HTMLAttributes;
		summary: HTMLAttributes;
		sup: HTMLAttributes;
		table: HTMLAttributes;
		tbody: HTMLAttributes;
		td: HTMLAttributes;
		textarea: HTMLAttributes;
		tfoot: HTMLAttributes;
		th: HTMLAttributes;
		thead: HTMLAttributes;
		time: HTMLAttributes;
		title: HTMLAttributes;
		tr: HTMLAttributes;
		track: HTMLAttributes;
		u: HTMLAttributes;
		ul: HTMLAttributes;
		var: HTMLAttributes;
		video: HTMLAttributes;
		wbr: HTMLAttributes;

		//SVG
		svg: SVGAttributes;
		animate: SVGAttributes;
		circle: SVGAttributes;
		clipPath: SVGAttributes;
		defs: SVGAttributes;
		desc: SVGAttributes;
		ellipse: SVGAttributes;
		feBlend: SVGAttributes;
		feColorMatrix: SVGAttributes;
		feComponentTransfer: SVGAttributes;
		feComposite: SVGAttributes;
		feConvolveMatrix: SVGAttributes;
		feDiffuseLighting: SVGAttributes;
		feDisplacementMap: SVGAttributes;
		feFlood: SVGAttributes;
		feGaussianBlur: SVGAttributes;
		feImage: SVGAttributes;
		feMerge: SVGAttributes;
		feMergeNode: SVGAttributes;
		feMorphology: SVGAttributes;
		feOffset: SVGAttributes;
		feSpecularLighting: SVGAttributes;
		feTile: SVGAttributes;
		feTurbulence: SVGAttributes;
		filter: SVGAttributes;
		foreignObject: SVGAttributes;
		g: SVGAttributes;
		image: SVGAttributes;
		line: SVGAttributes;
		linearGradient: SVGAttributes;
		marker: SVGAttributes;
		mask: SVGAttributes;
		path: SVGAttributes;
		pattern: SVGAttributes;
		polygon: SVGAttributes;
		polyline: SVGAttributes;
		radialGradient: SVGAttributes;
		rect: SVGAttributes;
		stop: SVGAttributes;
		symbol: SVGAttributes;
		text: SVGAttributes;
		tspan: SVGAttributes;
		use: SVGAttributes;
	}
}
