import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoBuffer extends Component {

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
        <path d="M141.4 329l338.4 163.4c8.8 4.2 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c17.8-8.6 17.8-22.6 0-31.2l-338.4-163.4c-8.8-4.2-20.6-6.4-32.2-6.4s-23.4 2.2-32.2 6.4l-338.4 163.4c-17.8 8.6-17.8 22.6 0 31.2z M882.6 496.4c0 0-61.8-29.8-70-33.8s-10.4-3.8-19 0.2-249.6 120.4-249.6 120.4c-9 4.2-20.6 6.4-32.2 6.4s-23.4-2.2-32.2-6.4c0 0-234.6-113.2-245.6-118.6-12-5.8-15.4-5.8-26.2-0.6-11.2 5.4-66.8 32.2-66.8 32.2-17.8 8.6-17.8 22.6 0 31.2l338.4 163.4c8.8 4.2 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c18.2-8.4 18.2-22.4 0.4-31z M882.6 695c0 0-61.8-29.8-70-33.8s-10.4-3.8-19 0.2-249.4 120.6-249.4 120.6c-9 4.2-20.6 6.4-32.2 6.4s-23.4-2.2-32.2-6.4c0 0-234.6-113.2-245.6-118.6-12-5.8-15.4-5.8-26.2-0.6-11.2 5.4-66.8 32.2-66.8 32.2-17.8 8.6-17.8 22.6 0 31.2l338.4 163.4c8.8 4.4 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c18-8.6 18-22.6 0.2-31.2z"></path>
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


LogoBuffer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoBuffer.propTypes = {
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


export default LogoBuffer
