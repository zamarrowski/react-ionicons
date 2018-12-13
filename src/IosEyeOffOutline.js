import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosEyeOffOutline extends Component {

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
        <path d="M240.8 80l514.8 880 27.6-16-514.8-880z M512 288c-24.6 0-48 2.6-71 7.6l13.2 22.6c18.8-3.6 38-5.4 57.8-5.4 148 0 262 102.2 348 199.2-53.8 54.6-118.4 121.2-198 161.4l12.6 21.6c91.6-46.6 164.8-125.8 221.4-183-88.8-102.8-214.8-224-384-224z M512 711.2c-152.2 0-243.2-91.6-348-199.2 71.6-72.6 134-127.4 198.4-161l-12.6-21.6c-73 38.4-143.2 101.4-221.8 182.6 115.6 118.4 212.6 224 384 224 24.6 0 48.2-2.8 71-7.8l-13.2-22.6c-18.8 3.6-38 5.6-57.8 5.6z M626 612c24.6-26.4 39.6-61.6 39.6-100 0-82.4-68.8-149.4-153.6-149.4-10.2 0-20.4 1-30 2.8l13.4 23c5.4-0.6 11-1 16.6-1 70.6 0 128 55.8 128 124.4 0 29-10.2 55.8-27.4 77l13.4 23.2z M398 412c-24.6 26.4-39.6 61.6-39.6 100 0 82.4 68.8 149.4 153.6 149.4 10.4 0 20.4-1 30.2-2.8l-13.4-23c-5.4 0.6-11 1-16.6 1-70.6 0-128-55.8-128-124.4 0-29 10.2-55.8 27.4-77l-13.6-23.2z M432.8 471.4c-6.6 12.2-10.4 26-10.4 40.6 0 46.6 37.6 84.6 85 87l-16.6-28.2c-24.8-8.6-42.8-31.6-42.8-58.6 0-4.2 0.4-8.4 1.2-12.4l-16.4-28.4z M591.2 552.6c6.6-12.2 10.4-26 10.4-40.6h-25.6c0 4.2-0.4 8.4-1.2 12.4l16.4 28.2z"></path>
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


IosEyeOffOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosEyeOffOutline.propTypes = {
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


export default IosEyeOffOutline
