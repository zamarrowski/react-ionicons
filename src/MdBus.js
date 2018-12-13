import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBus extends Component {

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
        <path d="M160 704c0 38.396 27.728 49.062 53.334 72.542v76.792c0 23.458 19.198 42.668 42.666 42.668h42.666c23.468 0 42.668-19.208 42.668-42.668v-42.666h341.332v42.666c0 23.458 19.208 42.668 42.668 42.668h42.666c23.458 0 42.666-19.208 42.666-42.668v-76.792c25.606-23.48 53.334-36.27 53.334-72.542v-407.332c0-149.334-164.272-168.668-352-168.668s-352 19.334-352 168.668v407.332zM320 735.978c-36.272 0-64-27.728-64-64 0-36.27 27.728-64 64-64s64 27.73 64 64c0 36.272-27.728 64-64 64zM704 735.978c-36.272 0-64-27.728-64-64 0-36.27 27.728-64 64-64s64 27.73 64 64c0 36.272-27.728 64-64 64zM768 490.666h-512v-213.332h512v213.332z"></path>
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


MdBus.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBus.propTypes = {
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


export default MdBus
