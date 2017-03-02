# A React Ionicon Component
<p align="center">
<img src="./docs/ionicons-logo.png">
</p>

## Install
```
npm install --save react-ionicons
```

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

## TODO:
- [] Shake animation.
- [] Add style props.
- [] Add class props.
- [] Github Pages.
- [] API DOC.
