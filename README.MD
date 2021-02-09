# A React Ionicon Component

<p align="center">
  <img src="https://raw.githubusercontent.com/zamarrowski/react-ionicons/master/ionicons-logo.png">
</p>

Beautiful doc in https://react-ionicons.netlify.app/

## Install


```sh
$ npm install --save react-ionicons
```

or

```sh
$ yarn add react-ionicons
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { LogoNodejs } from 'react-ionicons'

<LogoNodejs
  color={'#00000'}
  rotate
  height="250px"
  width="250px"
  onClick={() => alert('Hi!')}
/>
```

### Browserify

[`browserify`](https://npmjs.com/packages/browserify) is supported, but you have to install [`browserify-css@^0.12.0`](https://npmjs.com/packages/browserify-css) manually.

## Features

* SVG Icons.
* Simple API.
* Animations.
* Customizable.
* Support to Create React App.
* Typescript support.

## API:

| Param | Type | Description | Example |
| --- | --- | --- | --- |
| `height` | `String` | Icon size. Allow all units (px, em, %, pt...). | `height="22px"` |
| `width` | `String` | Icon size. Allow all units (px, em, %, pt...). | `width="22px"` |
| `color` | `String` | Icon color. Allow string (blue, red, cyan...), rgb, rgba and hexadecimal colors. | `color="#C9C9C9"` |
| `title` | `String` | Tooltip for the icon | `title="this is a tooltip"` |
| `cssClasses` | `String` | Pass a string with cssClasses | `cssClasses="myButton"` |
| `rotate` | `Boolean` | Apply rotate animation to icon | `rotate={true}` |
| `shake` | `Boolean` | Apply shake animation to icon | `shake={true}` |
| `beat` | `Boolean` | Apply beat animation to icon | `beat={true}` |
| `onClick` | `Function` | Pass a function to execute onClick | `onClick={() => console.log('Hi!')}` |
| `style` | `Object` | Pass a style object | `style={{ verticalAlign: 'middle' }}` |
