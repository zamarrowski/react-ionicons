import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCloudyOutline extends Component {

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
        <path d="M472 224c57 0 108 18.8 147.2 54.2 35.4 31.8 60.8 76.6 71.6 126l5.8 26.6 27.4-1.8c3.2-0.2 7.4-0.2 10.2-0.2 2.4 0 4.8 0 7 0 2.4 0 5 0 7.4 0 47.2 0 92 19.6 126.2 55 34.2 35.6 53 82 53 130.8 0 48.6-18.8 95.4-52.8 130.2-34 34.6-79.6 54.8-127.2 54.8h-515.8c-36.2 0-69.2-15.8-95.4-42.8-26.2-26.6-40.6-62.6-40.6-100 0-35.8 13.2-71 37-98.8 23.6-27.6 54.8-44.6 87.8-47.4l32.2-3-3.2-32c-0.6-6.8-1.4-14.6-1.4-22.6 0-60.6 23.6-118 66.2-161.6 42.6-43.4 98.6-67.4 157.4-67.4zM472 192c-140 0-255.6 119.4-255.6 261.6 0 8.6 0.6 17.2 1.6 25.6-86.4 7.8-154 88-154 176.8 0 94 75.8 176 169.2 176h515.6c116.6 0 211.2-98.8 211.2-216s-94.6-217.6-211.2-217.6c-4.6 0-9.6-0.4-14.4-0.4-4.2 0-8.4 0-12.2 0.2-23.6-107-110.2-206.2-250.2-206.2v0z"></path>
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


IosCloudyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudyOutline.propTypes = {
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


export default IosCloudyOutline
