import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMagnetOutline extends Component {

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
        <path d="M380.2 266.2c32.2 3.8 65.6 21.6 93.8 49.8l335.4 335.4 118.6-118.6-355.6-355.4c-108.6-108.6-286.4-108.6-395 0v0c-108.6 108.6-108.6 286.4 0 395l355.6 355.6 118.6-118.6-335.4-335.2c-28.8-28.8-46.8-61.8-50.8-93.2-4.2-32 6.2-60.8 30.6-85.2 23-23.2 52.2-33.4 84.2-29.6zM888.4 533l-79 79-59.2-59.2 79-79 59.2 59.2zM612 809.4l-79 79-59.2-59.2 79-79 59.2 59.2zM296.4 493.8l236.6 236.6-79 79-256.8-256.6c-47.2-47.4-73.2-110.4-73.2-177.8s26-130.4 73.2-177.8c47.2-47.2 110.4-73.2 177.8-73.2s130.4 26 177.8 73.2l256.6 256.8-79 79-236.6-236.6c-65.4-65.4-156-82-217.8-20.2-64 64-45 152.2 20.4 217.6z"></path>
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


IosMagnetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMagnetOutline.propTypes = {
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


export default IosMagnetOutline
