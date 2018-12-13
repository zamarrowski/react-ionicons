import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosColorWand extends Component {

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
        <path d="M366 124h48v128h-48v-128z M366 532h48v128h-48v-128z M548 358h128v48h-128v-48z M595.8 212.2l-33.2-33.2-90.4 90.6 33.2 33.4z M190.2 218.2l90.4 90.8 33.2-33.4-90.4-90.6z M184.2 558.2l33.2 33.4 90.4-90.6-33.2-33.4z M116 358h128v48h-128v-48z M384.4 306.8l-68 68.4 86.8 87 68.2-68.2z M894 817.6l-390.6-391.6-68.2 68.2 390.8 391.8z"></path>
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


IosColorWand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosColorWand.propTypes = {
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


export default IosColorWand
