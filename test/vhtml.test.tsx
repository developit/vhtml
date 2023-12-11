/// <reference types="@types/mocha" />

//to disable syntax error
import React from 'react'

import h from '../src/vhtml'
import { expect } from 'chai'
/** @jsx h */
/*global describe,it*/

describe('vhtml', () => {
	it('should stringify html', () => {
		let items = ['one', 'two', 'three']
		expect(
			<div class="foo">
				<h1>Hi!</h1>
				<p>Here is a list of {items.length} items:</p>
				<ul>
					{items.map(item => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		).to.equal(
			`<div class="foo"><h1>Hi!</h1><p>Here is a list of 3 items:</p><ul><li>one</li><li>two</li><li>three</li></ul></div>`
		)
	})

	it('should sanitize children', () => {
		expect(
			<div>
				{`<strong>blocked</strong>`}
				<em>allowed</em>
			</div>
		).to.equal(
			`<div>&lt;strong&gt;blocked&lt;/strong&gt;<em>allowed</em></div>`
		)
	})

	it('should sanitize attributes', () => {
		expect(
			<div onclick={`&<>"'`} />
		).to.equal(
			`<div onclick="&amp;&lt;&gt;&quot;&apos;"></div>`
		)
	})

	// it('should sanitize function', () => {
	// 	expect(
	// 		<div onClick={() => alert('hello')} />
	// 	).to.equal(
	// 		`<div onclick="&amp;&lt;&gt;&quot;&apos;"></div>`
	// 	)
	// })

	it('should not sanitize the "dangerouslySetInnerHTML" attribute, and directly set its `__html` property as innerHTML', () => {
		expect(
			<div dangerouslySetInnerHTML={{ __html: "<span>Injected HTML</span>" }} />
		).to.equal(
			`<div><span>Injected HTML</span></div>`
		)
	})

	it('should flatten children', () => {
		expect(
			<div>
				{[['a', 'b']]}
				<c>d</c>
				{['e', ['f'], [['g']]]}
			</div>
		).to.equal(
			`<div>ab<c>d</c>efg</div>`
		)
	})

	it('should support sortof components', () => {
		let items = ['one', 'two']

		const Item = ({ item, index, children }) => (
			<li id={index}>
				<h4>{item}</h4>
				{children}
			</li>
		)

		expect(
			<div class="foo">
				<h1>Hi!</h1>
				<ul>
					{items.map((item, index) => (
						<Item {...{ item, index }}>
							This is item {item}!
						</Item>
					))}
				</ul>
			</div>
		).to.equal(
			`<div class="foo"><h1>Hi!</h1><ul><li id="0"><h4>one</h4>This is item one!</li><li id="1"><h4>two</h4>This is item two!</li></ul></div>`
		)
	})

	it('should support sortof components without args', () => {
		let items = ['one', 'two']

		const Item = () => (
			<li>
				<h4></h4>
			</li>
		)

		expect(
			<div class="foo">
				<h1>Hi!</h1>
				<ul>
					{items.map((item, index) => (
						<Item>
							This is item {item}!
						</Item>
					))}
				</ul>
			</div>
		).to.equal(
			`<div class="foo"><h1>Hi!</h1><ul><li><h4></h4></li><li><h4></h4></li></ul></div>`
		)
	})

	it('should support sortof components without args but with children', () => {
		let items = ['one', 'two']

		const Item = ({ children }) => (
			<li>
				<h4></h4>
				{children}
			</li>
		)

		expect(
			<div class="foo">
				<h1>Hi!</h1>
				<ul>
					{items.map((item, index) => (
						<Item>
							This is item {item}!
						</Item>
					))}
				</ul>
			</div>
		).to.equal(
			`<div class="foo"><h1>Hi!</h1><ul><li><h4></h4>This is item one!</li><li><h4></h4>This is item two!</li></ul></div>`
		)
	})

	it('should support empty (void) tags', () => {
		expect(
			<div>
				<area />
				<base />
				<br />
				<col />
				<command />
				<embed />
				<hr />
				<img />
				<input />
				<keygen />
				<link />
				<meta />
				<param />
				<source />
				<track />
				<wbr />
				{/* Not void elements */}
				<div />
				<span />
				<p />
			</div>
		).to.equal(
			`<div><area><base><br><col><command><embed><hr><img><input><keygen><link><meta><param><source><track><wbr><div></div><span></span><p></p></div>`
		)
	})

	it('should handle special prop names', () => {
		expect(
			<div className="my-class" htmlFor="id" />
		).to.equal(
			'<div class="my-class" for="id"></div>'
		)
	})

	it('should support string fragments', () => {
		expect(
			h(null, null, "foo", "bar", "baz")
		).to.equal(
			'foobarbaz'
		)
	})

	it('should support element fragments', () => {
		expect(
			h(null, null, <p>foo</p>, <em>bar</em>, <div class="qqqqqq">baz</div>)
		).to.equal(
			'<p>foo</p><em>bar</em><div class="qqqqqq">baz</div>'
		)
	})

	it('should support svg', () => {
		expect(
			<svg viewBox="0 0 100 100">
				<g transform="translate(50, 50)">
					<circle class="clock-face" r={48} />
					<line class="millisecond" y2={-44} />
					<line class="hour" y2={-22} />
					<line class="minute" y2={-32} />
					<line class="second" y2={-38} />
				</g>
			</svg>
		).to.equal(
			`<svg viewBox="0 0 100 100"><g transform="translate(50, 50)"><circle class="clock-face" r="48"></circle><line class="millisecond" y2="-44"></line><line class="hour" y2="-22"></line><line class="minute" y2="-32"></line><line class="second" y2="-38"></line></g></svg>`
		)
	})

	it('should support text', () => {
		expect(
			h('text', null, "hello world!")
		).to.equal(
			`hello world!`
		)
	})

	it('should support empty comment', () => {
		expect(
			h('!', null)
		).to.equal(
			'<!--  -->'
		)
	})
	it('should support comment', () => {
		expect(
			h('!', null, <p>foo</p>, <em>bar</em>, <div class="qqqqqq">baz</div>)
		).to.equal(
			'<!-- <p>foo</p><em>bar</em><div class="qqqqqq">baz</div> -->'
		)
	})
})
