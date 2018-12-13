import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBonfireOutline extends Component {

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
        <path d="M510 704.2l0.2 1.6 0.4 1.8 30.4 152c0.8 2.8 1.2 5.6 1.2 8.4 0 19.2-16.6 28-32 28-9.4 0-17.8-3-23.6-8.4-5.6-5-8.4-11.6-8.4-19.6 0-2.4 0.2-4.6 0.8-7v-0.8l31-156zM510 672c-15.2 0-28 10.8-31.2 25v0l-31.2 157c-1 4.6-1.6 9.2-1.6 14 0 35.4 28.6 60 64 60s64-24.6 64-60c0-5.8-0.8-11.4-2.2-16.8l-30-150c-1.4-16.4-15-29.2-31.8-29.2v0z M666 730.2l84 61.2 1.4 0.8c0.6 0.4 2.2 1.8 3.4 2.8 0.8 0.8 1.8 1.4 2.6 2.2 0.8 0.6 2.2 3.4 2.6 7.6 0.2 5.6-1.6 11.2-4.8 14.4-2.8 2.8-7.6 4.6-12.8 4.6s-8.6-1.8-9.6-2.8c-0.4-0.6-1-1.2-1.4-1.8-1-1-2.2-2.4-2.4-3l-1.2-1.6-61.8-84.4zM631.8 672.2c-6 0-11.8 2.4-16.6 7.2-8.2 8.2-9.4 20.8-3.4 30.8l90 123.6c1.8 3 4.4 5.6 6.8 8.4 8 9.2 20.6 14 33.8 14 12.8 0 26-4.6 35.4-14 19.2-19.2 18.8-54 0-69.4-3.4-2.8-6.6-5.8-10.2-7.8l-119.2-87c-5.6-4-11.2-5.8-16.6-5.8v0z M357.8 730.4l-62.4 85.6c-0.6 1-1.4 2-2.4 3-3.2 3.2-7.4 5-12 5s-8.8-1.8-12-5c-6.6-6.6-6.6-17.4 0-24 1-1 2.2-2 3.6-2.8l1.4-0.8 1.4-1 82.4-60zM391.2 672c-5.6 0-11 1.8-15.4 5.6l-119.2 86.8c-3.6 2.2-7.2 4.8-10.2 7.8-19.2 19.2-19.2 50.2 0 69.4 9.6 9.6 22 14.4 34.6 14.4s25-4.8 34.6-14.4c2.6-2.6 4.8-5.4 6.8-8.4l90-123.2c6-10 5-22.4-3.4-30.6-5-5-11.4-7.4-17.8-7.4v0z M558.6 136c18.6 6.8 41 18 61.6 33.2 29.8 21.8 65.2 58.4 65.2 108 0 28.2-4.8 49.4-15.8 68.6-13 23.2-36 45.2-70.4 67.6-14.6 9.6-31.2 18.8-48.8 28.8-59.6 33.6-132 74.2-169.4 151-5.8-4.4-11.8-10-17.8-16.4-27-29.8-37.2-68-30.4-113.4 7.6-49.6 52.4-91.4 99.8-135.6 56.4-51.8 118.8-109.8 126-191.8zM525.4 96c24 161.6-203.4 226-224 362.6s96 181.4 96 181.4c32.6-113.2 144.8-151.2 219.4-199.6 81.4-52.8 100.6-102.6 100.6-163 0-115.2-144.6-181.4-192-181.4v0z M711.4 392.2c-6.6 12.6-14.6 24.4-25 35.8 0 0 2.8 22.2 4 40.8s-1.4 34.2-3.4 40c-13 38-30.2 64.2-52.8 79.6-19.6 13.4-44 19.6-77 19.6-12.8 0-32.8-7.8-48.4-21.8s-22.2-22.4-22.2-22.4c-8.2 7-15 13-22.2 21 22.6 32.8 62.6 55.4 92.6 55.4 72 0 128-27 160-120.8 10.6-29.8 4.4-98.8-5.6-127.2z M374.2 155.8c-3 0-5.8 0.2-8.6 0.6 4.6 57.2-60 88-64 129.6-2.4 25.2 11 50 22 57.6 7.6-9.6 21.4-23.8 21.4-23.8-9-7.4-13.4-25.4-11-33.6s12-19.8 21.2-31c13.4-16.4 30.4-37 38.2-63.2 2.6 1.2 5.2 2.4 7.6 4 5.8 3.4 13.6 7.8 19.4 14.8s11.6 13.8 16.8 23c0 0 12.6-15.8 17.6-25.2-19.2-36.2-53.8-52.8-80.6-52.8z M275.4 670.4l-121 25.2c-11.6 2.4-23.2-4.6-25.8-15.8s4.8-22.2 16.6-24.6c0.6-0.2 1.4-0.2 2-0.4l123-14.6c8.8-1 16.8 5 18 13.4 0.8 7.8-4.8 15-12.8 16.8z M748.6 670.4l121 25.2c11.6 2.4 23.2-4.6 25.8-15.8s-4.8-22.2-16.6-24.6c-0.6-0.2-1.4-0.2-2-0.4l-123-14.6c-8.8-1-16.8 5-18 13.4-0.8 7.8 4.8 15 12.8 16.8z"></path>
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


IosBonfireOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBonfireOutline.propTypes = {
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


export default IosBonfireOutline
