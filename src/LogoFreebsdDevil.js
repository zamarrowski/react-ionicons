import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoFreebsdDevil extends Component {

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
        <path d="M1005.2 230c-45-87.4-116-102-116-102s31 64 32 102c0.8 32.2-11 56-54.4 67s-61.6-4-95.6-35-83.2-53-145.2-56c-80-4-154 18-154 18-40-50 40-160 40-160-149 59-187.4 166.6-192 227.4-3.8 48.2 17 81.6 17 81.6s-1 55.6-10 84c-6.2 19.6-33.8 50-52 69-24.4 25.4-25 77 0 114s88 55 134 79 63 42 63 42 2 16.6 1 30.6-6.4 28-18 36.4c-11 7.8-31 1-41-4s-10-12.4-21-16-14.6-8-13-22 4-18-7-37-37-19-59-16-34.6 13.6-34.6 13.6l-32.6-20c0 0 17-31.2 10.4-71.2-14.6-87.6-100-125.6-100-125.6l20.8 88.8c0 0 2.2-5.2 12.8-12.8s16.2-7.2 16.2-7.2 13.2 15.2 18.2 50.6c5 36-13.4 54.4-13.4 54.4l-56.6-36 2-29-77.6-20.6 32.4 73.4 30-8 48 45.4c0 0-31.4 23.4-66 23.4-22 0-44-12-44-12s-2.8-2-1.6-11c1.4-10 13.6-25 13.6-25h-92c0 0 54.6 77.4 130 77.4 62 0 88.4-25 88.4-25l37.6 37.4c0 0 6 11 0 14s-14 7-18 30 36 58 36 58c43.6 35.6 14 64 14 64h544c-18-26-45-36-64-64 0 0-89.6-116.8-3.6-180.8 114.8-85.4 85.6-138.8 82.4-202.8 0 0 63.6-13.2 118.6-67.2s77.8-141.6 39.8-215.2zM390 406c-33.8 9-45 71-45 71 3-126 115-186 130-178s-13 78-42 128c0 0-16-28.2-43-21zM464 436c0 0 36-112 75-119s83 42 83 124-52 130.8-85.6 138.4c-33 7.6-46 4-46 4s55-43.2 47-113.6c-5.6-49.4-62.8-48.4-73.4-33.8z"></path>
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


LogoFreebsdDevil.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoFreebsdDevil.propTypes = {
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


export default LogoFreebsdDevil
