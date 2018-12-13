import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCart extends Component {

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
        <path d="M339.2 755.2c-45.764 0-83.2 37.436-83.2 83.202 0 45.764 37.436 83.2 83.2 83.2s83.202-37.436 83.202-83.2c-0.002-45.768-37.44-83.202-83.202-83.202zM96 102.4v83.2h83.2l149.766 303.364-62.616 101.908c-6.236 10.4-10.4 24.964-10.4 39.53 0 55.7 38.050 83.2 89.65 83.2h486.4v-80h-476.214c-6.236 0-10.4-4.164-10.4-10.4 0-2.072 4.414-10.4 4.414-10.4l41.564-65.6h309.908c31.202 0 58.256-16.634 72.8-43.672l149.764-257.6c2.474-4.922 4.164-12.492 4.164-20.798 0-22.892-18.728-39.53-41.6-39.53h-615.672l-39.528-83.202h-135.2zM748.798 755.2c-45.764 0-83.2 37.436-83.2 83.202 0 45.764 37.436 83.2 83.2 83.2s83.202-37.438 83.202-83.202c0-45.766-37.438-83.2-83.202-83.2z"></path>
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


MdCart.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCart.propTypes = {
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


export default MdCart
