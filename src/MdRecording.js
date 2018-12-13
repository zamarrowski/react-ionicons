import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdRecording extends Component {

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
        <path d="M739.6 320c-106.8 0-192.4 85.6-192.4 192 0 47.2 15.8 89 43.8 122.2h-157.6c28-33.2 43.8-75 43.8-122.2 0-106.4-85.8-192-192.4-192s-192.8 85.6-192.8 192 85.8 192 192.4 192h455c106.8 0 192.4-85.6 192.4-192s-85.6-192-192.2-192zM284.4 634.2c-68.2 0-122.4-54.2-122.4-122.2s54.2-122.2 122.4-122.2 122.4 54.2 122.4 122.2-54 122.2-122.4 122.2zM739.6 634.2c-68.2 0-122.4-54.2-122.4-122.2s54.2-122.2 122.4-122.2 122.4 54.2 122.4 122.2-54.2 122.2-122.4 122.2z"></path>
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


MdRecording.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRecording.propTypes = {
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


export default MdRecording
