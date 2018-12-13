import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosKeyOutline extends Component {

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
        <path d="M685.2 436.2c-26.6 0-52.2 0-76.2 8.2-103.2-86.2-375.6-313.8-396.4-335-9.6-9.8-20.2-13.4-30.6-13.4-17.4 0-34 10.4-43.4 19.2-14 13.2-51.2 53.6-41 64 30.6 30.8 54.8 53 67.4 65.6 9.6 9.6 26.8-1.6 39.2 6.6 11 7.2 20 19.8 29.2 29 10.6 10.8 18 15.6 17.8 31.4-0.2 16.6 1 27.6 12.6 40 9.4 10 18.2 15.2 31.8 15.4 18.4 0.4 29.8 4.8 41.8 19.8 11.4 14.2 4.2 28.4 9.8 44 3.6 10.2 32 36.2 36 40.2s22 0 26.6 4.6 34.4 31.6 36.4 40.8-6 18-4 27.2c2.4 11.2 14.4 24.2 21.2 34.8-13.6 31-21.2 65.2-21.2 101.4 0 137 108.8 248 242.8 248s243-111 243-248-108.8-243.8-242.8-243.8zM685.2 896c-116.4 0-211-97-211-216 0-30.8 6.2-60.6 18.4-88.4l7-15.8c0 0-15.4-26.8-20.8-32.4-5.4-5.4 4.4-26.2-1.2-33.2-5.8-7-39.2-50.4-49.4-60.6s-28-3.6-33.4-9c-5.4-5.4-14.6-15.8-17.4-20.8-0.4-1.6-0.4-4.8-0.6-7.6-0.2-10.4-0.6-28-14.2-44.8-17.2-21.6-37-31-65.8-31.8-3.2 0-4.4-0.2-9.4-5.4-3.2-3.4-4-4.4-4-17.8 0.2-27.4-13.4-40.8-23.2-50.4l-38.2-37.2c-15.4-10.2-30.2-10.4-39.8-10.4-2.6 0-5.2 0-6.8-0.4l-43.6-45.4c2-6 15.4-17.8 21.2-23 2.8-2.4 5.2-4.8 7.8-7 5.6-5.2 14.8-10.6 21.6-10.6 2 0 4.2 0.2 7.8 3.8 20.8 21.2 258.8 220.4 398.8 337.2l13.6 11.4 16.8-5.6c19.2-6.4 41.8-6.4 66-6.4 56.6 0 109.6 21.8 149.2 61.2 39.8 39.6 61.6 93.2 61.6 150.6 0 118.8-94.6 215.8-211 215.8z M768 704c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64c0-35.4-28.6-64-64-64zM768 800c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"></path>
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


IosKeyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosKeyOutline.propTypes = {
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


export default IosKeyOutline
