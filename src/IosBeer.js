import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBeer extends Component {

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
        <path d="M224 640v-352h544c0 0-0.6-9.8-0.6-51.4s-34.4-76.6-76.2-76.6l-21-1.4c-12-54-64-94.6-118.2-94.6s-82.2 23.2-103.4 57.8c-17-19.6-42.2-30.8-70.4-30.8-36.6 0-68.2 23-83.4 53h-48.8c-50 0-86 39.2-86 90.8v8c0 57.6 32 41.8 32 79.6 0 35.6 0 213.6 0 213.6 0 26.8-22.4 38.6-22.4 70.4 0 17.6 16 33.6 33.6 33.6h20.8z M832 416h-96v-96h-480v544l-64 64v32h608v-32l-64-64v-128h96c17.6 0 32-14.4 32-32v-256c0-17.6-14.4-32-32-32zM576 408c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zM576 704c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24zM512 512c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM832 704v0h-96v-256h96v256z"></path>
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


IosBeer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBeer.propTypes = {
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


export default IosBeer
