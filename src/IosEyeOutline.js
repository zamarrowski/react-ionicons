import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosEyeOutline extends Component {

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
        <path d="M894.2 512.4c-90.6-104.4-215.8-224.4-382.2-224.4-67.2 0-128.8 19-193.8 59.6-54.8 34.4-111 82.8-188.2 162.4l-2 2 13.4 13.8c110.2 112.8 205.4 210.2 370.6 210.2 73 0 143.8-23.8 216.4-72.8 61.8-41.8 114.4-94.8 156.6-137.6l11-11-1.8-2.2zM512 320c66.2 0 129.8 19 194.4 61.2 47.8 31.2 94.8 73.4 147.4 132.2-76.6 77.4-191.6 190.6-341.8 190.6-68.4 0-128.4-16.8-188.4-56.4-55-36.2-104.6-86.6-152.4-135.6 118.2-119.4 216.8-192 340.8-192z M512 672c88.2 0 160-71.8 160-160s-71.8-160-160-160c-88.2 0-160 71.8-160 160s71.8 160 160 160zM512 384.6c70.4 0 128 57.2 128 127.4s-57.6 127.4-128 127.4c-70.4 0-127.8-57.2-127.8-127.4s57.4-127.4 127.8-127.4z M576 512v0c0 35-28.8 64-63.6 64s-64.4-30.4-64.4-65.4 31.6-62.6 64-62.6v-32c-53 0-95.8 43.2-95.8 96.4s43 96.2 95.8 96.2 96-43.2 96-96.2v-0.4h-32z"></path>
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


IosEyeOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosEyeOutline.propTypes = {
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


export default IosEyeOutline
