# A React Ionicon Component
<p align="center">
  <img src="./docs/ionicons-logo.png">
</p>

View page: https://zamarrowski.github.io/react-ionicons/

## Install
```
npm install --save react-ionicons
```

## Configure webpack:
You need install css-loader and style-loader:
```
npm install --save-dev css-loader style-loader
```
Configure webpack.config.js:
```
{
  test: /\.css$/,
  loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
}
```
And install file-loader:
```
npm install --save-dev file-loader
```
Configure webpack.config.js:
```
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader?name=fonts/[name].[ext]&publicPath=bin/'
}
```
Replace public path with your output path.

## Usage
```
import React from 'react'
import { render } from 'react-dom'
import Ionicon from 'react-ionicons'

render(
  <Ionicon icon="ion-home" fontSize="35px" color="red"></Ionicon>
  <Ionicon icon="ion-cloud" rotate={true} fontSize="35px" color="blue"></Ionicon>
  <Ionicon icon="ion-cloud" fontSize="35px" color="#C9C9C9"></Ionicon>
  <Ionicon icon="ion-cloud" fontSize="35px" color="rgb(125, 176, 24)"></Ionicon>
  <Ionicon icon="ion-refresh" rotate={true} fontSize="35px" color="rgb(125, 176, 24)"></Ionicon>
, document.getElementById('container'))
```

## Features

* No dependencies, just React.
* Simple API.
* Animations.
* Customizable.

## API:

| Param | Type | Description | Example |
| --- | --- | --- | --- |
| icon | <code>String</code> | Icon of ionicons. See http://ionicons.com/. | icon="ion-home" |
| fontSize | <code>String</code> | Icon size. Allow all units (px, em, %, pt...). | fontSize="35px" |
| color | <code>String</code> | Icon color. Allow string (blue, red, cyan...), rgb, rgba and hexadecimal colors. | color="#C9C9C9" |
| rotate | <code>Boolean</code> | Apply rotate transition to icon | rotate={true} |

## TODO:
- [ ] Shake animation.
- [ ] Add style props.
- [ ] Add class props.
- [ ] Github Pages.
- [x] API DOC.
