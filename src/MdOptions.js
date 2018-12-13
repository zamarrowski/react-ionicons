import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdOptions extends Component {

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
        <path d="M64 768h544v64h-544v-64z M800 768h160v64h-160v-64z M768 895c0 35.898-28.654 65-64 65v0c-35.346 0-64-29.102-64-65v-190c0-35.898 28.654-65 64-65v0c35.346 0 64 29.102 64 65v190z M64 480h160v64h-160v-64z M416 480h544v64h-544v-64z M384 607c0 35.898-28.654 65-64 65v0c-35.346 0-64-29.102-64-65v-190c0-35.898 28.654-65 64-65v0c35.346 0 64 29.102 64 65v190z M64 192h544v64h-544v-64z M800 192h160v64h-160v-64z M768 319c0 35.898-28.654 65-64 65v0c-35.346 0-64-29.102-64-65v-190c0-35.898 28.654-65 64-65v0c35.346 0 64 29.102 64 65v190z"></path>
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


MdOptions.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdOptions.propTypes = {
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


export default MdOptions
