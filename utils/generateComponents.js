const fs = require('fs')

const toCamelCase = string => {
  let camelCased = string.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
}

const createTemplate = (componentName, svg) => {
  return `import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ${toCamelCase(componentName)} = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      ${svg}
    </SvgContainer>
  )
}


${toCamelCase(componentName)}.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


${toCamelCase(componentName)}.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,
  title: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default ${toCamelCase(componentName)}`
}
const components = []
fs.readdir('./svgicons', (err, files) => {
  files.forEach(file => {
    let svg = String(fs.readFileSync('./svgicons/' + file))
    svg = svg.replace(/class/g, 'className')
    svg = svg.replace(/stroke-linejoin/g, 'strokeLinejoin')
    svg = svg.replace(/stroke-width/g, 'strokeWidth')
    svg = svg.replace(/stroke-miterlimit/g, 'strokeMiterlimit')
    svg = svg.replace(/stroke-linecap/g, 'strokeLinecap')
    svg = svg.replace('className="ionicon"', '')
    svg = svg.replace('<svg', '<svg style={props.style} className={props.cssClasses}')
    svg = svg.replace(/<title>.*<\/title>/, "{props.title ? <title>{props.title}</title> : ''}")
    const component = createTemplate(file.replace('.svg', ''), String(svg))
    const fileName = toCamelCase(file.replace('.svg', ''))
    fs.writeFile('./../src/' + fileName + '.js', component, err => console.log(err))
    components.push(fileName)
    // fs.writeFile('./components.js', `export default ${JSON.stringify(components)}`, err => console.log(err))
    const exportFile = components.map(c => `export { default as ${c} } from './${c}'`).join('\n')
    // fs.writeFile('./../src/index.js', exportFile, err => console.log(err))
    const importsFile = components.map(c => `import { ${c} } from 'react-ionicons'`).join('\n')
    // fs.writeFile('./imports.js', importsFile, err => console.log(err))
    const componentsObjectFile = components.map(c => `${c}: ${c},`).join('\n')
    // fs.writeFile('./componentsObject', componentsObjectFile, err => console.log(err))


  })
})