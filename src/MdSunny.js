import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdSunny extends Component {

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
        <path d="M554.6 64h-85.4v128h85.4v-128zM812.8 151.4l-76.8 76.8 59.8 59.8 76.8-76.8-59.8-59.8zM211.2 151.4l-59.8 59.8 76.8 76.8 59.8-59.8-76.8-76.8zM512 256c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256v0zM960 469.4h-128v85.4h128v-85.4zM192 469.4h-128v85.4h128v-85.4zM795.8 736l-59.8 59.8 76.8 76.8 59.8-59.8-76.8-76.8zM228.2 736l-76.8 76.8 59.8 59.8 76.8-76.8-59.8-59.8zM554.6 832h-85.4v128c12.8 0 85.4 0 85.4 0v-128z"></path>
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


MdSunny.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdSunny.propTypes = {
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


export default MdSunny
