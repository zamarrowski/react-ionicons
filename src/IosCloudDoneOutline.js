import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCloudDoneOutline extends Component {

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
        <path d="M618.4 432l-154 153.8-58.4-57.8-22 22 69.2 68.6c3 3 7.2 5.6 11 5.6s7.8-2.4 10.8-5.4l165-164.4-21.6-22.4z M826 452.2c-13.8-128.4-118-228.2-250-228.2-89.6 0-173 45.6-218.8 115.4-15.8-7.4-33.6-11.4-52.2-11.4-68.4 0-124 55-125 123.2-69.8 22-116 85.2-116 156.8 0 87.8 71.2 160 159 160h578c87.8 0 159-72.2 159-160 0-79.2-58-143.8-134-155.8zM801 736h-578c-70 0-127-57.6-127-128 0-28.6 8.8-54 25.6-77.2 17-23.2 40.4-40.4 68-49l22-7 0.4-23.2c0.4-24.6 10.2-47.6 27.6-64.8 17.6-17.2 40.6-26.8 65.2-26.8 13.6 0 26.6 2.8 38.8 8.4l25 11.6 15.2-23c41.6-63.6 115.8-101.4 191.6-101.4 55.6 0 105 20.6 146.2 57.8 41 37 66.6 87.4 72.6 142l2.6 24.4 24.2 3.8c29.4 4.6 56.6 19.8 76.2 42.8 19.8 23.2 30.8 51.2 30.8 81.6 0 70.4-57 128-127 128z"></path>
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


IosCloudDoneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudDoneOutline.propTypes = {
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


export default IosCloudDoneOutline
