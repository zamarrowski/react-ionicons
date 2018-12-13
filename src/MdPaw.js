import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdPaw extends Component {

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
        <path d="M919 381c-9.4-25.4-25.4-43.8-46.2-53.2-9.6-4.2-19.4-6.4-29.6-6.4-43.4 0-87.4 40.4-109.8 100.6-27.6 74.6-11.6 147.6 37.2 170 9.8 4.4 20.2 6.8 31.2 6.8 44.2 0 89.2-37 111.8-92.2 17-42 19-88.8 5.4-125.6z M290.6 422c-22.2-60.2-66.4-100.6-109.8-100.6-10.2 0-20.2 2.2-29.6 6.4-20.8 9.4-36.6 27.8-46.2 53.2-13.8 36.8-11.8 83.6 5.4 125.4 22.6 55.2 67.6 92.2 111.8 92.2 10.8 0 21.4-2.2 31.2-6.8 48.8-22.2 64.8-95.2 37.2-169.8z M387 413.6c4 0.2 8 0 12-0.4 23.4-2.2 44.6-14.2 61.2-34.6 26.8-33 34.2-84.4 28.6-137.4-8.6-81.6-51.6-142.6-109.6-145.2 0 0-8.2 0-12.4 0.4-25.6 2.6-48.8 15.8-67 38.4-26.6 32.8-39.4 81.4-34.2 130.2 8.6 80.8 61.8 146 121.4 148.6z M512 477.4c-138.6 0-277.4 164.8-277.4 323.2 0 47.2 23.6 85.2 47 100.8 28.8 19.2 49 26.8 91 26.8 50 0 63.6-17.6 87-33 17-11.2 31.6-20.8 52.4-20.8s35.4 9.6 52.4 20.8c23.4 15.4 37 33 87 33 42.2 0 62.4-7.6 91-26.8 23.2-15.6 47-53.6 47-100.8 0-158.4-138.8-323.2-277.4-323.2z M625.2 413c4 0.4 8 0.6 12 0.4 59.6-2.6 113-67.8 121.6-148.6 5.2-48.8-7.6-97.6-34.2-130.2-18.4-22.6-40.6-35.2-66.2-37.6-4.2-0.4-13.4-0.6-13.4-0.6-57.8 2.6-100.8 63-109.6 144.8-5.6 53 1.8 104.6 28.6 137.4 16.8 20 38 32 61.2 34.4z"></path>
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


MdPaw.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPaw.propTypes = {
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


export default MdPaw
