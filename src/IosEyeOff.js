import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosEyeOff extends Component {

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
        <path d="M240.8 80l514.8 880 27.6-16-514.8-880z M512 288c-24.6 0-48 2.6-71 7.6l40.8 70c9.8-1.8 19.8-2.8 30.2-2.8 84.8 0 153.6 67 153.6 149.4 0 38.4-15 73.4-39.6 100l48.6 83c91.6-46.6 164.8-125.8 221.4-183-88.8-103-214.8-224.2-384-224.2z M512 661.4c-84.8 0-153.6-67-153.6-149.4 0-38.4 15-73.4 39.6-100l-48.2-82.4c-73 38.2-143.2 101.2-221.8 182.4 115.6 118.4 212.6 224 384 224 24.6 0 48.2-2.8 71-7.8l-40.8-69.8c-9.8 2-19.8 3-30.2 3z M601.4 506.8c-7.8 3.4-16.4 5.2-25.4 5.2-3 0-6-0.2-8.8-0.6l24 41.2c6.6-12.2 10.4-26 10.4-40.6 0-1.8 0-3.6-0.2-5.2z M432.8 471.4c-6.6 12.2-10.4 26-10.4 40.6 0 46.6 37.6 84.6 85 87l-74.6-127.6z"></path>
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


IosEyeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosEyeOff.propTypes = {
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


export default IosEyeOff
