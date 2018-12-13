import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCloudOutline extends Component {

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
        <path d="M806.002 434.002c-28.008-137.998-148.006-242.002-294.002-242.002-115.996 0-215.998 65.996-265.994 162-120.002 12.004-214.006 113.996-214.006 238 0 131.992 108.008 240 240 240h520c110 0 200-90 200-200.002 0-105.994-81.994-191.998-185.998-197.996zM792 752h-520c-88.008 0-160-71.992-160-160 0-88 71.992-160 160-160h28.008c25.996-92 110-160 211.992-160 121.992 0 220 98 220 220v20h60c65.996 0 120 54.006 120 120 0 65.996-54.004 120-120 120z"></path>
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


MdCloudOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCloudOutline.propTypes = {
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


export default MdCloudOutline
