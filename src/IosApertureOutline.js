import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosApertureOutline extends Component {

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
        <path d="M512 96c-229.8 0-416 186.2-416 416 0 131 60.6 247.8 155.2 324.2l-1.2 2.2 16.6 9.6c68.8 50.4 153.6 80 245.4 80 229.8 0 416-186.2 416-416s-186.2-416-416-416zM865.8 362.6c20 47.4 30.2 97.6 30.2 149.4 0 10.8-0.4 21.4-1.4 32h-325.6l188.8-327c8.8 7.4 17.4 15.2 25.8 23.4 35.2 35.4 62.8 76.4 82.2 122.2zM474 514.2l19.8-34.2h37.4l18.8 32.8-18 31.2h-40.8l-17.2-29.8zM661.4 158.2c25 10.6 48.6 23.8 70.8 39.2l-163.6 283.4-190-329c42.6-15.8 87.4-23.8 133.4-23.8 51.8 0 102.2 10.2 149.4 30.2zM240.4 240.4c31.8-31.8 68.2-57.4 108.4-76.2l164 283.8h-379.4c5-29.4 13.2-57.8 24.8-85.4 19.4-45.8 47-86.8 82.2-122.2zM240.4 783.6c-35.2-35.2-63-76.4-82.4-122-19.8-47.4-30-97.8-30-149.6 0-10.8 0.4-21.4 1.4-32h327.6l-189.4 328c-9.4-7.6-18.4-15.8-27.2-24.4zM362.6 865.8c-24.6-10.4-47.8-23.2-69.4-38.2l162.4-281.4 188.4 326.4c-42.2 15.4-86.6 23.4-132 23.4-51.8 0-102.2-10.2-149.4-30.2zM783.6 783.6c-32 32-68.8 57.8-109.6 76.8l-164.2-284.4h381c-5 29.4-13.2 57.8-24.8 85.4-19.6 45.8-47.2 86.8-82.4 122.2z"></path>
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


IosApertureOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosApertureOutline.propTypes = {
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


export default IosApertureOutline
