const icons = require('./icons')
const fs = require('fs')

const toCamelCase = string => {
  let camelCased = string.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
}

const createTemplate = (componentName, paths) => {
  return `import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class ${componentName} extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <SVG
        style={this.props.style}
        className={this._getClasses()}
        fill={this.props.color}
        width={this.props.fontSize}
        height={this.props.fontSize}
        viewBox="0 0 1024 1024"
        onClick={this.props.onClick}
        rotate={this.props.rotate ? 1 : 0}
        shake={this.props.shake ? 1 : 0}
        beat={this.props.beat ? 1 : 0}
      >
        <path d="${paths}"></path>
      </SVG>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
  }

  _getPathByIconName() {
    let icon = icons.find(icon => icon.tags[0] === this.props.icon)
    if (icon) return icon.paths.join(' ')
    return ''
  }

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
  fs.writeFile(`./${componentName}.js`, template, err => {
    if (err) return console.log(`Error creating ${componentName} component`)
    console.log(`${componentName} created`)
  })
}

fs.writeFile(`./components.js`, `module.exports = ["${components.join('", "')}"]`, err => {
  if (err) console.log(err)
})