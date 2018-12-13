import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdRose extends Component {

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
        <path d="M521.2 429.6c47.6-81.8 96-143.2 182.8-192.8 16.6-9.6 42.4-16 45.6-17.8-168.2-51.6-237.6-155-237.6-155s-69.4 103.4-241 153c11.6 6.8 33 13 61.4 27.4 69 34.8 125 102.6 188.8 185.2z M492.6 506.8c-119.2-184.4-229.8-253.2-396.6-253.2 108.4 157.2 104 349.2 104 430.8 0 152.2 139.6 275.6 312 275.6 115.2 0 215.8-55.2 270-137.4-71-55.2-170.2-131.4-289.4-315.8z M928 253.6c0 0-110.4-4.6-170.4 30.8-86 51-148.8 122.6-190.8 206.4 77.6 104 146 175.8 190.8 218.8 21.4 20.4 39.6 36.4 55 49 7.4-23.6 11.6-48.6 11.6-74.4-0.2-81.6-34.8-228.2 103.8-430.6z"></path>
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


MdRose.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRose.propTypes = {
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


export default MdRose
