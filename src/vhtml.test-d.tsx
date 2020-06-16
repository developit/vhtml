import h, { JSX } from './vhtml';
import { expectType } from 'tsd';

// Empty div
expectType<string>(<div></div>);

// className prop
expectType<string>(<span className="test"></span>);

// Other props
expectType<string>(<span title="title" name="name" data-custom="prop"></span>);

// Children, spreading etc.
let items = ['one', 'two'];

interface Props {
	children?: JSX.Element[];
	item: string,
	index: number,
}

const Item = ({ item, index, children }: Props) => (
	<li id={index.toString()}>
		<h4>{item}</h4>
		{children}
	</li>
);
expectType<string>(<div class="foo">
	<h1>Hi!</h1>
	<ul>
		{ items.map( (item, index) => (
			<Item {...{ item, index }}>
				This is item {item}!
			</Item>
		)) }
	</ul>
</div>);

// Fragments
expectType<string>(<h.Fragmant></h.Fragmant>);
