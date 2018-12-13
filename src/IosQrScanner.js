import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosQrScanner extends Component {

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
        <path d="M128 248.4c0-44.4 42-88.4 88.4-88.4 39.6 0 135.6 0 135.6 0v-32h-133.6c-67 0-122.4 53.4-122.4 120.4v135.6h32c0 0 0-91.4 0-135.6z M896 384h32v-135.6c0-67-55.4-120.4-122.4-120.4h-133.6v32c0 0 96 0 135.6 0 46.4 0 88.4 44 88.4 88.4s0 135.6 0 135.6z M128 640h-32v135.6c0 67 55.4 120.4 122.4 120.4h133.6v-32c0 0-96 0-135.6 0-46.4 0-88.4-44-88.4-88.4s0-135.6 0-135.6z M896 775.6c0 44.4-42 88.4-88.4 88.4-39.6 0-135.6 0-135.6 0v32h133.6c67 0 122.4-53.4 122.4-120.4v-135.6h-32c0 0 0 91.4 0 135.6z"></path>
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


IosQrScanner.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosQrScanner.propTypes = {
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


export default IosQrScanner
