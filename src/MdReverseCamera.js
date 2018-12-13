import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdReverseCamera extends Component {

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
        <path d="M880 192h-176l-64-64h-256l-64 64h-176c-44.2 0-80 35.8-80 80v544c0 44.2 35.8 80 80 80h736c44.2 0 80-35.8 80-80v-544c0-44.2-35.8-80-80-80zM736 534h-195.4l89.6-90.2c-29.4-30.8-71.4-51-117.6-51-92.4 0-168 75.6-168 168s75.6 168 168 168c71 0 132.4-43 156.4-107h59.2c-26.8 94-112.4 163-215.6 163-124.6 0-224-100.8-224-224s100.8-224 224-224c61.6 0 117.4 25.2 158 65.8l65.6-65.8v197.2z"></path>
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


MdReverseCamera.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdReverseCamera.propTypes = {
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


export default MdReverseCamera
