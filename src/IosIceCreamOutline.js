import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosIceCreamOutline extends Component {

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
        <path d="M760.8 327.2c-12.8-6.2-24.8-9.2-24.8-9.2 0-123.8-100.2-226-224-226s-224 102.4-224 226.2c0 0-11.4 1.8-24.8 8.8-24.4 12.8-39.4 39.6-39.4 69 0 44.2 35.8 80 80 80 25 0 63.4-11.6 78.2-29.6 30.6 30.2 75.6 45.6 129.8 45.6s99.4-15.4 129.8-45.6c14.6 18 53 29.6 78.2 29.6 44.2 0 80-35.8 80-80 0.2-29.2-17.4-58.2-39-68.8zM720 444c-9 0-21.4-2.4-32.4-6.2-12.8-4.6-21-11.6-21-11.6-10.4-6.8-22.2-27.4-22.2-27.4l-25 24.8c-24 23.8-61 36.4-107.4 36.4-46.2 0-83.4-12.6-107.4-36.4l-25-24.8c0 0-9.2 17.8-22.2 27.4-4 3-8.2 7-21 11.6-10.8 3.8-23.2 6.2-32.4 6.2-26.6 0-48-21.6-48-48 0-16.4 8-31.2 21.4-40 0 0 8.2-5 16.2-7.8 9.2-3 16.8-4 16.8-4 20.2 15.6 42.8 21 42.8 21-17.4-12-32.8-43.4-32.8-43.4v-3.8c0-51.6 20-100.2 56.4-137 36-36.6 84.2-57 135.2-57s99.2 20.2 135.6 57c36.4 36.8 56.4 85.6 56.4 137v4.2c0 0-14 31.2-31.2 43.2 0 0 22.4-5.4 42.6-20.8 0 0 7-0.4 15 2.6s16.2 9 16.2 9c13.4 9 21.4 23.6 21.4 40 0 26.2-21.6 47.8-48 47.8z M382.2 480.4c-0.2 0.2-0.4 0.4-0.6 0.6l0.6-0.6c0.2 0.2 0 0 0 0z M642 480.4c-30.6 30.2-75.8 45.6-130 45.6-54 0-99.2-15.2-129.6-45.4l-0.8 0.4c-8 9.4-22.4 17-37.8 22l109.8 375c1.8 5.2 19 54 58.6 54 18.2 0 35-11.8 47.4-29.4 7.4-10.6 11.2-22.8 11.8-24.8l110.6-374c-16.4-5.4-32-13.4-40-23.4zM512.2 567.4l71.6 49.2-71.6 49.2-71.6-49.2 71.6-49.2zM395.6 585.6l-21.4-69.6 10-6c19 20.8 72.2 36.2 103.6 40.4l1 0.6-85.8 59-7.4-24.4zM410.6 637.2l6.4-4.4 71.6 49.2-54.2 37.2-23.8-82zM466.2 828.6l-11.2-38.6 33.6 23.2-22.4 15.4zM512.2 906c-22.6 0-34.2-36.8-34.2-36.8l-2-7.6 36.2-26.2 36.4 26.4-1.8 7.2c-0 0.2-11.4 37-34.6 37zM558.6 828.8l-22.8-15.6 34.2-23.6-11.4 39.2zM581.8 749l-69.6 48-69-47.4-0.8-3 70-48 70.4 48.4-1 2zM590.4 719.6l-54.6-37.6 71.6-49.2 7 4.8-24 82zM629.6 585l-7.4 25.4-14.8-10.2-71.6-49.2 1-0.6c31.2-4.2 74-16.4 103.4-37.6l8 5.2-18.6 67z"></path>
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


IosIceCreamOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosIceCreamOutline.propTypes = {
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


export default IosIceCreamOutline
