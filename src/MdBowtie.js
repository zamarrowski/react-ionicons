import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBowtie extends Component {

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
        <path d="M552 608h-80c-30.8 0-56-25.2-56-56v-80c0-30.8 25.2-56 56-56h80c30.8 0 56 25.2 56 56v80c0 30.8-25.2 56-56 56z M352 560v-96c0-36.4 17.4-68.8 44.4-89.2-12.4-54.8-204.4-182.8-268.4-182.8-35.2 0-64 28.8-64 64v512c0 35.2 28.6 64 64 64 64 0 256-128 268.4-182.8-27-20.4-44.4-52.8-44.4-89.2z M896 192c-64 0-256 128-268.4 182.8 27 20.4 44.4 52.8 44.4 89.2v96c0 36.4-17.4 68.8-44.4 89.2 12.4 54.8 204.4 182.8 268.4 182.8 35.4 0 64-28.8 64-64v-512c0-35.2-28.8-64-64-64z"></path>
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


MdBowtie.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBowtie.propTypes = {
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


export default MdBowtie
