import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdMic extends Component {

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
        <path d="M512 640c75.424 0 137.142-61.848 137.142-137.428v-301.144c0-75.58-61.718-137.428-137.142-137.428s-137.142 61.848-137.142 137.428v301.144c0 75.58 61.718 137.428 137.142 137.428zM754.278 489.096c0 137.428-116.564 233.63-242.278 233.63s-242.278-96.204-242.278-233.63h-77.722c0 155.746 123.438 286.306 274.288 306.93v163.974h91.426v-163.974c150.848-22.904 274.286-151.184 274.286-306.93h-77.722z"></path>
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


MdMic.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMic.propTypes = {
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


export default MdMic
