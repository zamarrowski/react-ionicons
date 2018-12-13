import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBicycle extends Component {

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
        <path d="M661.332 262.404c37.336 0 67.196-29.87 67.196-67.202s-29.86-67.202-67.196-67.202c-37.332 0-67.192 29.87-67.192 67.202s29.86 67.202 67.192 67.202zM773.332 522.668c-102.664 0-186.664 84-186.664 186.666s84 186.666 186.664 186.666c102.668 0 186.668-84 186.668-186.666s-84-186.666-186.668-186.666zM773.332 840c-72.804 0-130.664-57.86-130.664-130.666s57.86-130.666 130.664-130.666c72.808 0 130.668 57.86 130.668 130.666s-57.86 130.666-130.668 130.666zM611.194 448h156.806v-64h-117.69l-69.24-120.268c-11.21-18.666-31.738-31.728-54.14-31.728-16.798 0-33.596 7.464-44.798 18.666l-143.464 138.13c-11.202 11.202-18.666 28-18.666 44.798 0 24.262 18.404 42.93 37.070 54.13l122.928 76.54v171.732h64v-224l-78.666-64 85.858-89.066 60.002 89.066zM250.666 522.668c-102.666 0-186.666 84-186.666 186.666s84 186.666 186.666 186.666c102.666 0 186.666-84 186.666-186.666s-83.998-186.666-186.666-186.666zM250.666 840c-72.798 0-130.666-57.86-130.666-130.666s57.868-130.666 130.666-130.666c72.798 0 130.666 57.86 130.666 130.666s-57.868 130.666-130.666 130.666z"></path>
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


MdBicycle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBicycle.propTypes = {
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


export default MdBicycle
