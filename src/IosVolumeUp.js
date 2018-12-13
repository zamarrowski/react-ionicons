import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosVolumeUp extends Component {

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
        <path d="M748.2 256l-27.2 20.6c48.2 65.8 77 147.2 77 235.4s-28.8 169.6-77.2 235.4l27.2 20.6c52.6-71.4 83.8-160 83.8-256s-31-184.6-83.6-256z M640 703.6c40-53.6 64-119.8 64-191.6s-24-138-64-191.6l-27.2 20.2c35.8 48 57.2 107.2 57.2 171.4s-21.4 123.4-57.2 171.4l27.2 20.2z M546.2 639.8c27.4-35.8 43.8-79.8 43.8-127.8s-16.4-92-43.8-127.8l-27 19.6c23.2 30.2 37 67.6 37 108.2s-13.8 77.8-37 108.2l27 19.6z M307.8 432h-115.8v160h115.8l140.2 112v-384z"></path>
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


IosVolumeUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosVolumeUp.propTypes = {
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


export default IosVolumeUp
