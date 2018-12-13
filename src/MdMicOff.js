import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdMicOff extends Component {

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
        <path d="M735.902 709.308l-361.902-361.226v0.692l-221.776-221.712-48.382 48.082 270.158 269.796v57.632c0 75.58 62.242 137.428 137.82 137.428 17.22 0 33.904-3.24 49.13-9.090l64.778 64.548c-34.666 17.586-73.624 27.72-113.564 27.72-125.972 0-242.73-97.18-242.73-233.18h-77.888c0 154.002 124.454 285.404 274.454 306.028v163.974h92v-163.974c44-6.704 86.132-22.444 123.254-45.244l190.556 190.156 48.066-48-67.694-67.57-116.432-115.918 116.448 115.918-116.296-116.060z M650 502.572v-301.144c0-75.58-62.418-137.428-138-137.428s-138 61.848-138 137.428v50.488l274.218 273.936c1.34-7.582 1.782-15.358 1.782-23.28z M832.878 490h-77.882c0 40.992-10.996 79.352-29.862 112.394l55.144 55.032c33.046-48.22 52.6-105.574 52.6-167.426z M919.998 892.854l-67.794-67.486 67.71 67.57z"></path>
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


MdMicOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMicOff.propTypes = {
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


export default MdMicOff
