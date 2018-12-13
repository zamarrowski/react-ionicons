import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLeaf extends Component {

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
        <path d="M907.8 765.4c-103.6-16-111.4-31.4-111.4-31.4 31.2-148-44.8-302.2-152.6-391.2-143.6-118.4-361.8-32.4-531.8-212.4-39.6-42-16.6 471 196.2 665.4 155.6 142 338.8 98.4 389 75.2 45.6-21.2 77.4-67.8 77.4-67.8 83 26 124 24.4 124 24.4 29.2 3.6 44-56.8 9.2-62.2zM724.2 772.2c-272.4-81.8-483.2-375-483.2-375s185.8 221.4 502.8 326.4c0.2 16.2-9.2 39.4-19.6 48.6z"></path>
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


IosLeaf.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLeaf.propTypes = {
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


export default IosLeaf
