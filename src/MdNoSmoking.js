import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdNoSmoking extends Component {

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
        <path d="M720 512h32v96h-32v-96z M224 608h259.2l-96-96h-163.2z M729 120.2c-0.8-0.4-1.4-0.8-2-1.2-21.8-12-45-21.4-68.8-29.6-3.6-1.2-7.2-2.4-10.8-3.6-42.8-13.6-88.2-21.8-135.4-21.8-247.4 0-448 200.6-448 448 0 168.6 93.2 315.2 230.8 391.6 0.8 0.4 1.4 1 2.2 1.4 21.8 12 45 21.4 68.8 29.6 3.6 1.2 7.2 2.4 10.8 3.6 42.8 13.6 88 21.8 135.4 21.8 247.4 0 448-200.6 448-448 0-168.6-93.2-315.4-231-391.8zM512 852.8c-18.6 0-36.8-1.8-54.4-4.8-19.6-3.2-38.6-8.2-57-14.6-3.8-1.2-7.6-2.4-11.2-3.8-13-5-25.8-10.6-38-17.2-107.2-57.4-180.2-170.4-180.2-300.6 0-74.4 24.8-142.8 65.4-198.8l474.4 474.4c-56.2 40.6-124.6 65.4-199 65.4zM787.6 710.8l-474.4-474.4c56-40.4 124.2-65.2 198.8-65.2 18.6 0 36.6 1.8 54.4 4.8 19.6 3.2 38.6 8.2 57 14.6 3.6 1.2 7.4 2.4 11.2 3.8 12.4 4.8 24.4 10 36 16.2 108.4 57 182.4 170.6 182.4 301.6-0.2 74.4-25 142.6-65.4 198.6z M704 512h-68l68 68z M768 512h32v96h-32v-96z M720.2 425.4c-17.6-8.2-44-11.4-91.2-11.4-2.4 0-4.8 0-7.2 0-25.4 0.2-31.8-0.2-40-12.2-5.6-8.4-2-29.6 7.4-43.8 3.2-4.8 3.6-11.2 0.8-16.4s-8.2-8.4-14-8.6c-0.2 0-18.8-0.2-36.6-7.8-21.2-9-31.2-24.2-31.2-46.2 0-51.6 43.6-55.4 45.6-55.4v-32c-24 0-77.6 22-77.6 87.4 0 35 18 62 51.4 76 8.4 3.4 16.8 5.8 24 7.2-6.6 19.6-7.2 41.8 3.4 57.4 18 26.6 40.6 26.4 66.6 26.2 2.2 0 4.6 0 7 0 52.6 0 69.2 4.6 77.8 8.6 11.4 5.2 13.6 15 13.2 31.4 0 1.4 0 0.8 0 2h32c0-0.8 0-0.8 0-2 0-14.2 0.6-45.6-31.4-60.4z M800 488c0-51.4-6-78.4-18.2-99.2-17.2-28.8-44.8-44.8-77.8-44.8h-34.8c5.8-16.6 10.8-39.6 7-61.8-6.4-37.6-38.2-60-86.2-60v32c42 0 52.2 18.2 54.8 33.4 5 29-13.6 64.2-13.8 64.6-2.8 5-2.6 11 0.2 15.8s8.2 7.8 13.8 7.8h59c21.8 0 38.8 9.8 50.2 29.2 6.2 10.6 13.8 27 13.8 82.8h32v0.2z"></path>
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


MdNoSmoking.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdNoSmoking.propTypes = {
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


export default MdNoSmoking
