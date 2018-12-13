import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdIceCream extends Component {

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
        <path d="M256.2 512l256 448 256-448z M784 322c6-18 9.4-45.4 9.4-65.8 0-106.2-86-192.2-192.2-192.2-62.8 0-118.4 30-153.6 76.6 0 0-18.2 28-21.6 58l-6.8-2c-4.6-18-7.4-40 3.2-63-14.8-5-18.8-5.6-35.2-5.6-83.4 0-151.2 67.6-151.2 151.2 0 12.6 1.6 31 4.6 42.8-27.8 7-48.6 32.2-48.6 62v0c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v0c0-29.6-20.4-54.8-48-62z"></path>
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


MdIceCream.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdIceCream.propTypes = {
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


export default MdIceCream
