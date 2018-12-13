import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosHelpBuoy extends Component {

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
        <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-229.8-186.2-416-416-416zM783.6 240.4c35.2 35.2 63 76.4 82.4 122 5.4 12.6 10 25.6 14 38.8l-202.2 13.6c-16.4-28-39.8-51.4-67.8-68l13-202.6c13 4 26 8.6 38.6 14 45.6 19.4 86.6 47 122 82.2zM512 672c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160c0 88.2-71.8 160-160 160zM240.4 240.4c35.2-35.2 76.4-63 122-82.4 12.6-5.4 25.6-10 38.6-14l13 202.6c-27.8 16.6-51.2 40-67.8 67.8l-202.2-13.4c4-13 8.6-26 14-38.6 19.6-45.6 47.2-86.6 82.4-122zM240.4 783.6c-35.2-35.2-63-76.4-82.4-122-5.4-12.6-10-25.6-14-38.6l202.6-13c16.4 27.8 39.8 51 67.6 67.6l-13.2 202.4c-13-4-26-8.6-38.6-14-45.6-19.6-86.6-47.2-122-82.4zM783.6 783.6c-35.2 35.2-76.4 63-122 82.4-12.6 5.4-25.6 10-38.6 14l-13.4-202.2c28.2-16.6 51.6-40.2 68.2-68.4l202.2 13.6c-4 13-8.6 26-14 38.8-19.6 45.4-47.2 86.4-82.4 121.8z"></path>
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


IosHelpBuoy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHelpBuoy.propTypes = {
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


export default IosHelpBuoy
