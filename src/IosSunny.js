import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSunny extends Component {

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
        <path d="M496 800h32v128h-32v-128z M496 96h32v128h-32v-128z M96 496h128v32h-128v-32z M800 496h128v32h-128v-32z M296.903 704.327l22.627 22.627-90.509 90.509-22.627-22.627 90.509-90.509z M794.978 206.523l22.627 22.627-90.509 90.509-22.627-22.627 90.509-90.509z M319.809 297.039l-22.627 22.627-90.509-90.509 22.627-22.627 90.509 90.509z M817.341 794.842l-22.627 22.627-90.509-90.509 22.627-22.627 90.509 90.509z M512 320c-105.8 0-192 86.2-192 192s86.2 192 192 192c105.8 0 192-86.2 192-192s-86.2-192-192-192v0z"></path>
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


IosSunny.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSunny.propTypes = {
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


export default IosSunny
