import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosEye extends Component {

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
        <path d="M894.2 512.4c-90.6-104.4-215.8-224.4-382.2-224.4-67.2 0-128.8 19-193.8 59.6-54.8 34.4-111 82.8-188.2 162.4l-2 2 13.4 13.8c110.2 112.8 205.4 210.2 370.6 210.2 73 0 143.8-23.8 216.4-72.8 61.8-41.8 114.4-94.8 156.6-137.6l11-11-1.8-2.2zM512 672c-88.2 0-160-71.8-160-160s71.8-160 160-160c88.2 0 160 71.8 160 160s-71.8 160-160 160z M500.8 453.6c0-13.8 4-26.8 11-37.6-53 0-95.8 43.2-95.8 96.4s43 96.2 95.8 96.2 96-43 96-96.2v0c-10.8 7-23.8 11-37.6 11-38.2-0.2-69.4-31.4-69.4-69.8z"></path>
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


IosEye.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosEye.propTypes = {
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


export default IosEye
