# vhtml

[![NPM](https://img.shields.io/npm/v/vhtml.svg?style=flat)](https://www.npmjs.org/package/vhtml)
[![travis-ci](https://travis-ci.org/developit/vhtml.svg?branch=master)](https://travis-ci.org/developit/vhtml)

### **Render JSX/Hyperscript to HTML strings, without VDOM**

> Need to use HTML strings (angular?) but want to use JSX? vhtml's got your back.
>
> Building components? do yourself a favor and use [<img title="Preact" alt="Preact" src="https://cdn.rawgit.com/developit/b4416d5c92b743dbaec1e68bc4c27cda/raw/8dd78c9d138f13e3fec98cbdd6d1c619cf986ee0/preact-logo-trans.svg" height="24" align="top">](https://github.com/developit/preact)

[**JSFiddle Demo**](https://jsfiddle.net/developit/9q0vyskg/)

---


## Installation

Via npm:

`npm install --save vhtml`


---


## Usage

```js
// import the library:
import h from 'vhtml';

// tell babel to transpile JSX to h() calls:
/** @jsx h */

// now render JSX to an HTML string!
let items = ['one', 'two', 'three'];

document.body.innerHTML = (
  <div class="foo">
    <h1>Hi!</h1>
    <p>Here is a list of {items.length} items:</p>
    <ul>
      { items.map( item => (
        <li>{ item }</li>
      )) }
    </ul>
  </div>
);
```


### New: "Sortof" Components!

`vhtml` intentionally does not transform JSX to a Virtual DOM, instead serializing it directly to HTML.
However, it's still possible to make use of basic Pure Functional Components as a sort of "template partial".

When `vhtml` is given a Function as the JSX tag name, it will invoke that function and pass it `{ children, ...props }`.
This is the same signature as a Pure Functional Component in react/preact, except `children` is an Array of already-serialized HTML strings.

This actually means it's possible to build compositional template modifiers with these simple Components, or even higher-order components.

Here's a more complex version of the previous example that uses a component to encapsulate iteration items:

```js
let items = ['one', 'two'];

const Item = ({ item, index, children }) => (
  <li id={index}>
    <h4>{item}</h4>
    {children}
  </li>
);

console.log(
  <div class="foo">
    <h1>Hi!</h1>
    <ul>
      { items.map( (item, index) => (
        <Item {...{ item, index }}>
          This is item {item}!
        </Item>
      )) }
    </ul>
  </div>
);
```

The above outputs the following HTML:

```html
<div class="foo">
  <h1>Hi!</h1>
  <ul>
    <li id="0">
      <h4>one</h4>This is item one!
    </li>
    <li id="1">
      <h4>two</h4>This is item two!
    </li>
  </ul>
</div>
```

### dangerouslySetInnerHTML
As with React and Preact you can provide the prop `dangerouslySetInnerHTML` with an object containing `{__html: '<h1>HTML Content</h1>'}` to directly set the HTML content of an element. However, this is not advisable as it will ignore any children passed to it, and removes the benefits of JSX.

Here is an example:
```js
<div dangerouslySetInnerHTML={{__html: '<h1>HTML Content</h1>'}}>
  Overwritten content!
</div>
```

The above outputs the following HTML:
```html
<div>
  <h1>HTML Content</h1>
</div>
```
