import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosClipboard extends Component {

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
        <path d="M288 832h448v-544h-32v64h-384v-64h-32z M641.6 192h-33.6c0-11.2-2-22-5.4-32-4.2-12-10.6-22.8-18.8-32-17.6-19.8-43.2-32-71.8-32s-54.2 12.2-71.8 32c-8.2 9.2-14.6 20-18.8 32-3.4 10-5.4 20.8-5.4 32h-29c-17.6 0-35 12.4-35 30v98h320v-98c-0-17.6-12.8-30-30.4-30zM512 223.4c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32c0 17.6-14.4 32-32 32z M704 222c0 0.6 0 1.4 0 2v-2z M800 128h-184.2c8.2 9.2 14.6 20 18.8 32l0.2 0.2c1.6-0.2 3.4-0.2 5.2-0.2 34.6 0 62.8 27.6 64 62v0 34h64v608h-512v-608h64v-22c0-35.4 23.4-68 64-68 0.8 0 1.8 0 2.6 0 1 0 1.8 0 2.8 0 3.4-18 10.6-28.8 18.8-38h-184.2c-17.6 0-32 14.4-32 32v736c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32v-736c0-17.6-14.4-32-32-32z"></path>
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


IosClipboard.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosClipboard.propTypes = {
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


export default IosClipboard
