import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdClipboard extends Component {

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
        <path d="M810.666 160h-174.7c-14.208-55.208-64.324-96-123.966-96s-109.758 40.792-123.966 96h-174.7c-46.938 0-85.334 38.396-85.334 85.334v629.33c0 46.938 38.396 85.336 85.334 85.336h597.332c46.938 0 85.334-38.398 85.334-85.336v-629.33c0-46.938-38.396-85.334-85.334-85.334zM512 160c23.458 0 42.666 19.198 42.666 42.666s-19.208 42.668-42.666 42.668-42.666-19.2-42.666-42.668 19.208-42.666 42.666-42.666zM816 880h-608v-640h80v144h448v-144h80v640z"></path>
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


MdClipboard.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdClipboard.propTypes = {
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


export default MdClipboard
