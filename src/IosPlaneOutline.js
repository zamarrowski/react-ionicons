import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPlaneOutline extends Component {

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
        <path d="M430.4 176l187 292.2 9.8 15 18.2-0.6 136.4-4c6.4-0.4 12.4-0.4 18.4-0.4 34.4 0 67.4 4.8 93 13.4 21.2 7.2 30.8 14.8 34.2 18.6-3.2 3.8-13 11.4-34.2 18.6-25.6 8.6-58.6 13.4-93 13.4-5.6 0-12.2 0-18.4-0.4h-0.8l-153.6-3.6-9.8 15.8-187.2 294h-32.2l101.8-270 15.6-41.8-44.4-2-268.6-10.8-10.2 13.4-80 103.2h-1.2l46.4-116.6 4.8-12.2-4.8-11.6-46.4-115.6h1.2l78.8 99.6 10 12.4 16.2-0.6 298.4-9.8-15.8-41.4-101.6-268.2h31.6zM448 144h-96l118 311.4-253.6 8.6-88.4-112h-64l64 160-64 160h64l89.8-115.4 252.2 10.4-118 313h96l196.4-309 135.6 3c6.6 0.4 13.2 0.2 20 0.2 88.4 0 160-28.8 160-64.2s-71.6-64-160-64c-6.8 0-13.4 0.2-20 0.4l-135.6 4.4-196.4-306.8z"></path>
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


IosPlaneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPlaneOutline.propTypes = {
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


export default IosPlaneOutline
