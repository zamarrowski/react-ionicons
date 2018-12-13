import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoXbox extends Component {

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
        <path d="M253.6 496.6c79.4-117.2 155.8-185.6 155.8-185.6s-84.2-97.8-185.6-134.8l-6.6-1.6c-93.8 82.2-153.2 202.8-153.2 337.4 0 101.4 33.8 195 90.4 270 0-8.8 1.2-140.6 99.2-285.4z M960 512c0-134.6-59.4-255.2-153.2-337.4l-6.4 1.8c-101.4 37-185.8 134.8-185.8 134.8s76.4 68.4 155.8 185.6c98 144.8 99.2 276.6 99 285.4 57-75.2 90.6-168.8 90.6-270.2z M402.4 161.8c58.6 26.2 109.2 69.2 109.2 69.2s51-42.8 109.6-69.2c73.6-33 129.8-22.6 144.6-19-72.2-49.6-159.6-78.8-253.8-78.8s-181.6 29.2-253.8 78.8c14.4-3.6 70.4-14.2 144.2 19z M717.4 585.8c-92.6-113.8-205.8-187.8-205.8-187.8s-112.6 74-205.4 187.8c-79.6 97.8-109.2 169.6-125.2 215.6l-2.6 9.6c82 91.4 201 149 333.6 149s251.6-57.6 333.6-149l-2.8-9.6c-16-46-45.8-117.8-125.4-215.6z"></path>
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


LogoXbox.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoXbox.propTypes = {
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


export default LogoXbox
