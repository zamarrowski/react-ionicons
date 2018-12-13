import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoWordpress extends Component {

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
        <path d="M518 542.6l-65.6 191.4h-0.2l-50.8 146.2c3.6 1 7 1.8 10.6 2.8 0.2 0 0.4 0 0.6 0 31.6 8.4 64.8 13 99 13 17 0 33.6-1 49.8-3.6 22.4-2.8 44-7.6 65-14.2 0 0 0 0 0 0 5.2-1.6 10.4-3.4 15.6-5.2-5.6-12-17.6-38.6-18.2-39.8l-105.8-290.6z M161.6 361c-20 45.2-33.6 100.8-33.6 151 0 12.6 0.6 25.2 1.8 37.6 13.8 142.4 105.8 262 232.2 315.8 5.2 2.2 10.6 4.4 16 6.4l-186-510.6c-16-0.6-19 0.4-30.4-0.2z M860.4 350.8c-8.6-18.6-18.8-36.4-30.2-53.2-3.2-4.8-6.8-9.6-10.2-14.4-43-57.6-101.6-102.8-169.8-129.2-42.8-16.8-89.6-26-138.4-26-120.6 0-228.4 56-298.8 143.4-13 16-24.6 33.2-35 51.2 28.4 0.2 63.6 0.2 67.6 0.2 36.2 0 92-4.4 92-4.4 18.8-1.2 20.8 26.2 2.2 28.4 0 0-18.8 2.2-39.6 3.2l125.8 374 75.6-226.6-53.6-147.2c-18.8-1-36.2-3.2-36.2-3.2-18.8-1-16.4-29.6 2-28.4 0 0 57 4.4 91 4.4 36.2 0 92-4.4 92-4.4 18.6-1.2 21 26.2 2.2 28.4 0 0-18.6 2.2-39.4 3.2l124.6 371.2 34.6-115.2c17.4-44.8 26.2-81.8 26.2-111.4 0-42.6-15.4-72.2-28.6-95.2-17.4-28.6-33.8-52.6-33.8-80.8 0-31.8 24-61.4 58-61.4 1.4 0 3 0 4.4 0 52.4-1.4 69.6 50.6 71.8 86 0 0 0 0.8 0 1.2 0.8 14.4 0.2 25 0.2 37.6 0 34.8-6.6 74.2-26.2 123.6l-78 225.6-44.6 131.4c3.6-1.6 7-3.2 10.6-5 113.4-54.8 196-164 213.4-293.4 2.6-17 3.8-34.4 3.8-52 0-57.8-12.8-112.6-35.6-161.6z"></path>
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


LogoWordpress.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoWordpress.propTypes = {
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


export default LogoWordpress
