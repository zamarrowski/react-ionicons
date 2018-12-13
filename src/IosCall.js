import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCall extends Component {

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
        <path d="M831.8 671c-29.2-30-112.2-86.2-166.6-86.2-12.6 0-23.6 2.8-32.6 8.6-26.6 17-47.8 30.2-58 30.2-5.6 0-11.6-5-24.8-16.4l-2.2-2c-36.6-31.8-44.4-40-58.6-54.8l-3.6-3.8c-2.6-2.6-4.8-5-7-7.2-12.4-12.8-21.4-22-53.2-58l-1.4-1.6c-15.2-17.2-25.2-28.4-25.8-36.6-0.6-8 6.4-21 24.2-45.2 21.6-29.2 22.4-65.2 2.6-107-15.8-33-41.6-64.6-64.4-92.4l-2-2.4c-19.6-24-42.4-36-67.8-36-28.2 0-51.6 15.2-64 23.2-1 0.6-2 1.4-3 2-27.8 17.6-48 41.8-55.6 66.4-11.4 37-19 85 35.6 184.8 47.2 86.4 90 144.4 158 214.2 64 65.6 92.4 86.8 156 132.8 70.8 51.2 138.8 80.6 186.4 80.6 44.2 0 79 0 128.6-59.8 52-62.8 30.4-101.2-0.8-133.4z"></path>
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


IosCall.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCall.propTypes = {
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


export default IosCall
