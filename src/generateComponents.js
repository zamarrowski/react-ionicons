const icons = require('./icons')
const fs = require('fs')

const toCamelCase = string => {
  let camelCased = string.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
}

const createTemplate = (componentName, paths) => {
  return `import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const ${componentName} = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="${paths}"></path>
    </SVG>
  )
}


${componentName}.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


${componentName}.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default ${componentName}
`
}

let components = []
for (let icon of icons) {
  const componentName = toCamelCase(icon.tags[0])
  components.push(`./src/${componentName}.js`)
  const paths = icon.paths.join(' ')
  const template = createTemplate(componentName, paths)
  fs.writeFile(`./src/${componentName}.js`, template, err => {
    if (err) return console.log(`Error creating ${componentName} component`)
    console.log(`${componentName} created`)
  })
}

fs.writeFile(`./src/components.js`, `module.exports = ["${components.join('", "')}"]`, err => {
  if (err) console.log(err)
})