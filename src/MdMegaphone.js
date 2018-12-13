import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdMegaphone extends Component {

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
        <path d="M764.2 286.8l-46.2 46c29.4 29.4 47.8 70.4 47.8 115.2s-18.4 85.8-47.8 115.2l46.2 46.2c41.2-41.2 66.8-98.4 66.8-161.2s-25.6-120.2-66.8-161.4z M856.4 198l-45.4 45.4c52.2 52.2 84.6 124.8 84.6 204.6 0 79.6-32.2 152.2-84.6 204.6l45.4 45.4c63.8-64.2 103.6-152.6 103.6-250s-39.6-185.8-103.6-250z M640 368.2v-208.2h-64l-192 160h-256l-64 32v224l64 32 160 256h96l-60-256h60l192 128h64v-208.2c36.8-3.4 64-37.8 64-79.8s-27.2-76.4-64-79.8z"></path>
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


MdMegaphone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMegaphone.propTypes = {
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


export default MdMegaphone
